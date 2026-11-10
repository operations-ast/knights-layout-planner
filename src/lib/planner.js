// Pure layout logic. Every function takes the planner state `st` explicitly.
import { TENTS, SEATING, ACC, WALLROT, G, DANCE, EXIT_SPOTS, DEFAULT, STANDING_SQFT } from './constants.js';
import { tentShape, yTop, xLeft, rectInside, evenPoints, perimeter, area as shapeArea } from './shape.js';

export const clone = (o) => JSON.parse(JSON.stringify(o));
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const r2 = (n) => Math.round(n * 100) / 100;
export const snap = (v) => Math.round(v * 2) / 2;
export function ft(n) { const f = Math.floor(n + 1e-6), i = Math.round((n - f) * 12); return `${f}'-${i}"`; }

export function store(k, v) {
  try {
    if (v === undefined) return JSON.parse(localStorage.getItem(k) || 'null');
    localStorage.setItem(k, JSON.stringify(v));
  } catch { return null; }
}

/** Merge a saved state over the defaults so older saves keep working. */
export function mergeState(s) {
  const n = Object.assign(clone(DEFAULT), clone(s), { acc: Object.assign(clone(DEFAULT.acc), clone(s.acc || {})) });
  if (!SEATING[n.seating]) { n.seating = 'rounds60'; n.seatsPer = 8; }
  if (n.mixRound !== 'rounds60' && n.mixRound !== 'rounds72') n.mixRound = 'rounds60';
  if (!TENTS[n.tentType]) n.tentType = 'frame';
  // sizes can change when the rental catalog changes; fall back to auto
  if (n.tentSize !== 'auto' && !TENTS[n.tentType].sizes.some(([w, l]) => `${w}x${l}` === n.tentSize)) { n.tentSize = 'auto'; n.pos = {}; n.tables = null; }
  delete n.photoSrc;
  return n;
}

/* ---------- geometry ---------- */
// bounding box of a w×h footprint turned by rot degrees
export const fp = (d, rot) => { const a = rot * Math.PI / 180, c = Math.abs(Math.cos(a)), s = Math.abs(Math.sin(a)); return [r2(d[0] * c + d[1] * s), r2(d[0] * s + d[1] * c)]; };
export const norm360 = (a) => ((Math.round(a) % 360) + 360) % 360;
export const norm180 = (a) => { const n = norm360(a); return n > 180 ? n - 360 : n; };
export const ov = (a, b) => a.x < b.x + b.w - 1e-6 && a.x + a.w > b.x + 1e-6 && a.y < b.y + b.h - 1e-6 && a.y + a.h > b.y + 1e-6;
export const infl = (r, d) => ({ x: r.x - d, y: r.y - d, w: r.w + 2 * d, h: r.h + 2 * d });

export const danceFinish = (st) => DANCE[(st.acc.dance || {}).finish] || DANCE.cherry;
export const szDims = (z) => { const [a, b] = z.split('x').map(Number); return [Math.max(a, b), Math.min(a, b)]; };
export const danceNeed = (st) => Math.round(st.guests * 1.5);
export function danceDims(st, s) {
  // floors are built from 4' × 4' sections, so custom sizes round up to the next 4'
  if (s.size === 'custom') return [Math.ceil((s.cl || 20) / 4) * 4, Math.ceil((s.cw || 20) / 4) * 4];
  const F = danceFinish(st);
  const z = F.sizes.includes(s.size) ? s.size : F.sizes.find((z) => szDims(z)[0] * szDims(z)[1] >= danceNeed(st)) || F.sizes[F.sizes.length - 1];
  return szDims(z);
}
export const autoQty = (id, g) => id === 'highboy' ? Math.max(2, Math.ceil(g / 25)) : id === 'buffet' ? clamp(Math.ceil(g / 125), 1, 4) : clamp(Math.ceil(g / 150), 1, 4);
export function exitCount(g) { return g < 10 ? 1 : g < 200 ? 2 : g < 500 ? 3 : g < 1000 ? 4 : g < 2000 ? 5 : 6; }

function stepPts(len, max) { const n = Math.max(1, Math.ceil(len / max - 1e-6)); return Array.from({ length: n + 1 }, (_, i) => i * len / n); }
export function getPoles(type, W, L, sh = tentShape(type, W, L)) {
  const P = [], s = type === 'structure' ? 15 : 10;
  if (sh.oval) P.push(...evenPoints(sh, Math.max(8, Math.round(perimeter(sh) / s))));
  else {
    for (const x of stepPts(L, s)) P.push({ x, y: 0 }, { x, y: W });
    for (const y of stepPts(W, s).slice(1, -1)) P.push({ x: 0, y }, { x: L, y });
  }
  if (type === 'pole' || type === 'sailcloth') {
    const n = Math.max(1, Math.round(L / 20)), xs = n === 1 ? [L / 2] : Array.from({ length: n - 1 }, (_, i) => (i + 1) * L / n);
    const rows = type === 'pole' ? (W >= 60 ? [W / 4, W / 2, 3 * W / 4] : [W / 2]) : (W > 50 ? [W / 3, 2 * W / 3] : [W / 2]);
    for (const y of rows) for (const x of xs) P.push({ x, y, inner: true });
  }
  return P;
}
export const EXIT_SIDES = ['bottom', 'top', 'left', 'right'];
export const EXIT_W = 6; // each opening is 6' (72") wide

/** The automatic exit plan for a guest count: [{side, f, kind}], f = fraction along that side. */
export const autoExitSpots = (g) => EXIT_SPOTS.slice(0, exitCount(g)).map(([side, f], i) => ({ side, f, kind: i === 0 ? 'entrance' : 'exit' }));

/* ---------- chandeliers ---------- */
/** Automatic chandeliers: one per 20' bay, down the centerline. Positions in feet. */
export const autoChandeliers = (W, L) => { const n = Math.max(1, Math.round(L / 20)); return Array.from({ length: n }, (_, i) => ({ x: (i + 0.5) * L / n, y: W / 2 })); };
/** Chandeliers as drawn. User positions are stored as fractions of the tent (fx, fy) so they survive a resize. */
export const chandeliersFor = (st, W, L) => !st.chandeliers ? [] : st.chandList ? st.chandList.map((c) => ({ x: c.fx * L, y: c.fy * W })) : autoChandeliers(W, L);
export const chandsToList = (lay) => lay.chands.map((c) => ({ fx: c.x / lay.L, fy: c.y / lay.W }));
/** Keep a chandelier at least 1' inside the tent wall (follows the oval's curve). */
export function clampChandelier(sh, x, y) {
  const cx = clamp(x, 1, sh.L - 1), t = yTop(sh, cx);
  return { x: cx, y: clamp(y, Math.min(t + 1, sh.W / 2), Math.max(sh.W - t - 1, sh.W / 2)) };
}
/** Where a new chandelier goes: the centerline spot farthest from the existing ones. */
export function nextChandelierSpot(lay) {
  const { W, L, chands } = lay; let best = { x: L / 2, y: W / 2 }, bestD = -1;
  for (let x = 2; x <= L - 2; x += 0.5) {
    const d = chands.length ? Math.min(...chands.map((c) => Math.hypot(c.x - x, c.y - W / 2))) : L;
    if (d > bestD) { bestD = d; best = { x, y: W / 2 }; }
  }
  return { fx: best.x / L, fy: best.y / W };
}

/** Snapshot the exits as drawn into an editable list, so the first manual edit keeps everything where it was. */
export const exitsFromLayout = (lay) => lay.exits.map((e) => ({ side: e.side, f: e.c / (e.side === 'top' || e.side === 'bottom' ? lay.L : lay.W), kind: e.kind }));

/** Pick a sensible spot for a newly added exit: the side with the fewest openings, away from existing ones. */
export function nextExitSpot(exits) {
  const count = (s) => exits.filter((e) => e.side === s).length;
  const side = ['bottom', 'top', 'right', 'left'].reduce((a, b) => (count(b) < count(a) ? b : a));
  const taken = exits.filter((e) => e.side === side).map((e) => e.f);
  const f = [0.5, 0.25, 0.75, 0.15, 0.85, 0.35, 0.65].find((c) => taken.every((t) => Math.abs(t - c) > 0.12)) ?? 0.5;
  return { side, f, kind: exits.some((e) => e.kind === 'entrance') ? 'exit' : 'entrance' };
}

/**
 * Exits: `c` is the position along the side, `p` the wall coordinate there (0/W/0/L for rectangles,
 * on the curve for ovals), and {x, y} the opening's centre point on the wall.
 * `custom` is the user's own list ([{side, f, kind}]); null means automatic.
 */
export function getExits(g, W, L, sh = { oval: false, W, L, e: 0 }, custom = null) {
  const spots = custom || autoExitSpots(g), half = EXIT_W / 2;
  return spots.map(({ side, f, kind }) => {
    const h = side === 'top' || side === 'bottom';
    // automatic exits on an oval stay on the straight section when there is one; user-placed ones go where they're put
    const straight = !custom && sh.oval && L - 2 * sh.e >= 8;
    const lo = straight ? sh.e + half : half + 1, hi = straight ? L - sh.e - half : L - half - 1;
    const c = h ? clamp(f * L, lo, Math.max(lo, hi)) : clamp(f * W, half + 1, W - half - 1);
    const p = side === 'top' ? yTop(sh, c) : side === 'bottom' ? W - yTop(sh, c) : side === 'left' ? xLeft(sh, c) : L - xLeft(sh, c);
    const zone = h ? { x: c - half, y: side === 'top' ? p : p - EXIT_W, w: EXIT_W, h: EXIT_W } : { x: side === 'left' ? p : p - EXIT_W, y: c - half, w: EXIT_W, h: EXIT_W };
    return { side, f, kind, c, p, x: h ? c : p, y: h ? p : c, zone, main: kind === 'entrance' };
  });
}

// head table: 4 seats along each 8' banquet table; a custom count sets the length
export const HEAD_MAX = 40;
export const HEAD_CHAIR = 0.55; // how close a chair centre may come to the table's edge
export const headSeatsDefault = (n) => clamp(Math.round(n) || 8, 1, HEAD_MAX);
/** Most chairs that fit along a head table w feet long. */
export const headCap = (w) => Math.max(2, Math.floor(w / 1.5));

/**
 * Head table size and chairs. s: the head table's settings ({ size, seats, chairs }).
 * chairs are chair centres in the table's own frame (x along the table, y toward the back; table at the back edge).
 * s.chairs = null means evenly spaced; a list means the user moved, removed or added seats by hand.
 */
export function headTable(s) {
  const a = ACC.find((x) => x.id === 'head');
  let w, h, n, sweet = false;
  if (s.size === 'custom') { n = headSeatsDefault(s.seats); w = Math.max(8, Math.ceil(n / 4) * 8); h = 6; }
  else { [w, h, n] = a.sizes[s.size] || a.sizes[a.def]; sweet = s.size === 'Sweetheart · 2'; }
  const auto = Array.from({ length: n }, (_, i) => ({ x: r2((i + 0.5) * w / n), y: h - 4.45 }));
  const custom = Array.isArray(s.chairs);
  const chairs = custom ? s.chairs.map((c) => ({ x: clamp(+c.x || 0, HEAD_CHAIR, w - HEAD_CHAIR), y: clamp(+c.y || 0, HEAD_CHAIR, h - HEAD_CHAIR) })) : auto;
  return { dims: [w, h], seats: chairs.length, chairs, custom, sweet, front: h - 4.45 };
}

/** A spot for one more chair along the front of the head table: the widest gap between the chairs already there. */
export function headSeatSpot(item) {
  const [w] = item.dims, y = item.front ?? item.dims[1] - 4.45;
  let best = { x: w / 2, y }, bestD = -1;
  for (let x = HEAD_CHAIR + 0.35; x <= w - HEAD_CHAIR - 0.35 + 1e-6; x += 0.5) {
    const d = Math.min(Infinity, ...item.chairs.map((c) => Math.hypot(c.x - x, c.y - y)));
    if (d > bestD) { bestD = d; best = { x: r2(x), y }; }
  }
  return best;
}

function accInstances(st) {
  const out = [];
  for (const a of ACC) {
    const s = st.acc[a.id]; if (!s || !s.on) continue;
    let dims, seats = 0, n = 1, extra = null;
    if (a.dance) dims = danceDims(st, s);
    else if (a.id === 'head') { const t = headTable(s); dims = t.dims; seats = t.seats; extra = { chairs: t.chairs, customChairs: t.custom, sweet: t.sweet, front: t.front }; }
    else if (a.id === 'stage' && s.size === 'custom') dims = [s.cl || 12, s.cw || 8];
    else if (a.sizes) { const o = a.sizes[s.size] || a.sizes[a.def]; dims = [o[0], o[1]]; seats = o[2] || 0; }
    else dims = a.dims;
    if (a.qty) n = s.qty === 'auto' || !s.qty ? autoQty(a.id, st.guests) : +s.qty;
    for (let k = 0; k < n; k++) out.push({ key: a.qty ? a.id + '-' + k : a.id, def: a, dims, seats, idx: k, n, ...extra });
  }
  return out;
}

export const tableSig = (st) => st.seating + '/' + st.seatsPer + '/' + st.spacing + (st.seating === 'mixed' ? '/' + st.mixRound + '/' + st.mixBanquet : '');

export function layout(st, W, L) {
  const T = TENTS[st.tentType], S = SEATING[st.seating], tkey = W + 'x' + L;
  const sh = tentShape(st.tentType, W, L);
  const exits = getExits(st.guests, W, L, sh, st.exits);
  // no perimeter pole standing in a doorway (only happens on the evenly spaced oval poles)
  const poles = getPoles(st.tentType, W, L, sh).filter((p) => p.inner || !sh.oval || !exits.some((e) => Math.hypot(p.x - e.x, p.y - e.y) < 2.5));
  const inner = poles.filter((p) => p.inner);
  const blocks = exits.map((e) => e.zone), items = []; let allFit = true;
  const inB = (r) => rectInside(sh, r, 0.5);
  const free = (r) => !items.some((i) => ov(r, infl(i, 1))) && !blocks.some((b) => ov(r, b)) && !inner.some((p) => p.x > r.x && p.x < r.x + r.w && p.y > r.y && p.y < r.y + r.h);
  const slide = (r, axis) => {
    if (inB(r) && free(r)) return r;
    const lim = Math.max(W, L);
    for (let d = 0.5; d <= lim; d += 0.5) for (const s of [d, -d]) { const q = { ...r }; q[axis] += s; if (inB(q) && free(q)) return q; }
    // curved walls: an item pushed against an oval end may also need to come inward
    if (sh.oval) {
      const other = axis === 'x' ? 'y' : 'x';
      for (let d = 1; d <= 20; d += 1) for (let t = 0; t <= lim; t += 1) for (const s of [t, -t]) for (const u of [d, -d]) {
        const q = { ...r }; q[axis] += s; q[other] += u; if (inB(q) && free(q)) return q;
      }
    }
    return null;
  };
  const place = (wall, f, k, n, w, h) => {
    const hz = wall === 'top' || wall === 'bottom', len = hz ? L : W, al = hz ? w : h, total = n * al + (n - 1);
    const span = len - 2 * G - total;
    if (f === 'dance') { const d = items.find((i) => i.def.id === 'dance'); const c = d ? (hz ? d.x + d.w / 2 : d.y + d.h / 2) : len / 2; f = span > 0 ? (c - total / 2 - G) / span : 0.5; }
    const a = G + clamp(f, 0, 1) * Math.max(0, span) + k * (al + 1);
    return hz ? { x: a, y: wall === 'top' ? G : W - G - h, axis: 'x' } : { x: wall === 'left' ? G : L - G - w, y: a, axis: 'y' };
  };
  const autoFree = [];
  for (const it of accInstances(st)) {
    const a = it.def, o = st.pos[it.key]; let pl = null, rot = 0;
    if (a.free && !(o && o.t === tkey)) { autoFree.push(it); continue; }
    if (o && o.t === tkey) { rot = o.rot; const [w, h] = fp(it.dims, rot); pl = { x: o.x, y: o.y, w, h, fit: w <= L && h <= W && rectInside(sh, { x: o.x, y: o.y, w, h }) }; }
    else if (a.dance) {
      const [w, h] = it.dims, left = items.filter((i) => i.wall === 'left');
      const x0 = left.length ? Math.max(...left.map((i) => i.x + i.w)) + 2 : (L - w) / 2, y0 = (W - h) / 2;
      const r = slide({ x: x0, y: y0, w, h }, 'x'); pl = r ? { ...r, fit: true } : { x: x0, y: y0, w, h, fit: false };
    } else {
      for (const wall of a.walls) {
        rot = WALLROT[wall]; const [w, h] = fp(it.dims, rot); const p = place(wall, a.f, it.idx, it.n, w, h);
        const r = slide({ x: p.x, y: p.y, w, h }, p.axis); if (r) { pl = { ...r, fit: true, wall }; break; }
      }
      if (!pl) { const wall = a.walls[0]; rot = WALLROT[wall]; const [w, h] = fp(it.dims, rot); const p = place(wall, a.f, it.idx, it.n, w, h); pl = { x: p.x, y: p.y, w, h, fit: false, wall }; }
    }
    items.push({ ...pl, key: it.key, def: a, dims: it.dims, seats: it.seats, rot, chairs: it.chairs, customChairs: it.customChairs, sweet: it.sweet, front: it.front });
    if (!pl.fit) allFit = false;
  }
  // seating fill: rows of tables that flow around floor items, poles and exits
  const headSeats = items.filter((i) => i.def.id === 'head').reduce((s, i) => s + i.seats, 0);
  const none = S.kind === 'none', mixed = S.kind === 'mixed', chairs = S.kind === 'chair';
  // the main table type: the round size in a mixed layout, otherwise the seating style itself.
  // Any single table may also be switched to another type (p.type), so sizes are looked up per table.
  const base = mixed ? st.mixRound : st.seating;
  const perOf = (t) => (t === base ? st.seatsPer : SEATING[t].def);
  const per = chairs ? 1 : none ? 0 : st.seatsPer, seated = Math.max(0, st.guests - headSeats);
  // mixed: the chosen number of banquet tables (8 each), rounds for everyone else
  const nB = mixed ? Math.min(Math.max(0, Math.floor(st.mixBanquet) || 0), Math.ceil(seated / 8)) : 0;
  const nR = mixed ? Math.ceil(Math.max(0, seated - nB * 8) / st.seatsPer) : 0;
  const needed = mixed ? nB + nR : per ? Math.ceil(seated / per) : 0;
  const tight = st.spacing === 'tight' ? 0.9 : 1;
  const clr = (i) => i.def.id === 'dance' ? 1.5 : (i.def.id === 'stage' && chairs) ? 6 : 1;
  const obs = [...items.map((i) => infl(i, clr(i))), ...blocks, ...inner.map((p) => ({ x: p.x - 0.4, y: p.y - 0.4, w: 0.8, h: 0.8 }))];
  if (chairs) obs.push({ x: 0, y: W / 2 - 2.5, w: L, h: 5 });
  const edge = chairs ? 3 : 0.5;
  const ubox = (p) => { const U = SEATING[p.type || base]; const [w, h] = fp([2 * U.hx, 2 * U.hy], p.rot || 0); return { x: p.x - w / 2, y: p.y - h / 2, w, h }; };
  const tp = !none && st.tables && st.tables.t === tkey && st.tables.s === tableSig(st) ? st.tables.pts : null;
  // manual: the user added/removed tables or changed chairs, so the table list is exactly what they set
  const manual = !!(tp && st.tables.manual), keepN = manual ? tp.length : needed;
  if (tp) for (const p of tp.slice(0, keepN)) obs.push(ubox(p));
  // best grid of free cells for one table type: tries row offsets, keeps the fullest, most centred fill
  const fill = (type, ob) => {
    const U = SEATING[type], bq = U.kind === 'banquet', px = bq ? U.cx : U.cx * tight, py = U.cy * tight, { hx, hy } = U;
    let best = [], bestScore = -1e9;
    for (let oy = 0; oy < py - 1e-6; oy += 0.5) {
      const cells = [], ys = [];
      for (let y = edge + hy + oy; y <= W - edge - hy + 1e-6; y += py) ys.push(y);
      for (const y of ys) {
        let x = edge + hx, c = 0;
        while (x <= L - edge - hx + 1e-6) {
          const b = { x: x - hx, y: y - hy, w: 2 * hx, h: 2 * hy }; let hit = null;
          if (sh.oval && !rectInside(sh, b, edge)) { x += 0.5; continue; } // outside the curved end
          for (const o of ob) if (ov(b, o) && (!hit || o.x + o.w > hit.x + hit.w)) hit = o;
          if (!hit) { cells.push({ x, y, type }); c++; x += px; if (bq && c % 4 === 0) x += 4; }
          else x = Math.max(x + 0.5, hit.x + hit.w + hx);
        }
      }
      const asym = ys.length ? Math.abs((ys[0] - hy - edge) - (W - edge - ys[ys.length - 1] - hy)) : 0;
      const score = cells.length * 100 - asym;
      if (score > bestScore) { bestScore = score; best = cells; }
    }
    return best;
  };
  const fi = items.find((i) => i.def.id === 'dance') || items.find((i) => i.def.id === 'stage') || items.find((i) => i.def.id === 'head');
  const focus = chairs ? { x: 0, y: W / 2 } : fi ? { x: fi.x + fi.w / 2, y: fi.y + fi.h / 2 } : { x: L / 2, y: W / 2 };
  const dist = (c) => Math.hypot(c.x - focus.x, c.y - focus.y), near = (a, b) => dist(a) - dist(b);
  const best = none ? [] : fill(base, obs);
  const pinned = tp ? tp.slice(0, keepN).map((p) => ({ x: p.x, y: p.y, rot: p.rot || 0, type: p.type || base, pinned: true, set: p.seats })) : [];
  const byFocus = [...best].sort(near);
  let extra = [], capacity = pinned.length + best.length;
  if (!manual && mixed) {
    // banquet tables take the rows farthest from the dance floor; rounds fill in nearest it
    const needB = Math.max(0, nB - pinned.filter((p) => p.type === 'banquet').length);
    const needR = Math.max(0, nR - pinned.filter((p) => p.type !== 'banquet').length);
    const pickB = needB ? fill('banquet', obs).sort((a, b) => near(b, a)).slice(0, needB) : [];
    const cR = pickB.length ? fill(base, [...obs, ...pickB.map((b) => infl(ubox(b), 1.5))]).sort(near) : byFocus;
    extra = [...pickB, ...cR.slice(0, needR)];
    // short on banquet room counts as short overall, even if spare round spots exist
    capacity = pinned.length + pickB.length + (pickB.length < needB ? Math.min(cR.length, needR) : cR.length);
  } else if (!manual) extra = byFocus.slice(0, Math.max(0, needed - pinned.length));
  const units = (tp ? [...pinned, ...extra] : extra.sort((a, b) => a.y - b.y || a.x - b.x)).map((u, i) => ({ ...u, type: u.type || base, n: i + 1 }));
  // guests seated at each table: a chair count the user set wins; otherwise full tables. When the count is
  // automatic and everyone fits, the spare seats come off the last round tables first.
  for (const u of units) u.seats = u.set ?? perOf(u.type);
  if (!manual && units.length === needed && needed) {
    let over = units.reduce((s, u) => s + u.seats, 0) - seated;
    const order = [...units].reverse().sort((a, b) => (a.type === 'banquet') - (b.type === 'banquet'));
    for (const u of order) { if (over <= 0) break; if (u.set != null) continue; const d = Math.min(over, u.seats - 1); u.seats -= d; over -= d; }
  }
  const seats = units.reduce((s, u) => s + u.seats, 0);
  if (manual) capacity = units.length;
  // open spots for a table the user adds by hand, per table type: free cells not taken by a table, nearest the focus first
  const freeOf = (cells) => cells.filter((c) => !units.some((u) => ov(ubox(c), infl(ubox(u), -0.05))));
  const freeSpots = { [base]: freeOf(byFocus) };
  if (mixed) freeSpots.banquet = freeOf(fill('banquet', obs).sort(near));
  for (const u of units) {
    if (!u.pinned) continue; const b = ubox(u);
    u.bad = !rectInside(sh, b) || items.some((i) => ov(b, i)) || inner.some((p) => p.x > b.x && p.x < b.x + b.w && p.y > b.y && p.y < b.y + b.h) || units.some((v) => v !== u && ov(infl(b, -0.05), ubox(v)));
  }
  // cocktail tables go in the open floor left after seating, clustered near the bar
  if (autoFree.length) {
    const taken = [...units.map(ubox), ...blocks, ...inner.map((p) => ({ x: p.x - 0.4, y: p.y - 0.4, w: 0.8, h: 0.8 }))];
    const hf = items.find((i) => i.def.id === 'bar') || items.find((i) => i.def.id === 'dance'), hfoc = hf ? { x: hf.x + hf.w / 2, y: hf.y + hf.h / 2 } : { x: L / 2, y: W };
    const cand = []; for (let y = 0.5; y <= W - 5.5 + 1e-6; y += 1) for (let x = 0.5; x <= L - 5.5 + 1e-6; x += 1) cand.push({ x, y });
    cand.sort((a, b) => Math.hypot(a.x + 2.5 - hfoc.x, a.y + 2.5 - hfoc.y) - Math.hypot(b.x + 2.5 - hfoc.x, b.y + 2.5 - hfoc.y));
    for (const it of autoFree) {
      const [w, h] = it.dims, c = cand.find((c) => { const r = { x: c.x, y: c.y, w, h }; return rectInside(sh, r, 0.5) && !items.some((i) => ov(r, infl(i, 0.5))) && !taken.some((t) => ov(r, t)); });
      const pl = c ? { x: c.x, y: c.y, w, h, fit: true } : { x: G, y: G, w, h, fit: false };
      items.push({ ...pl, key: it.key, def: it.def, dims: it.dims, seats: 0, rot: 0 }); if (!pl.fit) allFit = false;
    }
  }
  return { W, L, T, S, sh, area: shapeArea(sh), perim: perimeter(sh), poles, exits, chands: chandeliersFor(st, W, L), items, units, needed, per, base, nB, seated, headSeats, capacity, seats, manual, freeSpots,
    allFit, ok: allFit && (none ? shapeArea(sh) >= st.guests * STANDING_SQFT : manual || capacity >= needed) };
}

export function halfExt(st, L, W) { const a = (st.tentAngle || 0) * Math.PI / 180, c = Math.abs(Math.cos(a)), s = Math.abs(Math.sin(a)); return { ex: (L * c + W * s) / 2, ey: (L * s + W * c) / 2 }; }
export const siteFits = (st, W, L, k) => { const { ex, ey } = halfExt(st, L + 2 * k, W + 2 * k); return 2 * ex <= st.siteL + 1e-6 && 2 * ey <= st.siteW + 1e-6; };

export function solve(st) {
  const T = TENTS[st.tentType];
  if (st.tentSize !== 'auto') { const [W, L] = st.tentSize.split('x').map(Number); return { ...layout(st, W, L), auto: false }; }
  const sizes = [...T.sizes].sort((a, b) => a[0] * a[1] - b[0] * b[1] || a[0] - b[0]); let fallback = null;
  for (const [W, L] of sizes) { const l = layout(st, W, L); if (l.ok) { if (siteFits(st, W, L, T.stake)) return { ...l, auto: true }; if (!fallback) fallback = l; } }
  const last = sizes[sizes.length - 1];
  return { ...(fallback || layout(st, last[0], last[1])), auto: true };
}

export function climateCount(st, area) {
  if (st.climate === 'fans') return Math.ceil(area / 600);
  if (st.climate === 'heat-mild') return Math.max(1, Math.ceil(area * 80 / 150000));
  if (st.climate === 'heat-cold') return Math.max(1, Math.ceil(area * 160 / 150000));
  return 0;
}

/** `ph` = a calibrated-or-not site photo is loaded. */
export function siteExtent(st, ph) { return ph ? { l: st.photo.pw * st.photo.fpp, w: st.photo.ph * st.photo.fpp } : { l: st.siteL, w: st.siteW }; }
export function tentOrigin(st, lay, ph) {
  const { W, L } = lay, e = siteExtent(st, ph), { ex, ey } = halfExt(st, L, W);
  let cx = e.l / 2, cy = e.w / 2;
  if (st.tentPos) {
    cx = st.tentPos.x + L / 2; cy = st.tentPos.y + W / 2;
    if (ph) { cx = clamp(cx, 0, e.l); cy = clamp(cy, 0, e.w); }
    else { cx = e.l < 2 * ex ? e.l / 2 : clamp(cx, ex, e.l - ex); cy = e.w < 2 * ey ? e.w / 2 : clamp(cy, ey, e.w - ey); }
  }
  return { x: cx - L / 2, y: cy - W / 2 };
}
