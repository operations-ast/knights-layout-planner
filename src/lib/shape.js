// Tent footprint shapes. Rectangles for frame/pole/structure tents; ovals for sailcloth.
// An oval is a straight middle section of length L − 2e with half-ellipse end caps
// (semi-axes e along the length and W/2 across). Plan coordinates: x along length L, y across width W.
import { TENTS } from './constants.js';

export function tentShape(type, W, L) {
  const T = TENTS[type];
  if (!T || T.shape !== 'oval') return { oval: false, W, L, e: 0 };
  const e = Math.min(L / 2, (T.ends && T.ends[W]) || Math.min(W, L) / 2);
  return { oval: true, W, L, e };
}

/** Distance from the top edge (y = 0) to the tent wall at position x. */
export function yTop(sh, x) {
  if (!sh.oval) return 0;
  const { W, L, e } = sh, dx = x < e ? e - x : x > L - e ? x - (L - e) : 0;
  if (!dx) return 0;
  return W / 2 - (W / 2) * Math.sqrt(Math.max(0, 1 - (dx / e) ** 2));
}
/** Distance from the left edge (x = 0) to the tent wall at position y. */
export function xLeft(sh, y) {
  if (!sh.oval) return 0;
  const { W, e } = sh, dy = Math.abs(y - W / 2);
  return e - e * Math.sqrt(Math.max(0, 1 - (dy / (W / 2)) ** 2));
}

/**
 * Which wall a plan point is nearest, and how far along it: { side, f } with f = 0..1
 * (along L for top/bottom, along W for left/right). Used to drag an exit around the tent.
 */
export function wallSideAt(sh, x, y) {
  const { W, L, e } = sh;
  let side;
  if (sh.oval && (x < e || x > L - e)) {
    // on a rounded end: the end's tip counts as left/right, its flanks as top/bottom
    const cx = x < e ? e : L - e, a = Math.atan2((y - W / 2) / (W / 2), (x - cx) / e);
    side = Math.abs(Math.sin(a)) < Math.SQRT1_2 ? (x < e ? 'left' : 'right') : (y < W / 2 ? 'top' : 'bottom');
  } else if (sh.oval) side = y < W / 2 ? 'top' : 'bottom';
  else {
    const d = { top: y, bottom: W - y, left: x, right: L - x };
    side = Object.keys(d).reduce((a, b) => (d[b] < d[a] ? b : a));
  }
  const hz = side === 'top' || side === 'bottom';
  return { side, f: Math.min(1, Math.max(0, hz ? x / L : y / W)) };
}

/** Is the point inside the tent, at least `m` feet from the wall? */
export function inside(sh, x, y, m = 0) {
  const { W, L, e } = sh;
  if (x < m - 1e-6 || x > L - m + 1e-6 || y < m - 1e-6 || y > W - m + 1e-6) return false;
  if (!sh.oval || (x >= e && x <= L - e)) return true;
  const a = e - m, b = W / 2 - m; if (a <= 0 || b <= 0) return false;
  const dx = x < e ? e - x : x - (L - e), dy = y - W / 2;
  return (dx / a) ** 2 + (dy / b) ** 2 <= 1 + 1e-6;
}
/** The shape is convex, so a rectangle is inside when its four corners are. */
export const rectInside = (sh, r, m = 0) =>
  inside(sh, r.x, r.y, m) && inside(sh, r.x + r.w, r.y, m) && inside(sh, r.x, r.y + r.h, m) && inside(sh, r.x + r.w, r.y + r.h, m);

/** Dense closed outline, clockwise from the top-left of the straight section. Offset `k` grows it outward. */
export function outline(sh, k = 0, n = 360) {
  const { W, L, e } = sh;
  if (!sh.oval) return [[-k, -k], [L + k, -k], [L + k, W + k], [-k, W + k]];
  const a = e + k, b = W / 2 + k, pts = [], half = Math.ceil(n / 2);
  for (let i = 0; i <= half; i++) { const t = -Math.PI / 2 + Math.PI * i / half; pts.push([L - e + a * Math.cos(t), W / 2 + b * Math.sin(t)]); }
  for (let i = 0; i <= half; i++) { const t = Math.PI / 2 + Math.PI * i / half; pts.push([e + a * Math.cos(t), W / 2 + b * Math.sin(t)]); }
  return pts;
}

/** SVG path for the outline (true elliptical arcs). */
export function outlinePath(sh, k = 0) {
  const { W, L, e } = sh, a = e + k, b = W / 2 + k;
  if (!sh.oval) return `M${-k} ${-k}H${L + k}V${W + k}H${-k}Z`;
  return `M${e} ${-k}H${L - e}A${a} ${b} 0 0 1 ${L - e} ${W + k}H${e}A${a} ${b} 0 0 1 ${e} ${-k}Z`;
}

/** Outline length, grown outward by k (negative = inset). */
export function perimeter(sh, k = 0) {
  if (!sh.oval) return 2 * (sh.W + sh.L + 4 * k);
  const p = outline(sh, k); let s = 0;
  for (let i = 0; i < p.length; i++) { const [x0, y0] = p[i], [x1, y1] = p[(i + 1) % p.length]; s += Math.hypot(x1 - x0, y1 - y0); }
  return s;
}
export function area(sh) { return sh.oval ? (sh.L - 2 * sh.e) * sh.W + Math.PI * sh.e * (sh.W / 2) : sh.W * sh.L; }

/** n points evenly spaced (by arc length) around the outline, grown outward by k (negative = inset). */
export function evenPoints(sh, n, k = 0) {
  const p = outline(sh, k), seg = [], P = [...p, p[0]]; let tot = 0;
  for (let i = 0; i < p.length; i++) { const d = Math.hypot(P[i + 1][0] - P[i][0], P[i + 1][1] - P[i][1]); seg.push(d); tot += d; }
  const out = []; let i = 0, acc = 0;
  for (let j = 0; j < n; j++) {
    const s = j * tot / n;
    while (acc + seg[i] < s) { acc += seg[i]; i++; }
    const t = seg[i] ? (s - acc) / seg[i] : 0;
    out.push({ x: P[i][0] + (P[i + 1][0] - P[i][0]) * t, y: P[i][1] + (P[i + 1][1] - P[i][1]) * t });
  }
  return out;
}

/**
 * Wall runs around the outline, with 6' openings at each exit. Returns a list of polylines.
 * Exits carry {x, y} = the point on the wall where the opening is centred.
 */
export function wallRuns(sh, exits, gap = 3) {
  const p = outline(sh), near = (q) => exits.some((ex) => Math.hypot(q[0] - ex.x, q[1] - ex.y) < gap);
  const runs = []; let cur = [];
  // start at a point that is not in an opening so runs don't wrap mid-wall
  const start = Math.max(0, p.findIndex((q) => !near(q)));
  for (let j = 0; j <= p.length; j++) {
    const q = p[(start + j) % p.length];
    if (near(q)) { if (cur.length > 1) runs.push(cur); cur = []; } else cur.push(q);
  }
  if (cur.length > 1) runs.push(cur);
  return runs;
}
