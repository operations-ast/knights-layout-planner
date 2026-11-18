// Site plan as a live 3D Mapbox map: satellite imagery, 3D buildings, and the full 3D tents
// (the same models as the 3D view) standing at their real spot. Drag a tent to move it.
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as THREE from 'three';
import Scene3D from '../three/Scene3D.js';
import { MAPBOX_TOKEN } from '../lib/mapbox.js';
import { isFestival } from '../edition.js';
import { tentOrigin } from '../lib/planner.js';
import { outline } from '../lib/shape.js';
import { siteDef, itemPoly, roofLocal, itemAt } from '../lib/siteItems.js';

const FT = 0.3048; // metres per foot
const HIT = 3;     // feet of slack round a tent when clicking it (the roof stands above the ground point)

/** A Scene3D that only builds tent models into a group (no renderer, camera or ground of its own). */
function tentBuilder() {
  const b = Object.create(Scene3D.prototype);
  b.root = new THREE.Group(); b.mats = {}; b.geoms = [];
  b.boxG = new THREE.BoxGeometry(1, 1, 1); b.cylG = new THREE.CylinderGeometry(1, 1, 1, 28); b.sphG = new THREE.SphereGeometry(1, 10, 8);
  b.clear = () => {
    while (b.root.children.length) b.root.remove(b.root.children[0]);
    Object.values(b.mats).forEach((m) => m.dispose()); b.mats = {};
    b.geoms.forEach((g) => g.dispose()); b.geoms = [];
  };
  b.dispose = () => { b.clear(); [b.boxG, b.cylG, b.sphG].forEach((g) => g.dispose()); };
  return b;
}

/**
 * Site feet <-> map. The satellite photo is centred on photo.lat/lng and is pw*fpp by ph*fpp feet;
 * site (0,0) is its top-left corner, x east and y south, the same as the Web Mercator grid.
 */
function siteFrame(photo) {
  const c = mapboxgl.MercatorCoordinate.fromLngLat([photo.lng, photo.lat], 0);
  const s = c.meterInMercatorCoordinateUnits() * FT; // mercator units per foot
  const ox = c.x - (photo.pw * photo.fpp / 2) * s, oy = c.y - (photo.ph * photo.fpp / 2) * s;
  return {
    s, ox, oy,
    toLngLat: (x, y) => { const ll = new mapboxgl.MercatorCoordinate(ox + x * s, oy + y * s, 0).toLngLat(); return [ll.lng, ll.lat]; },
    toSite: (ll) => { const m = mapboxgl.MercatorCoordinate.fromLngLat(ll, 0); return { x: (m.x - ox) / s, y: (m.y - oy) / s }; },
  };
}

/** Site-feet points of a tent outline grown by k, turned and placed where the tent stands. */
function footprint(t, k) {
  const { st, lay } = t, { W, L } = lay, o = tentOrigin(st, lay, true), a = (st.tentAngle || 0) * Math.PI / 180;
  const cx = o.x + L / 2, cy = o.y + W / 2, c = Math.cos(a), sn = Math.sin(a);
  return outline(lay.sh, k, 72).map(([x, y]) => { const dx = x - L / 2, dy = y - W / 2; return [cx + dx * c - dy * sn, cy + dx * sn + dy * c]; });
}

/** Index of the tent under site point p, or -1. */
function tentAt(tents, p) {
  for (let i = tents.length - 1; i >= 0; i--) {
    const { st, lay } = tents[i], { W, L } = lay, o = tentOrigin(st, lay, true), a = -(st.tentAngle || 0) * Math.PI / 180;
    const dx = p.x - (o.x + L / 2), dy = p.y - (o.y + W / 2);
    const lx = dx * Math.cos(a) - dy * Math.sin(a), ly = dx * Math.sin(a) + dy * Math.cos(a);
    if (Math.abs(lx) <= L / 2 + HIT && Math.abs(ly) <= W / 2 + HIT) return i;
  }
  return -1;
}

/**
 * tents: [{ st, lay }]; photo: model.photo from Mapbox (lat, lng, pw, ph, fpp); photoSrc: that image.
 * onPickTent(i): a tent was clicked. onMoveTent(i, x, y): drag a tent so its top-left (unturned) is at x, y feet.
 */
export default function SiteMap3D({ tents, active, sel, photo, photoSrc, onPickTent, onMoveTent, onDeselect, siteItems = [], onPickItem, onMoveItem }) {
  const boxRef = useRef(null), mapRef = useRef(null), builderRef = useRef(null), frameRef = useRef(null);
  const live = useRef({}); live.current = { tents, active, onPickTent, onMoveTent, onDeselect, siteItems, onPickItem, onMoveItem };
  const [ready, setReady] = useState(false);
  const [err, setErr] = useState(null);
  const [roof, setRoof] = useState(true);
  const [walls, setWalls] = useState(false);
  const [buildings, setBuildings] = useState(true);
  const photoKey = `${photo.lat},${photo.lng},${photo.pw},${photo.ph},${photo.fpp}`;

  // the map itself: made once per site photo
  useEffect(() => {
    if (typeof mapboxgl.supported === 'function' && !mapboxgl.supported()) { setErr('The 3D map needs WebGL, which is turned off in this browser.'); return undefined; }
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const frame = siteFrame(photo); frameRef.current = frame;
    let map;
    try {
      map = new mapboxgl.Map({
        container: boxRef.current, style: 'mapbox://styles/mapbox/satellite-streets-v12',
        projection: 'mercator', center: [photo.lng, photo.lat], zoom: 18, pitch: 58, bearing: -20, antialias: true, keyboard: false, attributionControl: true,
      });
    } catch { setErr('The 3D map could not start in this browser.'); return undefined; }
    mapRef.current = map;
    if (import.meta.env.DEV) window.__siteMap = { map, frame, builder: () => builderRef.current }; // for browser tests
    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');
    map.on('error', (e) => { if (e?.error?.status === 401) setErr('Mapbox refused the access token.'); });

    const builder = tentBuilder(); builderRef.current = builder;
    const scene = new THREE.Scene(), camera = new THREE.Camera();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x7d8577, 0.8 * Math.PI));
    const sun = new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI); sun.position.set(-60, 120, 80); scene.add(sun);
    scene.add(builder.root);
    // site feet (x east, y up, z south) -> mercator (x east, y south, z up)
    const model = new THREE.Matrix4().makeTranslation(frame.ox, frame.oy, 0)
      .scale(new THREE.Vector3(frame.s, -frame.s, frame.s))
      .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2));
    let renderer = null;
    const tentLayer = {
      id: 'tents-3d', type: 'custom', renderingMode: '3d',
      onAdd(m, gl) { renderer = new THREE.WebGLRenderer({ canvas: m.getCanvas(), context: gl, antialias: true }); renderer.autoClear = false; },
      render(gl, matrix) {
        camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix).multiply(model);
        renderer.resetState(); renderer.render(scene, camera);
      },
    };

    map.on('style.load', () => {
      map.setFog({ range: [1, 12], color: '#dfe7ef', 'horizon-blend': 0.08 });
      if (map.getLayer('background')) map.setPaintProperty('background', 'background-color', '#2a3038');
      // the style's own satellite source uses Mapbox's raster tiles API, which this token may not be allowed to use
      // (it answers 429 to every tile, leaving only the site photo); draw the same imagery from the Static Tiles API
      const sat = map.getStyle().layers.find((l) => l.type === 'raster' && l.source === 'mapbox-satellite');
      if (sat) {
        const before = map.getStyle().layers[map.getStyle().layers.findIndex((l) => l.id === sat.id) + 1]?.id;
        map.removeLayer(sat.id); map.removeSource('mapbox-satellite');
        map.addSource('sat-tiles', { type: 'raster', tileSize: 512, maxzoom: 22, attribution: '© Maxar',
          tiles: [`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`] });
        map.addLayer({ id: 'satellite', type: 'raster', source: 'sat-tiles', paint: { 'raster-fade-duration': 150 } }, before);
      }
      // the site's own satellite photo, laid at its exact spot and scale: the tent area always has imagery,
      // even where the map's satellite tiles are missing or older
      const firstVector = map.getStyle().layers.find((l) => l.type !== 'background' && l.type !== 'raster');
      const e = { l: photo.pw * photo.fpp, w: photo.ph * photo.fpp };
      map.addSource('site-photo', { type: 'image', url: photoSrc, coordinates: [frame.toLngLat(0, 0), frame.toLngLat(e.l, 0), frame.toLngLat(e.l, e.w), frame.toLngLat(0, e.w)] });
      map.addLayer({ id: 'site-photo', type: 'raster', source: 'site-photo', paint: { 'raster-fade-duration': 0 } }, firstVector && firstVector.id);
      // ground outlines: each tent's footprint and the 20' clearance round it
      map.addSource('tent-lines', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      map.addLayer({ id: 'tent-clear', type: 'line', source: 'tent-lines', filter: ['==', ['get', 'kind'], 'clear'],
        paint: { 'line-color': '#f0c24a', 'line-width': 2, 'line-dasharray': [2, 2] } });
      map.addLayer({ id: 'tent-foot', type: 'line', source: 'tent-lines', filter: ['==', ['get', 'kind'], 'foot'],
        paint: { 'line-color': ['case', ['get', 'active'], '#f09a45', '#ffffff'], 'line-width': ['case', ['get', 'active'], 3, 1.5] } });
      map.addLayer({ id: 'buildings-3d', type: 'fill-extrusion', source: 'composite', 'source-layer': 'building', minzoom: 14,
        filter: ['==', ['get', 'extrude'], 'true'],
        paint: { 'fill-extrusion-color': '#cfd5dc', 'fill-extrusion-height': ['get', 'height'], 'fill-extrusion-base': ['get', 'min_height'], 'fill-extrusion-opacity': 0.55 } });
      // outdoor site items: flat areas on the ground, everything else as a coloured block of its real height
      map.addSource('site-items', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      map.addLayer({ id: 'site-items-flat', type: 'fill', source: 'site-items', filter: ['==', ['get', 'h'], 0],
        paint: { 'fill-color': ['get', 'color'], 'fill-opacity': 0.55, 'fill-outline-color': '#ffffff' } });
      // a solid white border so flat areas (parking, seating) stand out on the satellite imagery
      map.addLayer({ id: 'site-items-edge', type: 'line', source: 'site-items', filter: ['==', ['get', 'h'], 0],
        paint: { 'line-color': '#ffffff', 'line-width': 2.5 } });
      map.addLayer({ id: 'site-items-3d', type: 'fill-extrusion', source: 'site-items', filter: ['>', ['get', 'h'], 0],
        paint: { 'fill-extrusion-color': ['get', 'color'], 'fill-extrusion-height': ['get', 'h'], 'fill-extrusion-base': ['get', 'base'], 'fill-extrusion-opacity': 0.92 } });
      map.addLayer({ id: 'site-items-sel', type: 'line', source: 'site-items', filter: ['all', ['get', 'sel'], ['!', ['get', 'roof']]],
        paint: { 'line-color': '#f09a45', 'line-width': 3, 'line-dasharray': [2, 1] } });
      map.addLayer({ id: 'site-items-label', type: 'symbol', source: 'site-items', filter: ['!', ['get', 'roof']],
        layout: { 'text-field': ['get', 'label'], 'text-size': 11, 'text-allow-overlap': false, 'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold'] },
        paint: { 'text-color': '#ffffff', 'text-halo-color': '#11161c', 'text-halo-width': 1.4 } });
      map.addLayer(tentLayer);
      setReady(true);
    });

    // drag a tent; anything else pans and turns the map as usual
    let drag = null;
    const down = (e) => {
      const p = frame.toSite([e.lngLat.lng, e.lngLat.lat]), L = live.current;
      const k = itemAt(L.siteItems, p, 1);
      if (k >= 0 && L.onMoveItem) {
        e.preventDefault(); L.onPickItem(k);
        drag = { item: k, dx: p.x - L.siteItems[k].x, dy: p.y - L.siteItems[k].y }; map.getCanvas().style.cursor = 'grabbing'; return;
      }
      const i = tentAt(L.tents, p);
      if (i < 0) { L.onDeselect(); return; }
      e.preventDefault(); // stops the map panning for this gesture
      L.onPickTent(i);
      const o = tentOrigin(L.tents[i].st, L.tents[i].lay, true);
      drag = { i, dx: p.x - o.x, dy: p.y - o.y }; map.getCanvas().style.cursor = 'grabbing';
    };
    const move = (e) => {
      const p = frame.toSite([e.lngLat.lng, e.lngLat.lat]);
      if (drag && drag.item != null) { live.current.onMoveItem(drag.item, p.x - drag.dx, p.y - drag.dy); return; }
      if (drag) { live.current.onMoveTent(drag.i, p.x - drag.dx, p.y - drag.dy); return; }
      map.getCanvas().style.cursor = tentAt(live.current.tents, p) >= 0 || itemAt(live.current.siteItems, p, 1) >= 0 ? 'move' : '';
    };
    const up = () => { if (drag) { drag = null; map.getCanvas().style.cursor = ''; } };
    map.on('mousedown', down); map.on('touchstart', (e) => { if (e.points?.length === 1) down(e); });
    map.on('mousemove', move); map.on('touchmove', move);
    map.on('mouseup', up); map.on('touchend', up); map.on('touchcancel', up);
    window.addEventListener('mouseup', up);

    return () => {
      window.removeEventListener('mouseup', up);
      setReady(false); builder.dispose(); map.remove(); mapRef.current = null; builderRef.current = null;
    };
  }, [photoKey]); // eslint-disable-line react-hooks/exhaustive-deps

  // frame the tents once the map is up
  useEffect(() => {
    const map = mapRef.current, f = frameRef.current; if (!ready || !map || !f) return;
    const pts = [...tents.flatMap((t) => footprint(t, 40)), ...siteItems.flatMap((it) => itemPoly(it))].map(([x, y]) => f.toLngLat(x, y));
    const b = pts.reduce((bb, p) => bb.extend(p), new mapboxgl.LngLatBounds(pts[0], pts[0]));
    map.fitBounds(b, { padding: 40, pitch: 58, bearing: -20, duration: 0, maxZoom: 21 });
  }, [ready]); // eslint-disable-line react-hooks/exhaustive-deps

  // bring a newly added or picked outdoor item into view (new items can land well away from the tents)
  const lastSel = useRef(sel);
  useEffect(() => {
    const map = mapRef.current, f = frameRef.current, prev = lastSel.current; lastSel.current = sel;
    if (!ready || !map || !f || sel === prev || !/^s:\d+$/.test(sel || '')) return;
    const it = siteItems[+sel.slice(2)]; if (!it) return;
    const pts = itemPoly(it).map(([x, y]) => map.project(f.toLngLat(x, y))), { width, height } = map.getCanvas().getBoundingClientRect();
    if (pts.every((p) => p.x > 30 && p.y > 30 && p.x < width - 30 && p.y < height - 30)) return; // already on screen
    const zoom = Math.max(map.getZoom(), 17.5);
    map.easeTo({ center: f.toLngLat(it.x, it.y), zoom, duration: 800 });
  }, [ready, sel, siteItems]);

  // rebuild the tent models and ground outlines whenever the plan changes (once per frame at most)
  useEffect(() => {
    const map = mapRef.current, b = builderRef.current, f = frameRef.current; if (!ready || !map || !b || !f) return undefined;
    const raf = requestAnimationFrame(() => {
      b.clear();
      for (const t of tents) b.buildTent(t.st, t.lay, true, { roof, walls });
      b.root.traverse((o) => { o.frustumCulled = false; });
      const ring = (pts) => [...pts, pts[0]].map(([x, y]) => f.toLngLat(x, y));
      map.getSource('tent-lines')?.setData({
        type: 'FeatureCollection',
        features: tents.flatMap((t, i) => [
          { type: 'Feature', properties: { kind: 'foot', active: i === active && sel === '__tent' }, geometry: { type: 'LineString', coordinates: ring(footprint(t, 0)) } },
          { type: 'Feature', properties: { kind: 'clear', active: false }, geometry: { type: 'LineString', coordinates: ring(footprint(t, 20)) } },
        ]),
      });
      // outdoor items, in metres for the extrusions; a stage area also gets a roof block on top
      const feats = [];
      siteItems.forEach((it, i) => {
        const d = siteDef(it), poly = [ring(itemPoly(it))], label = (d.short || '').toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase());
        const props = { h: d.h * FT, base: 0, color: d.color, label, sel: sel === 's:' + i, roof: false };
        feats.push({ type: 'Feature', properties: props, geometry: { type: 'Polygon', coordinates: poly } });
        if (d.roof) feats.push({ type: 'Feature', properties: { ...props, h: d.roof * FT, base: (d.roof - 1.5) * FT, color: '#2b3038', roof: true }, geometry: { type: 'Polygon', coordinates: [ring(itemPoly(it, roofLocal(it)))] } });
      });
      map.getSource('site-items')?.setData({ type: 'FeatureCollection', features: feats });
      map.triggerRepaint();
    });
    return () => cancelAnimationFrame(raf);
  }, [ready, tents, active, sel, roof, walls, siteItems]);

  useEffect(() => {
    const map = mapRef.current; if (!ready || !map || !map.getLayer('buildings-3d')) return;
    map.setLayoutProperty('buildings-3d', 'visibility', buildings ? 'visible' : 'none');
  }, [ready, buildings]);

  const view = (pitch, bearing) => { const m = mapRef.current; if (m) m.easeTo({ pitch, bearing, duration: 700 }); };

  return (
    <div className="map3d">
      <div className="map3dbar">
        <div className="seg" role="group" aria-label="Map angle">
          <button onClick={() => view(58, -20)}>Angled</button>
          <button onClick={() => view(0, 0)}>Overhead</button>
        </div>
        <label className="chk"><input type="checkbox" checked={roof} onChange={(e) => setRoof(e.target.checked)} /> Roof</label>
        <label className="chk"><input type="checkbox" checked={walls} onChange={(e) => setWalls(e.target.checked)} /> Sidewalls</label>
        <label className="chk"><input type="checkbox" checked={buildings} onChange={(e) => setBuildings(e.target.checked)} /> 3D buildings</label>
        <span className="hint hint3">Drag a tent{isFestival ? ' or outdoor item' : ''} to move it · drag the map to pan · right-drag or Ctrl-drag to tilt and turn</span>
      </div>
      <div className="map3dstage" ref={boxRef}>{err && <p className="hint msg3d">{err}</p>}</div>
    </div>
  );
}
