// Mapbox: find a site address and fetch a satellite image of it at a known scale.
// The token is a public (pk.) token read at build time from VITE_MAPBOX_TOKEN (put it in .env.local, which is not committed).
// It ships in the built page, as every Mapbox site's does; restrict it to this site's URLs in the Mapbox account.
export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

export const MAPBOX_ATTRIBUTION = '© Mapbox © OpenStreetMap © Maxar';

// image size requested, in CSS pixels; @2x doubles it, so the photo is 2000 × 1400
const IMG_W = 1000, IMG_H = 700;
const FT_PER_M = 3.28084;
// metres per CSS pixel at zoom 0 on the equator (Mapbox uses 512-pixel tiles)
const M_PER_PX_Z0 = 40075016.686 / 512;

/** Typed "lat, lng" coordinates, or null. */
function parseLatLng(q) {
  const m = q.trim().match(/^(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)$/);
  if (!m) return null;
  const lat = +m[1], lng = +m[2];
  return Math.abs(lat) <= 90 && Math.abs(lng) <= 180 ? { lat, lng, label: `${lat.toFixed(6)}, ${lng.toFixed(6)}` } : null;
}

/** Address (or "lat, lng") -> { lat, lng, label }. Throws a readable Error when nothing is found. */
export async function geocode(query) {
  const q = (query || '').trim();
  if (!MAPBOX_TOKEN) throw new Error('No Mapbox token: set VITE_MAPBOX_TOKEN in .env.local and rebuild.');
  if (!q) throw new Error('Type the site address first.');
  const ll = parseLatLng(q); if (ll) return ll;
  const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(q)}&limit=1&country=us&access_token=${MAPBOX_TOKEN}`;
  let r;
  try { r = await fetch(url); } catch { throw new Error('Could not reach Mapbox. Check the internet connection.'); }
  if (r.status === 401 || r.status === 403) throw new Error('Mapbox refused the access token.');
  if (!r.ok) throw new Error(`Mapbox address search failed (${r.status}).`);
  const f = (await r.json()).features?.[0];
  if (!f) throw new Error('Mapbox could not find that address. Try adding the city and state.');
  const [lng, lat] = f.geometry.coordinates;
  return { lat, lng, label: f.properties?.full_address || f.properties?.name || q };
}

/** Zoom that makes the image IMG_W pixels span widthFt feet at this latitude. */
const zoomFor = (lat, widthFt) => Math.log2(M_PER_PX_Z0 * Math.cos(lat * Math.PI / 180) * IMG_W / (widthFt / FT_PER_M));

/**
 * Satellite image centred on lat/lng, about widthFt feet across.
 * Returns { src (JPEG data URL), pw, ph, fpp (feet per image pixel), zoom }.
 */
export async function satelliteImage(lat, lng, widthFt) {
  const zoom = Math.min(22, Math.max(12, +zoomFor(lat, widthFt).toFixed(2)));
  const url = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng.toFixed(6)},${lat.toFixed(6)},${zoom}/${IMG_W}x${IMG_H}@2x`
    + `?attribution=false&access_token=${MAPBOX_TOKEN}`;
  let r;
  try { r = await fetch(url); } catch { throw new Error('Could not reach Mapbox. Check the internet connection.'); }
  if (r.status === 401 || r.status === 403) throw new Error('Mapbox refused the access token.');
  if (!r.ok) throw new Error(`Mapbox satellite image failed (${r.status}).`);
  const bmp = await createImageBitmap(await r.blob());
  const c = document.createElement('canvas'); c.width = bmp.width; c.height = bmp.height;
  c.getContext('2d').drawImage(bmp, 0, 0);
  // feet per image pixel: metres per CSS pixel at this zoom, halved for @2x, scaled to the actual image width
  const mPerCss = M_PER_PX_Z0 * Math.cos(lat * Math.PI / 180) / 2 ** zoom;
  const fpp = mPerCss * FT_PER_M * IMG_W / bmp.width;
  return { src: c.toDataURL('image/jpeg', 0.85), pw: bmp.width, ph: bmp.height, fpp, zoom };
}
