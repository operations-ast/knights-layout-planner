// Outdoor site items: things placed on the site plan around the tents (food trucks, restrooms, parking…).
// Stored on the plan as model.siteItems: [{ type, x, y, w, l, rot, name?, shape? }], where x, y is the centre in site
// feet, l the length (along x before turning), w the width, rot degrees clockwise. Outdoor stages also have a
// shape (STAGE_SHAPES); their front, facing the audience, is the +y side (the bottom on an unturned plan).
import { isFestival } from '../edition.js';
import { siteExtent } from './planner.js';
import { tentFootprint, polysOverlap } from './model.js';

// h: height in feet for the 3D map (0 = flat on the ground); color: fill on the plan and the map
const FESTIVAL_SITE_ITEMS = {
  foodtruck: { label: 'Food truck', short: 'FOOD TRUCK', l: 26, w: 8.5, h: 11, color: '#e8893a' },
  vehicle: { label: 'Show vehicle', short: 'SHOW VEHICLE', l: 18, w: 7, h: 6, color: '#4f8fd6' },
  vendor: { label: 'Vendor station (10×10 canopy)', short: 'VENDOR', l: 10, w: 10, h: 9, color: '#f2f2ee' },
  stage: { label: 'Stage area', short: 'STAGE', l: 32, w: 24, h: 4, color: '#59606b', roof: 22 },
  restroom: { label: 'Restroom station', short: 'RESTROOMS', l: 24, w: 4, h: 7.5, color: '#2f9e6a', unit: 4 },
  handwash: { label: 'Hand-wash station', short: 'WASH', l: 4, w: 4, h: 4.5, color: '#6fc1d8' },
  parking: { label: 'Parking area', short: 'PARKING', l: 120, w: 60, h: 0, color: '#2f6fd6', parking: true },
  seating: { label: 'Picnic seating area', short: 'SEATING', l: 40, w: 30, h: 0, color: '#b58a52', flat: true },
  gate: { label: 'Entry gate / tickets', short: 'ENTRY', l: 20, w: 8, h: 8, color: '#d64545' },
  firstaid: { label: 'First aid', short: 'FIRST AID', l: 10, w: 10, h: 9, color: '#ffffff', cross: true },
  generator: { label: 'Generator', short: 'GEN', l: 14, w: 7, h: 7, color: '#c9b03a' },
  trash: { label: 'Trash & recycling', short: 'TRASH', l: 8, w: 6, h: 4, color: '#3e4752' },
};
export const SITE_ITEMS = isFestival ? FESTIVAL_SITE_ITEMS : {};

export const siteDef = (it) => SITE_ITEMS[it.type] || { label: it.type, short: '', l: it.l, w: it.w, h: 0, color: '#999' };
/** Display name of items[i]: its own name, or the kind numbered among items of the same kind ("Food truck 2"). */
export function siteName(items, i) {
  const it = items[i]; if (it.name) return it.name;
  const same = items.filter((o) => o.type === it.type), base = siteDef(it).label.split(' (')[0];
  return same.length > 1 ? `${base} ${same.indexOf(it) + 1}` : base;
}

// outdoor stage outlines, all fitted to the item's length × width box
export const STAGE_SHAPES = {
  rect: 'Rectangle',
  thrust: 'Thrust (runway)',
  arc: 'Rounded front',
  round: 'Round',
  octagon: 'Octagon',
  L: 'L-shape (side wing)',
};
const ARC_N = 24;
const ellipse = (cx, cy, rx, ry, t0, t1, n = ARC_N) => Array.from({ length: n + 1 }, (_, k) => { const t = t0 + (t1 - t0) * k / n; return [cx + rx * Math.cos(t), cy + ry * Math.sin(t)]; });

/** Outline of an item in its own frame (0..l along x, 0..w along y), as [x, y] points. */
export function localPoly(it) {
  const { l, w } = it, sh = it.type === 'stage' ? it.shape : 'rect';
  if (sh === 'thrust') {
    // main deck across the back 60%, a runway out the middle of the front
    const d = w * 0.6, rw = Math.min(l, Math.max(6, l * 0.22)), x0 = (l - rw) / 2;
    return [[0, 0], [l, 0], [l, d], [x0 + rw, d], [x0 + rw, w], [x0, w], [x0, d], [0, d]];
  }
  if (sh === 'arc') { const d = w * 0.45; return [[0, 0], [l, 0], ...ellipse(l / 2, d, l / 2, w - d, 0, Math.PI)]; }
  if (sh === 'round') return ellipse(l / 2, w / 2, l / 2, w / 2, 0, 2 * Math.PI, 40).slice(0, -1);
  if (sh === 'octagon') { const c = Math.min(l, w) * 0.29; return [[c, 0], [l - c, 0], [l, c], [l, w - c], [l - c, w], [c, w], [0, w - c], [0, c]]; }
  if (sh === 'L') { const xw = l * 0.45, d = w * 0.5; return [[0, 0], [l, 0], [l, w], [xw, w], [xw, d], [0, d]]; }
  return [[0, 0], [l, 0], [l, w], [0, w]];
}
/** The covered part of an outdoor stage, for its roof on the 3D map (the main deck of a thrust stage). */
export function roofLocal(it) {
  return it.shape === 'thrust' ? [[0, 0], [it.l, 0], [it.l, it.w * 0.6], [0, it.w * 0.6]] : localPoly(it);
}
/** Local outline points turned and placed on the site. */
export function itemPoly(it, pts = localPoly(it)) {
  const a = (it.rot || 0) * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
  return pts.map(([px, py]) => { const x = px - it.l / 2, y = py - it.w / 2; return [it.x + x * c - y * s, it.y + x * s + y * c]; });
}
export const polyArea = (p) => Math.abs(p.reduce((s, [x, y], i) => { const [x2, y2] = p[(i + 1) % p.length]; return s + x * y2 - x2 * y; }, 0)) / 2;
/** Deck area of an outdoor stage in sq ft, and 4' × 8' decks to build it (curves and angles round up). */
export function stageDecks(it) {
  const area = polyArea(localPoly(it)), shaped = (it.shape || 'rect') !== 'rect';
  return { area: Math.round(area), decks: Math.ceil(area / 32 * (shaped ? 1.1 : 1)) };
}

/** Corners of a placed item's bounding box in site feet, clockwise from its top-left. */
export function itemCorners(it) {
  const a = (it.rot || 0) * Math.PI / 180, c = Math.cos(a), s = Math.sin(a), hl = it.l / 2, hw = it.w / 2;
  return [[-hl, -hw], [hl, -hw], [hl, hw], [-hl, hw]].map(([x, y]) => [it.x + x * c - y * s, it.y + x * s + y * c]);
}

/** Index of the topmost item under site point p (feet), or -1. slack: extra feet round each item. */
export function itemAt(items, p, slack = 0) {
  for (let i = (items || []).length - 1; i >= 0; i--) {
    const it = items[i], a = -(it.rot || 0) * Math.PI / 180, dx = p.x - it.x, dy = p.y - it.y;
    const lx = dx * Math.cos(a) - dy * Math.sin(a), ly = dx * Math.sin(a) + dy * Math.cos(a);
    if (Math.abs(lx) <= it.l / 2 + slack && Math.abs(ly) <= it.w / 2 + slack) return i;
  }
  return -1;
}

/**
 * A new item of this type, placed on open ground: near the bottom-left of the site, clear of the tents
 * (with their stake lines) and of the items already there, searching rightwards then upwards.
 */
export function newItem(type, views, lays, ph) {
  const d = SITE_ITEMS[type], st = views[0], e = siteExtent(st, ph), items = st.siteItems || [];
  const tents = views.map((v, i) => tentFootprint(v, lays[i], ph));
  const base = { type, l: d.l, w: d.w, rot: 0 };
  const clear = (it) => {
    const p = itemCorners({ ...it, l: it.l + 6, w: it.w + 6 });
    return !tents.some((t) => polysOverlap(p, t)) && !items.some((o) => polysOverlap(p, itemCorners(o)));
  };
  const step = Math.max(2, Math.min(e.l, e.w) / 60), m = ph ? 0 : 5;
  for (let y = e.w - m - d.w / 2; y >= m + d.w / 2; y -= step) {
    for (let x = m + d.l / 2; x <= e.l - m - d.l / 2; x += step) {
      const it = { ...base, x: Math.round(x), y: Math.round(y) };
      if (clear(it)) return it;
    }
  }
  return { ...base, x: Math.round(e.l / 2), y: Math.round(e.w / 2) };
}

const units = (it) => Math.max(1, Math.round(it.l / (SITE_ITEMS[it.type]?.unit || 4)));
/** Parking: about 330 sq ft per car including aisles. */
export const parkingCars = (it) => Math.max(0, Math.floor(it.l * it.w / 330));

/** One line describing an item's size (and count, for restrooms or parking). */
export function itemSize(it) {
  const d = siteDef(it), sz = `${Math.round(it.l)}' × ${Math.round(it.w)}'`;
  if (d.unit) return `${sz} · ${units(it)} units`;
  if (d.parking) return `${sz} · about ${parkingCars(it)} cars`;
  if (it.type === 'stage') { const sh = it.shape || 'rect'; return `${sz}${sh !== 'rect' ? ` · ${STAGE_SHAPES[sh].split(' (')[0].replace(/^[A-Z](?=[a-z])/, (c) => c.toLowerCase())}` : ''} · ${stageDecks(it).area} sq ft`; }
  return sz;
}

/** Rental list rows for the outdoor items: [{ grp }, { item, qty, note }...]. */
export function siteRentals(items) {
  if (!items || !items.length) return [];
  const by = {}; for (const it of items) (by[it.type] = by[it.type] || []).push(it);
  const rows = [{ grp: 'Outdoor site items' }];
  const add = (item, qty, note = '') => rows.push({ item, qty, note });
  for (const [type, list] of Object.entries(by)) {
    const d = SITE_ITEMS[type]; if (!d) continue;
    if (type === 'restroom') add('Portable restroom units', list.reduce((s, it) => s + units(it), 0), `${list.length} station${list.length > 1 ? 's' : ''}; plan 1 unit per 50–100 attendees, plus ADA units`);
    else if (type === 'parking') add('Parking areas', list.length, `About ${list.reduce((s, it) => s + parkingCars(it), 0)} cars in all · cones, signs and attendants`);
    else if (type === 'foodtruck') add('Food truck spaces', list.length, 'Spaces only; trucks come with the vendors · power and grey-water plan');
    else if (type === 'vehicle') add('Show vehicle spaces', list.length, 'Display spots; drip pans under each vehicle');
    else if (type === 'vendor') add("10' × 10' canopy, vendor station", list.length, 'With weights, one 6\' table and 2 chairs each');
    else if (type === 'stage') for (const it of list) {
      const sh = it.shape || 'rect', { area, decks } = stageDecks(it);
      add(`Outdoor stage, ${sh === 'rect' ? '' : STAGE_SHAPES[sh].replace(/^[A-Z](?=[a-z])/, (c) => c.toLowerCase()) + ', '}${Math.round(it.l)}' × ${Math.round(it.w)}'`, 1,
        `${area} sq ft · about ${decks} 4' × 8' decks${sh === 'rect' ? '' : ' (shaped stage: allow for decks cut to fit)'} · skirting, steps${SITE_ITEMS.stage.roof ? ', roof' : ''}`);
    }
    else if (type === 'handwash') add('Hand-wash stations', list.length, 'Near restrooms and food');
    else if (type === 'seating') add('Picnic tables', list.reduce((s, it) => s + Math.max(1, Math.floor(it.l * it.w / 120)), 0), 'About 1 per 120 sq ft of seating area · seats 8 each');
    else if (type === 'gate') add('Entry gate / ticket booth', list.length, 'With barricades and signage');
    else if (type === 'firstaid') add('First aid station', list.length, "10' × 10' canopy with cot, table and chairs");
    else if (type === 'generator') add('Generator, towable', list.length, 'Size to the load; keep 20\'+ from tents');
    else if (type === 'trash') add('Trash & recycling stations', list.length, 'Barrels with liners, emptied through the day');
    else add(d.label, list.length);
  }
  return rows;
}

/** Checks for the outdoor items: anything sitting on a tent or off the site, and a short summary. */
export function siteItemNotes(views, lays, ph) {
  const st = views[0], items = st.siteItems || [], out = [];
  if (!items.length) return out;
  const e = siteExtent(st, ph), tents = views.map((v, i) => tentFootprint(v, lays[i], ph));
  items.forEach((it, i) => {
    const p = itemCorners(it), name = siteName(items, i);
    const hit = tents.findIndex((t) => polysOverlap(p, t));
    if (hit >= 0) out.push(['bad', `${name} sits on ${views[hit].name}'s stake and guy line area. Drag it clear on the site plan.`]);
    if (p.some(([x, y]) => x < -0.5 || y < -0.5 || x > e.l + 0.5 || y > e.w + 0.5)) out.push(['warn', `${name} runs past the edge of the site.`]);
    if (it.type === 'generator' && tents.some((t) => polysOverlap(itemCorners({ ...it, l: it.l + 40, w: it.w + 40 }), t))) out.push(['warn', `${name} is within 20' of a tent. Keep generators 20' or more away.`]);
  });
  const total = views.reduce((s, v) => s + v.guests, 0), rr = items.filter((it) => it.type === 'restroom').reduce((s, it) => s + units(it), 0);
  if (rr && total && rr * 100 < total) out.push(['warn', `${rr} restroom units for ${total} attendees under the tents. Plan on about 1 unit per 50–100 attendees, more with alcohol or long hours.`]);
  const counts = {}; for (const it of items) counts[it.type] = (counts[it.type] || 0) + 1;
  const nm = (t, n) => { const b = (SITE_ITEMS[t]?.label || t).split(' (')[0].split(' / ')[0].toLowerCase(); return n === 1 ? b : /recycling|aid$/.test(b) ? b + ' stations' : b + 's'; };
  out.push(['info', `Outdoors: ${Object.entries(counts).map(([t, n]) => `${n} ${nm(t, n)}`).join(', ')}.`]);
  return out;
}
