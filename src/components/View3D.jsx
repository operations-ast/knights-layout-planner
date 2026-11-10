import { useEffect, useRef, useState } from 'react';
import Scene3D from '../three/Scene3D.js';

const CAMS = [['corner', 'Corner'], ['top', 'Overhead'], ['eye', 'Eye level']];

/** tents: [{ st, lay }] for every tent on the site; active: the one the camera frames. */
export default function View3D({ tents, active, photoSrc }) {
  const boxRef = useRef(null), sceneRef = useRef(null);
  const [msg, setMsg] = useState('Loading 3D view…');
  const [cam, setCam] = useState('corner');
  const [roof, setRoof] = useState(true);
  const [walls, setWalls] = useState(true);

  useEffect(() => {
    let s;
    try { s = new Scene3D(boxRef.current); }
    catch { setMsg('The 3D view needs WebGL, which is turned off in this browser.'); return undefined; }
    sceneRef.current = s; Scene3D.current = s; setMsg(null);
    return () => { if (Scene3D.current === s) Scene3D.current = null; s.dispose(); sceneRef.current = null; };
  }, []);

  // rebuild shortly after the layout settles
  useEffect(() => {
    const t = setTimeout(() => { const s = sceneRef.current; if (s) s.build(tents, active, photoSrc, { roof, walls }); }, 180);
    return () => clearTimeout(t);
  }, [tents, active, photoSrc, roof, walls]);

  const pickCam = (m) => { setCam(m); if (sceneRef.current) sceneRef.current.setCam(m); };

  return (
    <section className="card">
      <div className="toolbar">
        <h2 className="t3">3D view</h2>
        <div className="seg" role="group" aria-label="Camera">
          {CAMS.map(([k, t]) => <button key={k} aria-pressed={cam === k} onClick={() => pickCam(k)}>{t}</button>)}
        </div>
        <label className="chk"><input type="checkbox" checked={roof} onChange={(e) => setRoof(e.target.checked)} /> Roof</label>
        <label className="chk"><input type="checkbox" checked={walls} onChange={(e) => setWalls(e.target.checked)} /> Sidewalls</label>
        <span className="hint hint3">Drag to orbit · scroll or pinch to zoom · right-drag to pan</span>
      </div>
      <div className="stage3d" ref={boxRef}>{msg && <p className="hint msg3d">{msg}</p>}</div>
    </section>
  );
}
