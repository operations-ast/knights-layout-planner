import { Fragment, useRef } from 'react';
import { SITES, TENTS, SEATING, ACC, DANCE, CHAIR_STYLES, LIGHT_STYLES } from '../lib/constants.js';
import NumInput from './NumInput.jsx';
import SavedLayouts from './SavedLayouts.jsx';
import ExitsEditor from './ExitsEditor.jsx';
import TentsEditor from './TentsEditor.jsx';
import { chandsToList, nextChandelierSpot, headTable, headSeatsDefault, HEAD_MAX } from '../lib/planner.js';

const opt = (list) => list.map(([v, t]) => <option key={v} value={v}>{t}</option>);

function AccList({ st, update }) {
  return (
    <div className="acc">
      {ACC.map((a) => {
        const s = st.acc[a.id] || { on: false };
        const setAcc = (fn) => update((n) => { n.acc[a.id] = n.acc[a.id] || {}; fn(n.acc[a.id], n); });
        const toggle = (
          <label className="chk">
            <input type="checkbox" checked={!!s.on} onChange={(e) => { const c = e.target.checked; setAcc((x) => { x.on = c; }); }} /> {a.label}
          </label>
        );
        const setSize = (v) => setAcc((x, n) => { x.size = v; delete n.pos[a.id]; });

        if (a.dance) {
          const F = DANCE[s.finish] || DANCE.cherry;
          const size = s.size === 'auto' || s.size === 'custom' || F.sizes.includes(s.size) ? s.size : 'auto';
          return (
            <Fragment key={a.id}>
              <div className="accrow">
                {toggle}
                <select aria-label="Dance floor size" value={size || 'auto'} disabled={!s.on} onChange={(e) => setSize(e.target.value)}>
                  <option value="auto">Auto size</option>
                  {F.sizes.map((z) => <option key={z} value={z}>{`${z.replace('x', "' × ")}'`}</option>)}
                  <option value="custom">Custom size</option>
                </select>
              </div>
              {s.on && (
                <div className="dsub">
                  <label className="field"><span>Finish</span>
                    <select value={s.finish || 'cherry'} onChange={(e) => {
                      const v = e.target.value;
                      setAcc((x, n) => { x.finish = v; if (x.size !== 'auto' && x.size !== 'custom' && !DANCE[v].sizes.includes(x.size)) x.size = 'auto'; delete n.pos.dance; });
                    }}>{opt(Object.entries(DANCE).map(([k, v]) => [k, v.label]))}</select>
                  </label>
                  <label className="chk"><input type="checkbox" checked={!!s.wrap} onChange={(e) => { const c = e.target.checked; setAcc((x) => { x.wrap = c; }); }} /> Vinyl wrap</label>
                </div>
              )}
              {s.on && s.size === 'custom' && (
                <div className="dcustom">
                  <label className="field"><span>Length (ft)</span><NumInput min={4} max={100} step={4} value={s.cl || 20} valid={(n) => n >= 4} onValue={(v) => setAcc((x, n) => { x.cl = Math.min(100, v); delete n.pos.dance; })} /></label>
                  <span className="x">×</span>
                  <label className="field"><span>Width (ft)</span><NumInput min={4} max={100} step={4} value={s.cw || 20} valid={(n) => n >= 4} onValue={(v) => setAcc((x, n) => { x.cw = Math.min(100, v); delete n.pos.dance; })} /></label>
                </div>
              )}
            </Fragment>
          );
        }

        if (a.id === 'stage') {
          return (
            <Fragment key={a.id}>
              <div className="accrow">
                {toggle}
                <select aria-label="Stage size" value={s.size || a.def} disabled={!s.on} onChange={(e) => setSize(e.target.value)}>
                  {Object.keys(a.sizes).map((k) => <option key={k} value={k}>{k}</option>)}
                  <option value="custom">Custom size</option>
                </select>
              </div>
              {s.on && s.size === 'custom' && (
                <div className="dcustom">
                  <label className="field"><span>Front width (ft)</span><NumInput min={4} max={80} step={1} value={s.cl || 12} valid={(n) => n >= 4} onValue={(v) => setAcc((x, n) => { x.cl = Math.min(100, v); delete n.pos.stage; })} /></label>
                  <span className="x">×</span>
                  <label className="field"><span>Depth (ft)</span><NumInput min={4} max={60} step={1} value={s.cw || 8} valid={(n) => n >= 4} onValue={(v) => setAcc((x, n) => { x.cw = Math.min(100, v); delete n.pos.stage; })} /></label>
                </div>
              )}
            </Fragment>
          );
        }

        if (a.id === 'head') {
          // a new size or seat count puts the chairs back to even spacing
          const resize = (fn) => setAcc((x, n) => { fn(x); delete x.chairs; delete n.pos.head; });
          return (
            <Fragment key={a.id}>
              <div className="accrow">
                {toggle}
                <select aria-label="Head table size" value={s.size || a.def} disabled={!s.on}
                  onChange={(e) => { const v = e.target.value; resize((x) => { if (v === 'custom' && !x.seats) x.seats = (a.sizes[x.size] || a.sizes[a.def])[2]; x.size = v; }); }}>
                  {Object.keys(a.sizes).map((k) => <option key={k} value={k}>{k}</option>)}
                  <option value="custom">Custom seats</option>
                </select>
              </div>
              {s.on && s.size === 'custom' && (
                <div className="dcustom">
                  <label className="field"><span>Seats (1–{HEAD_MAX})</span>
                    <NumInput min={1} max={HEAD_MAX} step={1} value={headSeatsDefault(s.seats)} parse={parseInt}
                      valid={(n) => Number.isInteger(n) && n >= 1 && n <= HEAD_MAX} onValue={(v) => resize((x) => { x.seats = v; })} />
                  </label>
                  <span className="hint">{headTable(s).dims[0]}' long</span>
                </div>
              )}
              {s.on && Array.isArray(s.chairs) && (
                <div className="dsub">
                  <span className="hint">{s.chairs.length} seat{s.chairs.length === 1 ? '' : 's'}, arranged by hand</span>
                  <button className="btn sm" onClick={() => setAcc((x) => { delete x.chairs; })}>Reset seats</button>
                </div>
              )}
            </Fragment>
          );
        }

        let ctl = <span />;
        if (a.sizes) {
          ctl = (
            <select aria-label={`${a.label} size`} value={s.size || a.def} disabled={!s.on} onChange={(e) => { const v = e.target.value; setAcc((x) => { x.size = v; }); }}>
              {Object.keys(a.sizes).map((k) => <option key={k} value={k}>{k}</option>)}
            </select>
          );
        } else if (a.qty) {
          ctl = (
            <select aria-label={`${a.label} count`} value={s.qty || 'auto'} disabled={!s.on} onChange={(e) => { const v = e.target.value; setAcc((x) => { x.qty = v; }); }}>
              <option value="auto">Auto count</option>
              {(a.qtyOpts || [1, 2, 3, 4]).map((n) => <option key={n} value={String(n)}>{n}</option>)}
            </select>
          );
        }
        return <div className="accrow" key={a.id}>{toggle}{ctl}</div>;
      })}
    </div>
  );
}

export default function Rail({
  st, lay, model, tents, active, sel, onSelect, update, ph, photoSrc, onPhotoFile, onCalib, onPhotoDel, onPhotoScale, onLoadLayout, onNewLayout,
  onPickTent, onAddTent, onDuplicateTent, onRemoveTent, onArrange, onAddTable, onResetTables,
}) {
  const fileRef = useRef(null);
  const set = (k) => (e) => { const v = e.target.value; update((n) => { n[k] = v; }); };
  const chk = (k) => (e) => { const c = e.target.checked; update((n) => { n[k] = c; }); };
  const S = SEATING[st.seating], mixed = S.kind === 'mixed';
  const seatOpts = mixed ? SEATING[st.mixRound].seats : S.seats;
  const nBanq = lay ? lay.units.filter((u) => u.type === 'banquet').length : 0, nRound = lay ? lay.units.length - nBanq : 0;
  const mapHref = st.address ? `https://www.google.com/maps?q=${encodeURIComponent(st.address)}&t=k` : 'https://www.google.com/maps?t=k';
  const photoHint = !ph
    ? 'Screenshot the satellite view, then upload it or paste it here (Ctrl+V). You will set the scale by clicking two points a known distance apart.'
    : st.photo.calibrated
      ? `Scale set: 1 ft = ${(1 / st.photo.fpp).toFixed(1)} photo pixels. Drag the tent on the site plan to place it.`
      : 'Scale is a rough guess. Click Set scale and mark two points you measured in Google Maps (right-click › Measure distance).';
  const showLock = st.tentSize !== 'auto' && (Object.keys(st.pos).length > 0 || !!st.tables);

  return (
    <aside className="rail" aria-label="Layout settings">
      <section>
        <h2>Location</h2>
        <label className="field"><span>Event or site name</span><input type="text" value={st.siteName} onChange={set('siteName')} /></label>
        <label className="field"><span>Site type</span>
          <select value={st.sitePreset} onChange={(e) => {
            const v = e.target.value;
            update((n) => { n.sitePreset = v; const p = SITES[v]; if (p.l) { n.siteL = p.l; n.siteW = p.w; n.surface = p.surface; } n.tentPos = null; });
            if (tents.length > 1) onArrange();
          }}>{opt(Object.entries(SITES).map(([k, v]) => [k, v.label]))}</select>
        </label>
        <div className="row2">
          <label className="field"><span>Usable length (ft)</span>
            <NumInput min={20} max={2000} step={5} value={st.siteL} valid={(n) => n >= 20} onValue={(v) => update((n) => { n.siteL = Math.min(2000, v); n.sitePreset = 'custom'; })} /></label>
          <label className="field"><span>Usable depth (ft)</span>
            <NumInput min={20} max={2000} step={5} value={st.siteW} valid={(n) => n >= 20} onValue={(v) => update((n) => { n.siteW = Math.min(2000, v); n.sitePreset = 'custom'; })} /></label>
        </div>
        <label className="field"><span>Ground surface</span>
          <select value={st.surface} onChange={set('surface')}>
            {opt([['grass', 'Grass / lawn'], ['gravel', 'Gravel'], ['asphalt', 'Asphalt'], ['concrete', 'Concrete']])}
          </select>
        </label>
        <label className="field"><span>Site address</span><input type="text" value={st.address || ''} onChange={set('address')} placeholder="Street, city, state" /></label>
        <div className="btnrow"><a className="btn" target="_blank" rel="noopener noreferrer" href={mapHref}>Open satellite view in Google Maps</a></div>
        <div className="field"><span>Satellite photo of the site</span>
          <div className="btnrow">
            <button className="btn" onClick={() => fileRef.current.click()}>Upload screenshot</button>
            <input type="file" ref={fileRef} accept="image/*" hidden onChange={(e) => { onPhotoFile(e.target.files && e.target.files[0]); e.target.value = ''; }} />
            <button className="btn" disabled={!ph} onClick={onCalib}>Set scale</button>
            <button className="btn danger" disabled={!ph} onClick={onPhotoDel}>Remove</button>
          </div>
          <p className="hint">{photoHint}</p>
        </div>
        {ph && (
          <label className="field"><span>Photo scale: width covered (ft)</span>
            <NumInput min={10} max={5000} step={1} value={Math.round(st.photo.pw * st.photo.fpp)} valid={(n) => n >= 10}
              onValue={(v) => onPhotoScale(v / (st.photo.pw * st.photo.fpp))} />
          </label>
        )}
        <label className="field"><span>{tents.length > 1 ? `${st.name} rotation` : 'Tent rotation'} on site: <b>{st.tentAngle || 0}°</b></span>
          <input type="range" min={-180} max={180} step={1} value={st.tentAngle || 0} onChange={(e) => { const v = +e.target.value; update((n) => { n.tentAngle = v; }); }} />
        </label>
      </section>

      <TentsEditor tents={tents} active={active} st={st} update={update}
        onPick={onPickTent} onAdd={onAddTent} onDuplicate={onDuplicateTent} onRemove={onRemoveTent} />

      <section>
        <h2>Guests &amp; seating{tents.length > 1 ? ` · ${st.name}` : ''}</h2>
        <div className="field"><span>Guest count</span>
          <div className="guests">
            <NumInput min={1} max={2000} aria-label="Guest count" value={st.guests} parse={parseInt} valid={(n) => n >= 1} onValue={(v) => update((n) => { n.guests = Math.min(2000, v); })} />
            <input type="range" min={10} max={600} step={5} aria-label="Guest count slider" value={Math.min(600, st.guests)}
              onChange={(e) => { const v = parseInt(e.target.value, 10); update((n) => { n.guests = v; }); }} />
          </div>
        </div>
        <label className="field"><span>Seating style</span>
          <select value={st.seating} onChange={(e) => { const v = e.target.value; update((n) => { n.seating = v; n.seatsPer = SEATING[v === 'mixed' ? n.mixRound || 'rounds60' : v].def; }); }}>
            {opt(Object.entries(SEATING).map(([k, v]) => [k, v.label]))}
          </select>
        </label>
        {mixed && (
          <div className="row2">
            <label className="field"><span>Round tables</span>
              <select value={st.mixRound} onChange={(e) => { const v = e.target.value; update((n) => { n.mixRound = v; n.seatsPer = SEATING[v].def; }); }}>
                {opt([['rounds60', '60" rounds'], ['rounds72', '72" rounds']])}
              </select>
            </label>
            <label className="field"><span>Banquet tables (8 seats)</span>
              <NumInput min={0} max={250} aria-label="Banquet tables" value={st.mixBanquet} parse={parseInt} valid={(n) => n >= 0}
                onValue={(v) => update((n) => { n.mixBanquet = Math.min(250, v); })} />
            </label>
          </div>
        )}
        {S.kind !== 'none' && (
          <div className="row2">
            <label className="field"><span>{mixed ? 'Seats per round' : 'Seats per table'}</span>
              <select value={st.seatsPer} disabled={seatOpts.length < 2} onChange={(e) => { const v = +e.target.value; update((n) => { n.seatsPer = v; }); }}>
                {opt(seatOpts.map((n) => [n, n === 1 ? '—' : n]))}
              </select>
            </label>
            <label className="field"><span>Spacing</span>
              <select value={st.spacing} onChange={set('spacing')}>{opt([['comfortable', 'Comfortable'], ['tight', 'Tight']])}</select>
            </label>
          </div>
        )}
        {S.kind === 'none' ? (
          <p className="hint">No tables or chairs are planned. The tent is sized for standing room (about 6–8 sq ft per guest) plus the floor items below.</p>
        ) : lay && (
          <div className="field">
            <span>
              {S.kind === 'chair' ? `${lay.units.length} chairs` : mixed ? `${nRound} rounds · ${nBanq} banquet · ${lay.seats} seats` : `${lay.units.length} tables · ${lay.seats} seats`}
              {' · '}{lay.manual ? 'set by you' : 'auto from guest count'}
            </span>
            <div className="btnrow">
              {mixed ? (<>
                <button className="btn sm" onClick={() => onAddTable(st.mixRound)}>+ Add round</button>
                <button className="btn sm" onClick={() => onAddTable('banquet')}>+ Add banquet</button>
              </>) : <button className="btn sm" onClick={() => onAddTable()}>{S.kind === 'chair' ? '+ Add chair' : '+ Add table'}</button>}
              {st.tables && <button className="btn sm" onClick={onResetTables}>Reset to auto</button>}
            </div>
            <p className="hint">
              {S.kind === 'chair'
                ? 'Click a chair in the tent plan to move or remove it.'
                : 'Click a table in the tent plan to move it, switch it between round and banquet, add or remove chairs, or remove it.'}
            </p>
          </div>
        )}
        <label className="field"><span>Chair style</span>
          <select value={st.chairStyle} onChange={set('chairStyle')}>{opt(CHAIR_STYLES.map((c) => [c, c]))}</select>
        </label>
      </section>

      <section>
        <h2>Tent{tents.length > 1 ? ` · ${st.name}` : ''}</h2>
        <label className="field"><span>Tent style</span>
          <select value={st.tentType} onChange={(e) => { const v = e.target.value; update((n) => { n.tentType = v; n.tentSize = 'auto'; n.pos = {}; }); }}>
            {opt(Object.entries(TENTS).map(([k, v]) => [k, v.label]))}
          </select>
        </label>
        <label className="field"><span>Size</span>
          <select value={st.tentSize} onChange={set('tentSize')}>
            {opt([['auto', 'Auto (smallest that fits)'], ...TENTS[st.tentType].sizes.map(([w, l]) => [`${w}x${l}`, `${w}' × ${l}'`])])}
          </select>
        </label>
        <label className="field"><span>Sidewalls</span>
          <select value={st.walls} onChange={set('walls')}>
            {opt([['none', 'None (open sides)'], ['solid', 'Solid white'], ['window', 'Cathedral window'], ['clear', 'Clear']])}
          </select>
        </label>
        {showLock && <p className="hint">Size locked because you moved an item. Pick Auto to resize again.</p>}
      </section>

      {lay && <ExitsEditor st={st} lay={lay} update={update} sel={sel} onSelect={onSelect} />}

      <section>
        <h2>Floor items</h2>
        <AccList st={st} update={update} />
      </section>

      <section>
        <h2>Comfort, lighting &amp; power</h2>
        <label className="field"><span>Climate control</span>
          <select value={st.climate} onChange={set('climate')}>
            {opt([['none', 'None'], ['fans', 'Summer: industrial fans'], ['heat-mild', 'Cool evening: heat (50s °F)'], ['heat-cold', 'Cold: heat (30s–40s °F)']])}
          </select>
        </label>
        <label className="chk"><input type="checkbox" checked={!!st.stringLights} onChange={chk('stringLights')} /> Bistro string lights</label>
        {st.stringLights && (
          <label className="field" style={{ paddingLeft: 24 }}><span>String light layout</span>
            <select value={st.lightStyle || 'swag'} onChange={set('lightStyle')}>{opt(Object.entries(LIGHT_STYLES))}</select>
          </label>
        )}
        <label className="chk"><input type="checkbox" checked={!!st.chandeliers} onChange={chk('chandeliers')} /> Chandeliers</label>
        {st.chandeliers && lay && (
          <div className="field" style={{ paddingLeft: 24 }}>
            <span>
              {lay.chands.length} chandelier{lay.chands.length === 1 ? '' : 's'} · {st.chandList ? 'placed by you' : "auto, one per 20' bay"}
            </span>
            <div className="btnrow">
              <button className="btn sm" onClick={() => update((n) => { if (!n.chandList) n.chandList = chandsToList(lay); n.chandList.push(nextChandelierSpot(lay)); })}>+ Add chandelier</button>
              {st.chandList && <button className="btn sm" onClick={() => { update((n) => { n.chandList = null; }); onSelect(null); }}>Reset to auto</button>}
            </div>
            <p className="hint">Click a chandelier in the tent plan to drag it, or press Delete to remove it.</p>
          </div>
        )}
        <label className="chk"><input type="checkbox" checked={!!st.uplights} onChange={chk('uplights')} /> LED uplighting</label>
        <label className="chk"><input type="checkbox" checked={!!st.generator} onChange={chk('generator')} /> Generator</label>
      </section>

      <SavedLayouts model={model} ph={ph} photoSrc={photoSrc} onLoad={onLoadLayout} onNew={onNewLayout} />
    </aside>
  );
}
