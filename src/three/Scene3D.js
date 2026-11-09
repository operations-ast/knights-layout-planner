// Three.js scene for the 3D view. Plan (x, y) maps to three (x, z); height is three y.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CHAIR_COLORS, SEATING } from '../lib/constants.js';
import { r2, danceFinish, climateCount, siteExtent, tentOrigin } from '../lib/planner.js';
import { yTop, wallRuns, evenPoints, perimeter } from '../lib/shape.js';
import { BANQUET_SEATS } from '../lib/constants.js';
import { LIGHT_INSET } from '../lib/constants.js';

const cssv = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim() || '#888888';

export default class Scene3D {
  constructor(box) {
    this.box = box;
    this.r = new THREE.WebGLRenderer({ antialias: true }); // throws without WebGL
    this.r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    box.appendChild(this.r.domElement);
    this.scene = new THREE.Scene();
    this.cam = new THREE.PerspectiveCamera(50, 1, 0.3, 6000);
    this.draw = this.draw.bind(this);
    this.ctl = new OrbitControls(this.cam, this.r.domElement);
    this.ctl.maxPolarAngle = Math.PI * 0.495;
    this.ctl.addEventListener('change', this.draw);
    // intensities × π to match the original r128 (legacy) lighting
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x7d8577, 0.8 * Math.PI));
    const sun = new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI); sun.position.set(-60, 120, 80); this.scene.add(sun);
    this.root = new THREE.Group(); this.scene.add(this.root);
    this.boxG = new THREE.BoxGeometry(1, 1, 1); this.cylG = new THREE.CylinderGeometry(1, 1, 1, 28); this.sphG = new THREE.SphereGeometry(1, 10, 8);
    this.mats = {}; this.geoms = []; this.tex = null; this.texSrc = null;
    this.first = true; this.camMode = 'corner'; this.inner = null; this.dims = null; this.lay = null;
    this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(box);
    this.resize();
  }

  resize() {
    const w = this.box.clientWidth, h = this.box.clientHeight; if (!w || !h) return;
    this.r.setSize(w, h, false); this.cam.aspect = w / h; this.cam.updateProjectionMatrix(); this.draw();
  }
  draw() { this.r.render(this.scene, this.cam); }
  geo(g) { this.geoms.push(g); return g; }
  mat(color, o = {}) {
    const k = color + JSON.stringify(o);
    if (!this.mats[k]) {
      const { basic, ...rest } = o;
      this.mats[k] = basic ? new THREE.MeshBasicMaterial({ color: new THREE.Color(color), ...rest }) : new THREE.MeshLambertMaterial({ color: new THREE.Color(color), ...rest });
    }
    return this.mats[k];
  }
  boxAt(parent, x, y, w, d, h, z, color, o) { const m = new THREE.Mesh(this.boxG, this.mat(color, o)); m.scale.set(w, h, d); m.position.set(x + w / 2, z + h / 2, y + d / 2); parent.add(m); return m; }
  cylAt(parent, x, y, r, h, z, color, o) { const m = new THREE.Mesh(this.cylG, this.mat(color, o)); m.scale.set(r, h, r); m.position.set(x, z + h / 2, y); parent.add(m); return m; }

  chair3D(parent, x, y, face, style) {
    const g = new THREE.Group(), c = CHAIR_COLORS[style] || '#cccccc'; g.position.set(x, 0, y); g.rotation.y = -face;
    this.boxAt(g, -0.65, -0.65, 1.3, 1.3, 0.18, 1.42, c); this.boxAt(g, -0.72, -0.65, 0.16, 1.3, 1.7, 1.5, c);
    for (const [a, b] of [[-0.55, -0.55], [-0.55, 0.45], [0.45, -0.55], [0.45, 0.45]]) this.boxAt(g, a, b, 0.1, 0.1, 1.42, 0, c);
    parent.add(g);
  }

  item3D(parent, it, st) {
    const [w, h] = it.dims, id = it.def.id, g = new THREE.Group(), c = new THREE.Group();
    g.position.set(it.x + it.w / 2, 0, it.y + it.h / 2); g.rotation.y = -it.rot * Math.PI / 180; c.position.set(-w / 2, 0, -h / 2); g.add(c); parent.add(g);
    const linen = '#fbfbfa', dark = '#262d36';
    if (id === 'stage') this.boxAt(c, 0, 0, w, h, 2, 0, cssv('--stage'));
    else if (id === 'dance') {
      const F = danceFinish(st), t = F.tile;
      for (let i = 0; i < w / t - 0.01; i++) for (let j = 0; j < h / t - 0.01; j++) this.boxAt(c, i * t, j * t, Math.min(t, w - i * t), Math.min(t, h - j * t), 0.15, 0, F.colors[(i + j) % 2]);
      if ((st.acc.dance || {}).wrap) { const m = this.cylAt(c, w / 2, h / 2, Math.min(w, h) * 0.3, 0.02, 0.15, '#c9b37a'); m.scale.y = 0.02; }
    } else if (id === 'head') {
      this.boxAt(c, 0, h - 3.5, w, 2.5, 2.5, 0, linen); const n = it.seats || 2;
      for (let i = 0; i < n; i++) this.chair3D(c, (i + 0.5) * w / n, h - 4.45, Math.PI / 2, st.chairStyle);
    } else if (id === 'dj') { this.boxAt(c, 1, 2.8, w - 2, 2, 3, 0, dark); this.boxAt(c, 0.3, h - 1.5, 1.2, 1.2, 4.5, 0, dark); this.boxAt(c, w - 1.5, h - 1.5, 1.2, 1.2, 4.5, 0, dark); }
    else if (id === 'buffet') { this.boxAt(c, 0, h / 2 - 1.25, w, 2.5, 2.5, 0, linen); for (let x = 1; x < w - 1; x += 2.6) this.boxAt(c, x, h / 2 - 0.6, 1.8, 1.2, 0.5, 2.5, '#b9c0c7'); }
    else if (id === 'bar') { this.boxAt(c, 2, 0.5, w - 4, 1.5, 3, 0, dark); this.boxAt(c, 1, 3, w - 2, 2.5, 3.5, 0, '#3a434e'); }
    else if (id === 'cake') { this.cylAt(c, w / 2, h / 2, 2, 2.5, 0, linen); this.cylAt(c, w / 2, h / 2, 0.8, 1.3, 2.5, '#efe4d0'); }
    else if (id === 'gift') this.boxAt(c, 1, 1.2, w - 2, 2.5, 2.5, 0, linen);
    else if (id === 'photo') { this.boxAt(c, 1, 0.4, w - 2, 0.4, 8, 0, '#3a434e'); this.boxAt(c, w / 2 - 0.6, h - 2.2, 1.2, 1.2, 5, 0, dark); }
    else if (id === 'lounge') {
      const s = '#8e9ba7';
      this.boxAt(c, 2, 0.6, w - 4, 2.6, 2.6, 0, s); this.boxAt(c, 1, 5.6, 2.6, 2.6, 2.4, 0, s); this.boxAt(c, w - 3.6, 5.6, 2.6, 2.6, 2.4, 0, s); this.boxAt(c, w / 2 - 2.5, 4.6, 5, 2.4, 1.4, 0, '#5d4b3a');
    } else if (id === 'highboy') this.cylAt(c, w / 2, h / 2, 1.25, 3.5, 0, linen);
  }

  unit3D(parent, u, S, st) {
    const g = new THREE.Group(); g.position.set(u.x, 0, u.y); g.rotation.y = -(u.rot || 0) * Math.PI / 180; parent.add(g);
    const linen = '#fbfbfa';
    if (S.kind === 'round') {
      this.cylAt(g, 0, 0, S.r, 2.5, 0, linen); const n = u.seats ?? st.seatsPer, R = S.r + 0.95;
      for (let i = 0; i < n; i++) { const a = i * 2 * Math.PI / n - Math.PI / 2; this.chair3D(g, R * Math.cos(a), R * Math.sin(a), a + Math.PI, st.chairStyle); }
    } else if (S.kind === 'banquet') {
      this.boxAt(g, -4, -1.25, 8, 2.5, 2.5, 0, linen);
      // same seat order as the plan: alternate sides so a part-full table stays balanced
      for (const [dx, sy] of BANQUET_SEATS.slice(0, u.seats ?? 8)) this.chair3D(g, dx, sy * 2.15, sy < 0 ? Math.PI / 2 : -Math.PI / 2, st.chairStyle);
    } else if (S.kind === 'chair') this.chair3D(g, 0, 0, Math.PI, st.chairStyle);
    else this.cylAt(g, 0, 0, S.r || 1.25, 3.5, 0, linen);
  }

  /**
   * tents: [{ st, lay }] — st is the merged site + tent settings for each tent.
   * active: the tent the camera frames. photoSrc: data URL of the site photo, or null.
   */
  build(tents, active, photoSrc, opts) {
    const a = tents[active] || tents[0];
    const root = this.root; while (root.children.length) root.remove(root.children[0]);
    Object.values(this.mats).forEach((m) => m.dispose()); this.mats = {};
    this.geoms.forEach((g) => g.dispose()); this.geoms = [];
    this.scene.background = new THREE.Color(cssv('--paper'));
    const st = a.st, ph = !!photoSrc, e = siteExtent(st, ph);
    this.site = { l: e.l, w: e.w, multi: tents.length > 1 };
    // ground: satellite photo at scale, or the site surface
    let gm;
    if (ph) {
      if (this.texSrc !== photoSrc) {
        if (this.tex) this.tex.dispose();
        this.tex = new THREE.TextureLoader().load(photoSrc, this.draw); this.tex.colorSpace = THREE.SRGBColorSpace; this.texSrc = photoSrc;
      }
      gm = new THREE.MeshBasicMaterial({ map: this.tex }); this.mats._photo = gm;
    } else gm = this.mat(cssv(st.surface === 'grass' || st.surface === 'gravel' ? '--grass' : '--hard'));
    const ground = new THREE.Mesh(this.geo(new THREE.PlaneGeometry(e.l, e.w)), gm); ground.rotation.x = -Math.PI / 2; ground.position.set(e.l / 2, 0, e.w / 2); root.add(ground);
    const far = new THREE.Mesh(this.geo(new THREE.PlaneGeometry(e.l * 4 + 400, e.w * 4 + 400)), this.mat(cssv('--soft'))); far.rotation.x = -Math.PI / 2; far.position.set(e.l / 2, -0.05, e.w / 2); root.add(far);
    for (const t of tents) {
      const r = this.buildTent(t.st, t.lay, ph, opts);
      if (t === a) { this.inner = r.T; this.dims = r.dims; this.lay = t.lay; }
    }
    // frame the camera on first build and whenever a different tent becomes active
    const refocus = this.first || this.lastActive !== active; this.first = false; this.lastActive = active;
    if (refocus) this.setCam(this.camMode); else this.draw();
  }

  /** Build one tent (roof, frame, walls, contents, lights) at its site position. */
  buildTent(st, l, ph, { roof, walls }) {
    const root = this.root, { W, L, sh } = l, type = st.tentType, o = tentOrigin(st, l, ph), ang = (st.tentAngle || 0) * Math.PI / 180, k = l.T.stake;
    const tg = new THREE.Group(); tg.position.set(o.x + L / 2, 0, o.y + W / 2); tg.rotation.y = -ang; root.add(tg);
    const T = new THREE.Group(); T.position.set(-L / 2, 0, -W / 2); tg.add(T);
    // roof shape
    const eave = type === 'structure' ? (W >= 60 ? 12 : 10) : 8;
    const peak = type === 'frame' || type === 'cleartop' ? eave + W * 0.25 : type === 'structure' ? eave + W * 0.2 : type === 'pole' ? eave + W * 0.5 : eave + W * 0.45;
    const pxs = [...new Set(l.poles.filter((p) => p.inner).map((p) => r2(p.x)))].sort((a, b) => a - b), sp = pxs.length > 1 ? pxs[1] - pxs[0] : L;
    const peaked = type === 'pole' || type === 'sailcloth';
    // half-width of the floor at x (narrows toward the rounded ends of an oval)
    const hw = (x) => W / 2 - yTop(sh, x);
    const roofH = (x, y) => {
      const h2 = hw(x), gy = h2 < 0.01 ? 0 : Math.max(0, 1 - Math.abs(y - W / 2) / h2);
      if (peaked) {
        const hip = sh.oval ? 1 : Math.max(0, Math.min(1, x / (W * 0.5), (L - x) / (W * 0.5))); let d = 1e9; for (const px of pxs) d = Math.min(d, Math.abs(x - px));
        const p = pxs.length ? 0.55 + 0.45 * Math.pow(Math.max(0, 1 - d / (sp / 2)), 1.5) : 1;
        return eave + (peak - eave) * Math.pow(gy, type === 'sailcloth' ? 1.8 : 1.3) * Math.min(hip, p);
      }
      return eave + (peak - eave) * gy;
    };
    const fabric = type === 'sailcloth' ? '#f7f1e3' : '#ffffff', clear = type === 'cleartop';
    const roofMat = this.mat(clear ? '#d7ebf7' : fabric, { transparent: true, opacity: clear ? 0.2 : 0.88, side: THREE.DoubleSide, depthWrite: !clear });
    if (roof) {
      const nx = Math.max(8, Math.round(L / 1.5)), ny = Math.max(8, Math.round(W / 1.5)), pos = [], idx = [];
      // each column spans the floor's width at that x, so the roof follows an oval outline
      for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
        const x = i * L / nx, t = yTop(sh, x), y = t + j * (W - 2 * t) / ny;
        pos.push(x, roofH(x, y), y);
      }
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
      const rg = this.geo(new THREE.BufferGeometry()); rg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); rg.setIndex(idx); rg.computeVertexNormals();
      T.add(new THREE.Mesh(rg, roofMat));
      if (!peaked) for (const x of [0, L]) {
        const g2 = this.geo(new THREE.BufferGeometry()); g2.setAttribute('position', new THREE.Float32BufferAttribute([x, eave, 0, x, peak, W / 2, x, eave, W], 3)); g2.computeVertexNormals();
        T.add(new THREE.Mesh(g2, roofMat));
      }
    }
    // frame: legs and center poles
    const metal = '#b9c0c6';
    for (const p of l.poles) { if (p.inner) this.cylAt(T, p.x, p.y, 0.3, roofH(p.x, p.y), 0, '#d9d2c3'); else this.cylAt(T, p.x, p.y, 0.17, eave, 0, metal); }
    if (!peaked) { this.boxAt(T, 0, -0.1, L, 0.2, 0.3, eave - 0.3, metal); this.boxAt(T, 0, W - 0.1, L, 0.2, 0.3, eave - 0.3, metal); this.boxAt(T, 0, W / 2 - 0.15, L, 0.3, 0.3, peak - 0.3, metal); }
    // sidewalls with exit openings
    if (walls && st.walls !== 'none') {
      const op = { solid: 0.92, window: 0.62, clear: 0.16 }[st.walls];
      const wm = this.mat(st.walls === 'clear' ? '#d7ebf7' : fabric, { transparent: true, opacity: op, side: THREE.DoubleSide, depthWrite: st.walls === 'solid' });
      if (sh.oval) {
        // curved wall: a ribbon of quads along each run of the outline between exit openings
        for (const run of wallRuns(sh, l.exits)) {
          const pos = [], idx = [];
          run.forEach(([x, y], i) => { pos.push(x, 0, y, x, eave, y); if (i) { const a = 2 * (i - 1); idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); } });
          const g = this.geo(new THREE.BufferGeometry()); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
          T.add(new THREE.Mesh(g, wm));
        }
      } else for (const side of ['top', 'bottom', 'left', 'right']) {
        const hz = side === 'top' || side === 'bottom', len = hz ? L : W;
        const gaps = l.exits.filter((x) => x.side === side).map((x) => [x.c - 3, x.c + 3]).sort((a, b) => a[0] - b[0]);
        let a = 0; const segs = []; for (const [g0, g1] of gaps) { segs.push([a, g0]); a = g1; } segs.push([a, len]);
        for (const [p, q] of segs) {
          if (q - p < 0.05) continue;
          const m = new THREE.Mesh(this.geo(new THREE.PlaneGeometry(q - p, eave)), wm);
          if (hz) m.position.set((p + q) / 2, eave / 2, side === 'top' ? 0 : W); else { m.rotation.y = Math.PI / 2; m.position.set(side === 'left' ? 0 : L, eave / 2, (p + q) / 2); }
          T.add(m);
        }
      }
    }
    for (const x of l.exits) {
      const h = eave - 0.9;
      if (x.side === 'top' || x.side === 'bottom') this.boxAt(T, x.c - 0.5, x.p - 0.08, 1, 0.16, 0.4, h, '#2f9a5c', { basic: true });
      else this.boxAt(T, x.p - 0.08, x.c - 0.5, 0.16, 1, 0.4, h, '#2f9a5c', { basic: true });
    }
    // floor items and seating
    for (const it of l.items) this.item3D(T, it, st);
    for (const u of l.units) this.unit3D(T, u, SEATING[u.type] || l.S, st);
    // lighting
    const bulb = this.mat(cssv('--light'), { basic: true });
    const ls = st.lightStyle || 'swag';
    if (st.stringLights && ls !== 'swag') {
      // perimeter run just inside the walls, draping between the perimeter poles
      const legs = l.poles.filter((p) => !p.inner), gap = legs.length > 1 ? perimeter(sh) / legs.length : 10;
      for (const q of evenPoints(sh, Math.max(12, Math.round(perimeter(sh) / 2.5)), -LIGHT_INSET)) {
        let d = 1e9; for (const p of legs) d = Math.min(d, Math.hypot(p.x - q.x, p.y - q.y));
        const sag = Math.sin(Math.PI / 2 * Math.min(1, d / (gap / 2))) * 0.9, b = new THREE.Mesh(this.sphG, bulb);
        b.scale.setScalar(0.16); b.position.set(q.x, eave - 0.4 - sag, q.y); T.add(b);
      }
    }
    if (st.stringLights && ls !== 'perimeter') {
      const n = Math.max(1, Math.round(L / 10));
      for (let i = 0; i < n; i++) {
        const x0 = i * L / n, x1 = (i + 1) * L / n, y0 = i % 2 ? W - yTop(sh, x0) : yTop(sh, x0), y1 = (i + 1) % 2 ? W - yTop(sh, x1) : yTop(sh, x1), len = Math.hypot(x1 - x0, y1 - y0), steps = Math.max(2, Math.round(len / 2.5));
        for (let s = 0; s <= steps; s++) {
          const t = s / steps, x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t, sag = Math.sin(Math.PI * t) * 1.2, b = new THREE.Mesh(this.sphG, bulb);
          b.scale.setScalar(0.16); b.position.set(x, roofH(x, y) - 0.5 - sag, y); T.add(b);
        }
      }
    }
    {
      for (const { x, y } of l.chands) {
        const h = roofH(x, y); const b = new THREE.Mesh(this.sphG, bulb);
        b.scale.setScalar(0.9); b.position.set(x, h - 3.6, y); T.add(b); this.boxAt(T, x - 0.03, y - 0.03, 0.06, 0.06, 2.7, h - 2.7, metal);
      }
    }
    if (st.climate.startsWith('heat')) {
      const n = climateCount(st, l.area), nb = Math.ceil(n / 2), nt = n - nb;
      for (let i = 0; i < nb; i++) this.boxAt(T, (i + 1) * L / (nb + 1) - 1.5, W + 3, 3, 4, 3, 0, '#a8443b');
      for (let i = 0; i < nt; i++) this.boxAt(T, (i + 1) * L / (nt + 1) - 1.5, -7, 3, 4, 3, 0, '#a8443b');
    }
    if (st.generator) this.boxAt(T, L + k + 20, W / 2 - 2, 7, 4, 4, 0, '#2d343d');
    return { T, dims: { L, W, peak } };
  }

  setCam(mode) {
    this.camMode = mode;
    if (!this.inner || !this.dims) return;
    const { L, W, peak } = this.dims, M = Math.max(L, W); this.root.updateMatrixWorld(true);
    const w = (x, h, y) => this.inner.localToWorld(new THREE.Vector3(x, h, y));
    let pos, tgt;
    if (mode === 'top' && this.site && this.site.multi) {
      // several tents: look straight down on the whole site
      const { l, w: sw } = this.site; pos = new THREE.Vector3(l / 2, Math.max(l, sw) * 1.1 + 30, sw / 2 + 0.5); tgt = new THREE.Vector3(l / 2, 0, sw / 2);
    } else if (mode === 'top') { pos = w(L / 2, M * 1.15 + peak + 20, W / 2 + 0.5); tgt = w(L / 2, 0, W / 2); }
    else if (mode === 'eye') {
      // stand just inside the entrance (or any opening), looking at the dance floor or stage
      const ex = this.lay.exits.find((e) => e.main) || this.lay.exits[0], f = this.lay.items.find((i) => i.def.id === 'dance') || this.lay.items.find((i) => i.def.id === 'stage');
      const fx = f ? f.x + f.w / 2 : L / 2, fy = f ? f.y + f.h / 2 : W / 2;
      const inward = { bottom: [0, -2.5], top: [0, 2.5], left: [2.5, 0], right: [-2.5, 0] };
      const [ix, iy] = ex ? inward[ex.side] : [0, 0];
      pos = ex ? w(ex.x + ix, 5.5, ex.y + iy) : w(L / 2, 5.5, W - 2.5); tgt = w(fx, 3.5, fy);
    } else { pos = w(-L * 0.35, M * 0.5 + peak, W + M * 0.75); tgt = w(L / 2, 2, W / 2); }
    this.cam.position.copy(pos); this.ctl.target.copy(tgt); this.ctl.update(); this.draw();
  }

  dispose() {
    this.ro.disconnect(); this.ctl.dispose();
    Object.values(this.mats).forEach((m) => m.dispose()); this.geoms.forEach((g) => g.dispose());
    [this.boxG, this.cylG, this.sphG].forEach((g) => g.dispose()); if (this.tex) this.tex.dispose();
    this.r.dispose(); this.r.domElement.remove();
  }
}
