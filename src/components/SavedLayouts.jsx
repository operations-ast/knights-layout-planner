import { useEffect, useRef, useState } from 'react';
import { clone, store } from '../lib/planner.js';

const savedList = () => store('tlp-saved') || {};
// name of the saved layout the working plan came from ('' = a new, unsaved plan); survives page reloads
const linkedName = () => { const n = store('tlp-current-name'); return typeof n === 'string' ? n : ''; };

/** model: the whole plan (site + every tent) — that is what gets saved. */
export default function SavedLayouts({ model, ph, photoSrc, onLoad, onNew }) {
  const [saved, setSaved] = useState(savedList);
  const [linked, setLinkedState] = useState(linkedName);
  const [name, setName] = useState(linked);
  const [pick, setPick] = useState(linked);
  const [hint, setHint] = useState('Layouts save in this browser only.');
  // which button is waiting for a second click to confirm: 'new' | 'save' | 'delete' | null
  const [armed, setArmedState] = useState(null);
  const armTimer = useRef(0);
  const names = Object.keys(saved).sort();
  const current = names.includes(pick) ? pick : names[0] || '';

  useEffect(() => () => clearTimeout(armTimer.current), []);

  const setLinked = (n) => { setLinkedState(n); store('tlp-current-name', n); };
  const disarm = () => { clearTimeout(armTimer.current); setArmedState(null); };
  /** First click arms the action and returns false; a second click within 4 s returns true. */
  const confirmed = (what, msg) => {
    if (armed === what) { disarm(); return true; }
    clearTimeout(armTimer.current); setArmedState(what); setHint(msg);
    armTimer.current = setTimeout(() => setArmedState(null), 4000);
    return false;
  };

  const startNew = () => {
    if (!confirmed('new', linked
      ? `Click “Confirm new” to start a blank layout. Unsaved changes to “${linked}” will be lost.`
      : 'Click “Confirm new” to start a blank layout. This unsaved plan will be lost.')) return;
    onNew(); setLinked(''); setName(''); setHint('Started a new layout. Name it and click Save.');
  };

  const save = () => {
    const n = name.trim();
    if (!n) { disarm(); setHint('Type a name for this layout, then click Save.'); return; }
    const s = savedList();
    // saving over a different layout than the one being edited needs a second click
    if (s[n] && n !== linked && !confirmed('save', `“${n}” already exists. Click “Overwrite” to replace it, or change the name.`)) return;
    disarm();
    let msg = s[n] ? `Updated “${n}”.` : `Saved “${n}” in this browser.`;
    s[n] = { ...clone(model), photoSrc: ph ? photoSrc : null };
    try { localStorage.setItem('tlp-saved', JSON.stringify(s)); }
    catch {
      s[n].photoSrc = null; s[n].photo = null; msg = `Saved “${n}” without the photo; browser storage is full.`;
      try { localStorage.setItem('tlp-saved', JSON.stringify(s)); } catch { setHint('This browser will not save layouts.'); return; }
    }
    setSaved(savedList()); setPick(n); setLinked(n); setHint(msg);
  };

  const load = () => {
    const s = savedList()[current]; if (!s) return;
    disarm(); onLoad(s); setLinked(current); setName(current); setHint(`Loaded “${current}”. Save updates it; change the name to save a copy.`);
  };

  const del = () => {
    if (!current) return;
    if (!confirmed('delete', `Click “Confirm delete” to delete “${current}”.`)) return;
    const s = savedList(); delete s[current]; store('tlp-saved', s);
    if (current === linked) setLinked('');
    setSaved(s); setHint(`Deleted “${current}”.`);
  };

  const editing = name.trim();
  const saveLabel = armed === 'save' ? 'Overwrite' : saved[editing] && editing === linked ? 'Update' : 'Save';

  return (
    <section>
      <h2>Saved layouts</h2>
      <p className="hint">{linked ? <>Editing <strong>{linked}</strong></> : 'New layout (not saved yet)'}</p>
      <div className="btnrow">
        <input type="text" placeholder="Layout name" style={{ flex: 1 }} value={name}
          onChange={(e) => { setName(e.target.value); if (armed === 'save') disarm(); }}
          onKeyDown={(e) => { if (e.key === 'Enter') save(); }} />
        <button className={armed === 'save' ? 'btn danger' : 'btn primary'} onClick={save}>{saveLabel}</button>
        <button className={armed === 'new' ? 'btn danger' : 'btn'} onClick={startNew}>{armed === 'new' ? 'Confirm new' : 'New'}</button>
      </div>
      <div className="btnrow">
        <select style={{ flex: 1 }} aria-label="Saved layouts" value={current} onChange={(e) => setPick(e.target.value)}>
          {names.length ? names.map((n) => <option key={n} value={n}>{n}</option>) : <option value="">No saved layouts yet</option>}
        </select>
        <button className="btn" disabled={!names.length} onClick={load}>Load</button>
        <button className="btn danger" disabled={!names.length} onClick={del}>{armed === 'delete' ? 'Confirm delete' : 'Delete'}</button>
      </div>
      <p className="hint">{hint}</p>
    </section>
  );
}
