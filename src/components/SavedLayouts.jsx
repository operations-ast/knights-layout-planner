import { useEffect, useRef, useState } from 'react';
import { clone, store } from '../lib/planner.js';

const savedList = () => store('tlp-saved') || {};

/** model: the whole plan (site + every tent) — that is what gets saved. */
export default function SavedLayouts({ model, ph, photoSrc, onLoad }) {
  const [saved, setSaved] = useState(savedList);
  const [name, setName] = useState('');
  const [pick, setPick] = useState('');
  const [hint, setHint] = useState('Layouts save in this browser only.');
  const [armed, setArmed] = useState(false);
  const armTimer = useRef(0);
  const names = Object.keys(saved).sort();
  const current = names.includes(pick) ? pick : names[0] || '';

  useEffect(() => () => clearTimeout(armTimer.current), []);

  const save = () => {
    const n = name.trim() || model.siteName || 'Layout', s = savedList();
    let msg = `Saved “${n}” in this browser.`;
    s[n] = { ...clone(model), photoSrc: ph ? photoSrc : null };
    try { localStorage.setItem('tlp-saved', JSON.stringify(s)); }
    catch {
      s[n].photoSrc = null; s[n].photo = null; msg = `Saved “${n}” without the photo; browser storage is full.`;
      try { localStorage.setItem('tlp-saved', JSON.stringify(s)); } catch { msg = 'This browser will not save layouts.'; }
    }
    setSaved(savedList()); setPick(n); setHint(msg);
  };
  const load = () => { const s = savedList()[current]; if (!s) return; onLoad(s); setHint(`Loaded “${current}”.`); };
  const del = () => {
    if (!current) return;
    if (!armed) { setArmed(true); armTimer.current = setTimeout(() => setArmed(false), 3000); return; }
    clearTimeout(armTimer.current);
    const s = savedList(); delete s[current]; store('tlp-saved', s);
    setArmed(false); setSaved(s); setHint(`Deleted “${current}”.`);
  };

  return (
    <section>
      <h2>Saved layouts</h2>
      <div className="btnrow">
        <input type="text" placeholder="Layout name" style={{ flex: 1 }} value={name} onChange={(e) => setName(e.target.value)} />
        <button className="btn primary" onClick={save}>Save</button>
      </div>
      <div className="btnrow">
        <select style={{ flex: 1 }} aria-label="Saved layouts" value={current} onChange={(e) => setPick(e.target.value)}>
          {names.length ? names.map((n) => <option key={n} value={n}>{n}</option>) : <option value="">No saved layouts yet</option>}
        </select>
        <button className="btn" disabled={!names.length} onClick={load}>Load</button>
        <button className="btn danger" disabled={!names.length} onClick={del}>{armed ? 'Confirm delete' : 'Delete'}</button>
      </div>
      <p className="hint">{hint}</p>
    </section>
  );
}
