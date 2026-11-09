// Multi-tent plan model.
//
// A plan is the shared site settings plus a list of tents:
//   { siteName, sitePreset, siteL, siteW, surface, address, photo, tents: [tent, ...], active }
// Each tent holds everything else (name, style, size, guests, seating, floor items, exits, lights, site position…).
//
// Most of the app works on a "view": the site fields merged with one tent's fields, which has the same flat
// shape the single-tent planner always used. Edits made to a view are written back with writeBack().
import { DEFAULT } from './constants.js';
import { clone, clamp, mergeState, solve, tentOrigin, halfExt, siteExtent } from './planner.js';

export const SITE_KEYS = ['siteName', 'sitePreset', 'siteL', 'siteW', 'surface', 'address', 'photo'];

const pickSite = (o) => Object.fromEntries(SITE_KEYS.map((k) => [k, o[k]]));
const pickTent = (o) => Object.fromEntries(Object.keys(o).filter((k) => !SITE_KEYS.includes(k) && k !== 'tents' && k !== 'active').map((k) => [k, o[k]]));

/** Merged site + tent settings for tent i (defaults to the active tent). */
export function viewOf(m, i = m.active) { return { ...pickSite(m), ...m.tents[i] }; }

/** Write an edited view back into the model: site keys to the site, the rest to tent i. */
export function writeBack(m, i, v) {
  for (const k of Object.keys(v)) { if (SITE_KEYS.includes(k)) m[k] = v[k]; else m.tents[i][k] = v[k]; }
}

/** Turn anything saved (old single-tent state or a multi-tent plan) into a valid model. */
export function migrate(saved) {
  if (!saved) return fromFlat(clone(DEFAULT));
  if (Array.isArray(saved.tents) && saved.tents.length) {
    const site = pickSite(mergeState(pickSite(saved)));
    const tents = saved.tents.map((t, i) => ({ ...pickTent(mergeState({ ...site, ...t })), name: t.name || `Tent ${i + 1}` }));
    return { ...site, tents, active: clamp(saved.active | 0, 0, tents.length - 1) };
  }
  return fromFlat(mergeState(saved));
}
function fromFlat(flat) { return { ...pickSite(flat), tents: [{ ...pickTent(flat), name: flat.name || 'Tent 1' }], active: 0 }; }

/** A fresh, mostly empty tent for "Add tent": default style, 50 guests, no floor items. */
export function blankTent(n) {
  const t = pickTent(clone(DEFAULT));
  for (const k of Object.keys(t.acc)) t.acc[k].on = false;
  return { ...t, name: `Tent ${n}`, guests: 50, stringLights: false, generator: false };
}

/* ---------- placing tents on the site ---------- */
/** Axis-aligned box around a tent's stake/guy line area on the site: centre and half extents. */
export function tentBox(v, l, ph) {
  const o = tentOrigin(v, l, ph), k = l.T.stake, { ex, ey } = halfExt(v, l.L + 2 * k, l.W + 2 * k);
  return { cx: o.x + l.L / 2, cy: o.y + l.W / 2, ex, ey };
}

const overlapArea = (x, y, ex, ey, b) =>
  Math.max(0, Math.min(x + ex, b.cx + b.ex) - Math.max(x - ex, b.cx - b.ex)) * Math.max(0, Math.min(y + ey, b.cy + b.ey) - Math.max(y - ey, b.cy - b.ey));

/**
 * Grid-search the site for a centre for a box of half extents ex, ey, nearest to `prefer`, keeping `gap` from
 * other tents and `edge` from the site boundary. With `loose`, nothing is free: return the spot that overlaps least.
 */
function findSpot(site, ex, ey, others, prefer, gap, edge, loose = false) {
  let best = null, bestD = Infinity;
  const lo = (half, len) => Math.min(half + edge, len / 2), hi = (half, len) => Math.max(len - half - edge, len / 2);
  const x0 = lo(ex, site.l), x1 = hi(ex, site.l), y0 = lo(ey, site.w), y1 = hi(ey, site.w);
  const step = Math.max(1, Math.min(site.l, site.w) / 80);
  for (let y = y0; y <= y1 + 1e-6; y += step) for (let x = x0; x <= x1 + 1e-6; x += step) {
    let d;
    if (loose) d = others.reduce((s, b) => s + overlapArea(x, y, ex, ey, b), 0) * 1000 + Math.hypot(x - prefer.x, y - prefer.y);
    else {
      if (others.some((b) => Math.abs(x - b.cx) < ex + b.ex + gap && Math.abs(y - b.cy) < ey + b.ey + gap)) continue;
      d = Math.hypot(x - prefer.x, y - prefer.y);
    }
    if (d < bestD) { bestD = d; best = { x, y }; }
  }
  return best;
}

/**
 * Give tent j a site position clear of the other tents. Tries the fire-code spacing first (20' between tents,
 * 20' from the site edge), then relaxes it step by step; on a site too small for all of them it picks the spot
 * that overlaps least, and the site checks flag it.
 */
export function placeTent(m, j, ph, prefer) {
  const v = viewOf(m, j), l = solve(v), site = siteExtent(v, ph);
  const others = m.tents.map((_, i) => i).filter((i) => i !== j).map((i) => { const vi = viewOf(m, i); return tentBox(vi, solve(vi), ph); });
  const k = l.T.stake, { ex, ey } = halfExt(v, l.L + 2 * k, l.W + 2 * k), p = prefer || { x: site.l / 2, y: site.w / 2 };
  const edge = ph ? 0 : 20; // photo sites have no lot lines drawn; the clearance ring covers it
  const c = findSpot(site, ex, ey, others, p, 20, edge) || findSpot(site, ex, ey, others, p, 12, edge)
    || findSpot(site, ex, ey, others, p, 12, 0) || findSpot(site, ex, ey, others, p, 0, 0)
    || findSpot(site, ex, ey, others, p, 0, 0, true);
  m.tents[j].tentPos = c ? { x: c.x - l.L / 2, y: c.y - l.W / 2 } : null;
}

/**
 * Lay out every tent on the site from scratch. A single tent goes in the middle; several are packed biggest
 * first from the top-left corner, so the rest of the site stays open for the others.
 */
export function arrangeTents(m, ph) {
  for (const t of m.tents) t.tentPos = null;
  if (m.tents.length < 2) return;
  const order = m.tents.map((t, i) => ({ i, a: solve(viewOf(m, i)).area })).sort((a, b) => b.a - a.a).map((o) => o.i);
  const placed = new Set(), corner = { x: 0, y: 0 };
  for (const j of order) {
    // place against only the tents already placed this pass
    const keep = m.tents;
    m.tents = keep.filter((t, i) => i === j || placed.has(i));
    placeTent(m, m.tents.indexOf(keep[j]), ph, corner);
    m.tents = keep; placed.add(j);
  }
  // slide the whole group to the middle of the site; spacing between tents is unchanged
  const boxes = m.tents.map((_, i) => { const v = viewOf(m, i); return tentBox(v, solve(v), ph); });
  const x0 = Math.min(...boxes.map((b) => b.cx - b.ex)), x1 = Math.max(...boxes.map((b) => b.cx + b.ex));
  const y0 = Math.min(...boxes.map((b) => b.cy - b.ey)), y1 = Math.max(...boxes.map((b) => b.cy + b.ey));
  const site = siteExtent(viewOf(m, 0), ph), dx = site.l / 2 - (x0 + x1) / 2, dy = site.w / 2 - (y0 + y1) / 2;
  if (x1 - x0 <= site.l && y1 - y0 <= site.w) for (const t of m.tents) if (t.tentPos) t.tentPos = { x: t.tentPos.x + dx, y: t.tentPos.y + dy };
}

/* ---------- tent-to-tent checks ---------- */
// Stake/guy-line footprint of a tent on the site as a rotated rectangle (4 corners).
function footprint(v, l, ph) {
  const o = tentOrigin(v, l, ph), k = l.T.stake, cx = o.x + l.L / 2, cy = o.y + l.W / 2;
  const a = (v.tentAngle || 0) * Math.PI / 180, c = Math.cos(a), s = Math.sin(a), hl = l.L / 2 + k, hw = l.W / 2 + k;
  return [[-hl, -hw], [hl, -hw], [hl, hw], [-hl, hw]].map(([x, y]) => [cx + x * c - y * s, cy + x * s + y * c]);
}
function overlaps(A, B) { // separating axis test for convex polygons
  for (const P of [A, B]) for (let i = 0; i < P.length; i++) {
    const [x1, y1] = P[i], [x2, y2] = P[(i + 1) % P.length], nx = y2 - y1, ny = x1 - x2;
    const pa = A.map(([x, y]) => x * nx + y * ny), pb = B.map(([x, y]) => x * nx + y * ny);
    if (Math.max(...pa) < Math.min(...pb) || Math.max(...pb) < Math.min(...pa)) return false;
  }
  return true;
}
function segDist([px, py], [x1, y1], [x2, y2]) {
  const dx = x2 - x1, dy = y2 - y1, t = clamp(((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy || 1), 0, 1);
  return Math.hypot(px - x1 - t * dx, py - y1 - t * dy);
}
function gapBetween(A, B) {
  let d = Infinity;
  for (const [P, Q] of [[A, B], [B, A]]) for (const p of P) for (let i = 0; i < Q.length; i++) d = Math.min(d, segDist(p, Q[i], Q[(i + 1) % Q.length]));
  return d;
}

/** Notes about tents relative to each other on the site. */
export function siteNotes(views, lays, ph) {
  const out = [];
  if (views.length < 2) return out;
  const fps = views.map((v, i) => footprint(v, lays[i], ph));
  for (let i = 0; i < views.length; i++) for (let j = i + 1; j < views.length; j++) {
    const a = views[i].name, b = views[j].name;
    if (overlaps(fps[i], fps[j])) out.push(['bad', `${a} and ${b} overlap on the site (including stake and guy line areas). Drag one apart on the site plan.`]);
    else {
      const g = gapBetween(fps[i], fps[j]);
      if (g < 20) out.push(['warn', `${a} and ${b} are ${Math.floor(g)}' apart between stake lines. The fire code generally asks for 20' between tents, with exceptions for smaller combined areas; confirm with the local fire marshal.`]);
    }
  }
  const total = lays.reduce((s, l) => s + l.area, 0), guests = views.reduce((s, v) => s + v.guests, 0);
  out.push(['info', `${views.length} tents on site: ${Math.round(total).toLocaleString()} sq ft under cover for ${guests} guests in total.`]);
  return out;
}
