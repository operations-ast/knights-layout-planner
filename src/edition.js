// Which planner this page is: the Knights wedding planner (index.html) or the American Structure Tent
// festival planner (festival.html). festival.html sets window.__EDITION__ before the app loads.
// Both share all the layout code; this file and the per-edition tables in constants.js are what differ.
import knightsLogo from './assets/knights-logo.png';
import astLogo from './assets/ast-logo.png';

const festival = globalThis.__EDITION__ === 'festival';

export const EDITION = festival ? {
  id: 'festival',
  title: 'Festival Layout Planner',
  intro: 'Set the grounds, attendance and festival features. Tent sizes, the site plan and the rental list update as you go. Drag anything to move it.',
  company: 'American Structure Tent',
  logo: astLogo,
  logoAlt: 'American Structure Tent',
  // full-colour logo: keep the red, turn the dark grey lettering white for the dark header and PDF
  logoMode: 'color',
  guestsWord: 'Attendees',
  standingWord: 'General admission (standing)',
  other: { label: 'Wedding planner', href: './index.html' },
} : {
  id: 'wedding',
  title: 'Wedding Layout Planner',
  intro: 'Set the site, guest count and extras. The tent size, plan and rental list update as you go. Drag any floor item to move it.',
  company: 'Knights Tent & Party Rental',
  logo: knightsLogo,
  logoAlt: 'Knights Tent & Party Rental',
  // black-on-white logo: shown as a white mark
  logoMode: 'mono',
  guestsWord: 'Guests',
  standingWord: 'Standing reception',
  other: { label: 'Festival planner', href: './festival.html' },
};

export const isFestival = festival;

/** Browser storage key for this edition, so the two planners keep separate plans and saved layouts. */
export const skey = (k) => (festival ? k.replace(/^tlp-/, 'flp-') : k);

/**
 * Logo for a dark background, as a PNG data URL. 'mono': every inked pixel becomes white.
 * 'color': greys and blacks become white, coloured pixels (the red) keep their colour.
 */
export async function logoForDark(maxW = 700) {
  const img = await new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => bad(new Error('Could not load the logo.')); i.src = EDITION.logo; });
  const w = Math.min(maxW, Math.max(img.width, 480)), h = Math.round(w * img.height / img.width);
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); g.imageSmoothingQuality = 'high'; g.drawImage(img, 0, 0, w, h);
  const px = g.getImageData(0, 0, w, h), d = px.data;
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], gr = d[i + 1], b = d[i + 2], mx = Math.max(r, gr, b), mn = Math.min(r, gr, b);
    const sat = mx ? (mx - mn) / mx : 0, ink = 255 - (r * 0.299 + gr * 0.587 + b * 0.114);
    if (EDITION.logoMode === 'color' && sat > 0.35) continue; // brand colour: leave as is
    d[i] = d[i + 1] = d[i + 2] = 255; d[i + 3] = Math.round(ink * d[i + 3] / 255);
  }
  g.putImageData(px, 0, 0);
  return { url: c.toDataURL('image/png'), ar: h / w };
}
