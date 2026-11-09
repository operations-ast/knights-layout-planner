import { useEffect, useState } from 'react';

/**
 * Number input that lets the user type freely (e.g. clear the field, type "1" on the way to "150")
 * and only reports values that pass `valid`. Snaps back to the real value on blur.
 */
export default function NumInput({ value, onValue, valid = () => true, parse = parseFloat, ...rest }) {
  const [txt, setTxt] = useState(String(value));
  const [focus, setFocus] = useState(false);
  useEffect(() => { if (!focus) setTxt(String(value)); }, [value, focus]);
  return (
    <input type="number" {...rest} value={txt}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      onChange={(e) => { const t = e.target.value; setTxt(t); const n = parse(t, 10); if (valid(n)) onValue(n); }} />
  );
}
