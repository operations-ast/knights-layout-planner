// Rental list and code/fit checks derived from the solved layout.
import { LIGHT_INSET, STANDING_SQFT, SEATING } from './constants.js';
import { perimeter } from './shape.js';
import { danceFinish, danceNeed, szDims, climateCount, siteFits, tentOrigin, halfExt, exitCount } from './planner.js';

export function rentals(st, l) {
  const { W, L, S } = l, area = Math.round(l.area), perim = Math.round(l.perim), legs = l.poles.filter((p) => !p.inner).length, inner = l.poles.filter((p) => p.inner).length;
  const rows = [], grp = (g) => rows.push({ grp: g }), add = (item, qty, note = '') => rows.push({ item, qty, note });
  const cnt = (id) => l.items.filter((i) => i.def.id === id);
  grp('Tent');
  add(`${W}' × ${L}' ${l.T.label}${l.sh.oval ? ' (oval)' : ''}`, 1, `${area.toLocaleString()} sq ft${l.sh.oval ? ' floor inside the oval' : ''} · ${legs} perimeter ${l.sh.oval ? 'poles' : 'legs'}${inner ? ` · ${inner} center poles` : ''}`);
  if (st.walls !== 'none') add(`Sidewalls, ${({ solid: 'solid white', window: 'cathedral window', clear: 'clear' })[st.walls]}`, Math.ceil(perim / 20), `20' sections · ${perim} lin ft perimeter`);
  if (st.surface === 'grass' || st.surface === 'gravel') add('Stakes and ratchet straps', legs * 2, '2 per leg; locate utilities (call 811) before staking');
  else add('Ballast (water barrels or concrete blocks)', legs, "1 per leg minimum; size weight to the tent's wind load rating");
  if (l.exits.length) {
    const ent = l.exits.filter((e) => e.main).length;
    add('Lighted exit signs', l.exits.length, `${l.exits.length} openings × 72"${ent ? ` (${ent} entrance${ent > 1 ? 's' : ''})` : ''} for ${st.guests} occupants`);
  }
  if (S.kind === 'chair') { grp('Seating'); add(`${st.chairStyle} chairs`, l.units.length, "Ceremony rows with 5' center aisle"); }
  else if (l.units.length + l.headSeats > 0) { // with "no seating", this is just the head table's chairs
    grp('Seating');
    // chairs follow what is on the plan, so tables with chairs added or removed by hand are counted exactly
    // one line per table type, so a mixed layout lists its rounds and banquet tables separately
    const byType = [...new Set(l.units.map((u) => u.type))].map((t) => [SEATING[t], l.units.filter((u) => u.type === t)]);
    for (const [T, us] of byType) {
      const n = us.reduce((s, u) => s + u.seats, 0), vary = us.some((u) => u.seats !== us[0].seats);
      add(T.table, us.length, vary ? `${n} seats in all; chair counts vary by table` : `${us[0].seats} guests each`);
    }
    const chairs = l.seats + l.headSeats;
    if (chairs) add(`${st.chairStyle} chairs`, chairs, l.headSeats ? `Includes ${l.headSeats} at the head table` : '');
    for (const [T, us] of byType) add(`Tablecloths, ${T.linen}`, us.length);
    if (S.kind !== 'none') add('Napkins', st.guests);
  }
  const floor = [];
  for (const i of cnt('dance')) {
    const F = danceFinish(st), s = st.acc.dance, std = F.sizes.some((z) => szDims(z).join() === i.dims.join());
    const rounded = s.size === 'custom' && ((s.cl || 20) % 4 || (s.cw || 20) % 4);
    floor.push([`${F.label} dance floor, ${i.dims[0]}' × ${i.dims[1]}'`, 1, `${F.desc} · ${(i.dims[0] / 4) * (i.dims[1] / 4)} sections (4' × 4')${rounded ? ' · rounded up to whole sections' : ''}${std ? '' : `; custom size, confirm with Knights (stock sizes: ${F.sizes.map((z) => z.replace('x', '×')).join(', ')})`}`]);
    if (s.wrap) floor.push(['Dance floor vinyl wrap', 1, 'Custom graphic, full or partial coverage']);
  }
  for (const i of cnt('stage')) floor.push([`Stage ${i.dims[0]}' × ${i.dims[1]}'`, Math.ceil(i.dims[0] * i.dims[1] / 32), `4' × 8' decks${i.dims[0] % 4 || i.dims[1] % 4 ? ' (size rounds up to full decks)' : ''} · ${i.dims[0] + 2 * i.dims[1]} lin ft skirting · steps`]);
  for (const i of cnt('head')) floor.push([i.seats === 2 ? 'Sweetheart table' : `Head table, ${i.seats} seats`, i.seats === 2 ? 1 : Math.ceil(i.dims[0] / 8), i.seats === 2 ? 'With linen' : "8' banquet tables, linens and skirting"]);
  if (cnt('buffet').length) floor.push(["8' banquet tables for buffet", cnt('buffet').length * 2, `${cnt('buffet').length} double-sided line${cnt('buffet').length > 1 ? 's' : ''}, linens`]);
  if (cnt('bar').length) floor.push(['Bar with back bar', cnt('bar').length, 'About 1 bar per 150 guests']);
  if (cnt('dj').length) floor.push(['DJ table', 1, "6' table, black linen, power drop"]);
  if (cnt('cake').length) floor.push(['Cake table, 48" round', 1, 'With linen']);
  if (cnt('gift').length) floor.push(["Gift & card table, 6'", 1, 'Near the entrance']);
  if (cnt('photo').length) floor.push(['Photo booth area', 1, "10' × 10' with backdrop"]);
  if (cnt('lounge').length) floor.push(['Lounge furniture set', 1, 'Sofa, 2 chairs, coffee table']);
  if (cnt('highboy').length) floor.push(['Cocktail tables, 30" highboy', cnt('highboy').length, '42" tall · 120" round cinched linens']);
  if (floor.length) { grp('Floor items'); floor.forEach((r) => add(...r)); }
  const lt = [];
  if (st.stringLights) {
    const ls = st.lightStyle || 'swag', both = ls === 'both';
    if (ls !== 'perimeter') {
      const n = Math.max(1, Math.round(L / 10)), seg = Math.hypot(W, L / n);
      lt.push([`Bistro string lights${both ? ', swag' : ''}`, Math.ceil(n * seg / 10) * 10 + ' ft', `${n} zigzag runs across the ceiling`]);
    }
    if (ls !== 'swag') {
      const run = perimeter(l.sh, -LIGHT_INSET);
      lt.push([`Bistro string lights${both ? ', perimeter' : ''}`, Math.ceil(run * 1.1 / 10) * 10 + ' ft', `Around the inside of the ${l.sh.oval ? 'oval ' : ''}perimeter, ${LIGHT_INSET}' in from the walls · includes 10% for drape between poles`]);
    }
  }
  if (l.chands.length) lt.push(['Chandeliers', l.chands.length, st.chandList ? 'Placed as shown on the plan' : "Centerline, one per 20' bay"]);
  if (st.uplights) lt.push(['LED uplights', Math.ceil(perim / 15), "Around the perimeter, about every 15'"]);
  const cc = climateCount(st, area);
  if (st.climate === 'fans') lt.push(['Industrial fans', cc, 'About 1 per 600 sq ft']);
  if (st.climate.startsWith('heat')) lt.push(['Forced-air heaters, 150,000 BTU', cc, `Estimate for ${st.climate === 'heat-cold' ? 'cold' : 'cool'} weather; set outside with ducts`]);
  if (st.generator) lt.push(['Generator', 1, "Size to the load (lights, DJ, heaters); place 20'+ from the tent"]);
  if (lt.length) { grp('Lighting, climate & power'); lt.forEach((r) => add(...r)); }
  return rows;
}

/** Rental rows for every tent; with more than one tent, each group heading is prefixed with the tent's name. */
export function allRentals(tents) {
  const multi = tents.length > 1;
  return tents.flatMap(({ st, lay }) => rentals(st, lay).map((r) => (r.grp && multi ? { ...r, grp: `${st.name} · ${r.grp}`, tent: true } : r)));
}

/** Plain-text rental list for the clipboard. tents: [{ st, lay }]. */
export function rentalText(tents) {
  const s = tents[0].st, total = tents.reduce((n, t) => n + t.st.guests, 0);
  const lines = [`${s.siteName || 'Tent layout'}${s.address ? ` · ${s.address}` : ''}`, `${s.siteL}' x ${s.siteW}' ${s.surface} site · ${total} guests`];
  for (const { st, lay } of tents) lines.push(`${tents.length > 1 ? `${st.name}: ` : ''}${st.guests} guests · ${lay.W}' x ${lay.L}' ${lay.T.label}`);
  lines.push('');
  for (const r of allRentals(tents)) lines.push(r.grp ? `\n${r.grp.toUpperCase()}` : `${r.qty}  ${r.item}${r.note ? `  (${r.note})` : ''}`);
  return lines.join('\n').replace(/\n{3,}/g, '\n\n');
}

export function checks(st, l, ph) {
  const { W, L, T, S } = l, area = l.area, out = [];
  if (S.kind === 'none') {
    if (area < st.guests * STANDING_SQFT) out.push(['bad', `${Math.round(area)} sq ft is tight for ${st.guests} standing guests. Plan on at least ${STANDING_SQFT}–8 sq ft per guest (${st.guests * STANDING_SQFT}+ sq ft); pick a larger tent.`]);
  } else if (l.manual) {
    // tables placed by hand: compare seats on the plan with the guests who need one
    const gap = l.seated - l.seats;
    if (gap > 0) out.push(['warn', `${gap} guest${gap > 1 ? 's' : ''} without a seat: the plan has ${l.seats} seats for ${l.seated} guests${l.headSeats ? ' (plus the head table)' : ''}. Add a table or chairs, or reset tables to auto.`]);
    else if (gap < 0) out.push(['info', `${-gap} more seat${gap < -1 ? 's' : ''} than guests. Fine for extra room; remove chairs or tables to trim the rental.`]);
  } else if (l.capacity < l.needed) out.push(['bad', `Only ${l.capacity} of ${l.needed} ${S.kind === 'chair' ? 'chairs' : 'tables'} fit. Choose a larger tent, switch spacing to Tight, or turn off a floor item.`]);
  const need = exitCount(st.guests), have = l.exits.length;
  if (have < need) out.push(['bad', `${st.guests} guests need at least ${need} exits under the fire code (IFC Ch. 31, tents); the plan has ${have}. Add ${need - have} more under Entrances & exits.`]);
  if (have && !l.exits.some((e) => e.main)) out.push(['warn', 'No opening is marked as the entrance. Set one to “Entrance” so guests know where to come in.']);
  const close = l.exits.some((a, i) => l.exits.some((b, j) => j > i && Math.hypot(a.x - b.x, a.y - b.y) < 7));
  if (close) out.push(['warn', 'Two openings overlap or sit side by side. Spread exits apart so one blocked doorway does not block both.']);
  const bad = l.items.filter((i) => !i.fit);
  if (bad.length) out.push(['bad', `${[...new Set(bad.map((i) => i.def.label))].join(', ')} ${bad.length > 1 ? 'do' : 'does'} not fit cleanly. It is outlined in red; drag it somewhere open or pick a larger tent.`]);
  if (!siteFits(st, W, L, T.stake)) out.push(['bad', `The tent plus its ${T.stake}' stake and guy line area is ${L + 2 * T.stake}' × ${W + 2 * T.stake}', which is larger than the ${st.siteL}' × ${st.siteW}' site.`]);
  else if (ph) out.push(['info', `On the site plan, keep buildings and lot lines outside the dashed 20' clearance ring (IFC 3103.8). ${st.photo.calibrated ? '' : 'Set the photo scale first so the ring is accurate.'}`]);
  else {
    const o = tentOrigin(st, l, ph), cx = o.x + L / 2, cy = o.y + W / 2, { ex, ey } = halfExt(st, L + 2 * T.stake, W + 2 * T.stake);
    const sb = Math.min(cx - ex, cy - ey, st.siteL - cx - ex, st.siteW - cy - ey);
    if (sb < 20) out.push(['warn', `Tent sits ${Math.max(0, Math.floor(sb))}' from the site edge. The fire code (IFC 3103.8) asks for 20' from lot lines and buildings; your local fire marshal can confirm exceptions.`]);
  }
  const ds = st.acc.dance || {};
  if (ds.on && ds.size === 'auto') {
    const F = danceFinish(st), big = szDims(F.sizes[F.sizes.length - 1]);
    if (big[0] * big[1] < danceNeed(st)) out.push(['warn', `About ${danceNeed(st)} sq ft of dance floor suits ${st.guests} guests. The largest ${F.label.toLowerCase()} floor is ${big[0]}' × ${big[1]}' (${big[0] * big[1]} sq ft). Pick a finish with larger sizes or enter a custom size.`]);
  }
  // tables are no longer numbered on the plan, so point at the red outline instead
  const bu = l.units.filter((u) => u.bad).length;
  if (bu) out.push(['warn', `${bu} ${S.kind === 'chair' ? 'chair' : 'table'}${bu > 1 ? 's' : ''} overlap${bu > 1 ? '' : 's'} another item, a pole or the tent wall (outlined in red). Drag ${bu > 1 ? 'them' : 'it'} to open floor.`]);
  if (l.ok && !l.auto) out.push(['ok', `Everything fits in the ${W}' × ${L}'.`]);
  if (l.auto && l.ok) out.push(['ok', `${W}' × ${L}' is the smallest ${T.label.toLowerCase()} that fits this layout.`]);
  out.push(['info', S.kind === 'none'
    ? `${(area / st.guests).toFixed(1)} sq ft per guest overall. Standing receptions usually need ${S.sqft} sq ft per guest, more with buffets and bars.`
    : `${(area / st.guests).toFixed(1)} sq ft per guest overall. Seating alone usually needs ${S.sqft} sq ft per guest for ${S.label.toLowerCase()}.`]);
  if (area > 400) out.push(['info', 'Tents over 400 sq ft usually need a permit (700 sq ft for open-sided frame tents). Check with the local building or fire department.']);
  if (st.surface === 'asphalt' || st.surface === 'concrete') out.push(['info', `On ${st.surface}, plan for ballast. Staking needs the owner's approval and patching afterward.`]);
  if (st.surface === 'grass' || st.surface === 'gravel') out.push(['info', 'Call 811 to mark underground utilities before staking.']);
  if (st.climate.startsWith('heat')) out.push(['info', 'Keep heaters and fuel outside the tent and at the clearances listed by the heater manufacturer.']);
  return out;
}
