export const SITES = {
  backyard: { label: 'Backyard', l: 100, w: 70, surface: 'grass' },
  church: { label: 'Church or school lawn', l: 160, w: 120, surface: 'grass' },
  park: { label: 'Park or open field', l: 250, w: 180, surface: 'grass' },
  lot: { label: 'Parking lot', l: 300, w: 150, surface: 'asphalt' },
  patio: { label: 'Venue patio', l: 90, w: 60, surface: 'concrete' },
  custom: { label: 'Custom size' },
};

export const TENTS = {
  frame: { label: 'Frame tent', stake: 3, sizes: [[20, 20], [20, 30], [20, 40], [30, 30], [30, 45], [30, 60], [40, 40], [40, 60], [40, 80], [40, 100], [40, 120]] },
  cleartop: { label: 'Clear-top frame tent', stake: 3, sizes: [[20, 20], [20, 40], [30, 30], [30, 45], [30, 60], [40, 40], [40, 60], [40, 80]] },
  pole: { label: 'High-peak pole tent', stake: 6, sizes: [[30, 45], [40, 60], [40, 80], [40, 100], [60, 60], [60, 90], [60, 120], [80, 120]] },
  // Knights sailcloth line (knightspartyrental.com › Tents › Sailcloth Tent Rental), width × length.
  // Oval: two rounded end caps with straight 20' bays between them. `ends` = depth of each end cap by width
  // (44' wide: 43 = 2 × 21.5, then +20' per bay; 59' wide: 39 = 2 × 19.5, then +20' per bay).
  sailcloth: { label: 'Sailcloth tent', stake: 8, shape: 'oval', ends: { 44: 21.5, 59: 19.5 }, sizes: [[44, 43], [44, 63], [44, 83], [44, 103], [59, 39], [59, 79], [59, 99]] },
  structure: { label: 'Structure tent (clearspan)', stake: 3, sizes: [[40, 45], [40, 60], [40, 75], [40, 90], [40, 120], [40, 150], [60, 60], [60, 90], [60, 120], [60, 150], [60, 180]] },
};

export const SEATING = {
  rounds60: { label: '60" round tables', kind: 'round', r: 2.5, seats: [8, 10], def: 8, cx: 10, cy: 10, hx: 4.25, hy: 4.25, table: '60" round table', linen: '120" round, floor length', sqft: '10–12' },
  rounds72: { label: '72" round tables', kind: 'round', r: 3, seats: [10, 12], def: 10, cx: 11.5, cy: 11.5, hx: 4.75, hy: 4.75, table: '72" round table', linen: '132" round, floor length', sqft: '11–13' },
  banquet: { label: "8' banquet rows", kind: 'banquet', seats: [8], def: 8, cx: 8, cy: 7.5, hx: 4, hy: 3, table: "8' × 30\" banquet table", linen: '90" × 156" banquet, floor length', sqft: '8–10' },
  mixed: { label: 'Mixed rounds + banquet tables', kind: 'mixed', seats: [8, 10], def: 8, cx: 10, cy: 10, hx: 4.25, hy: 4.25, sqft: '9–12' },
  theater: { label: 'Ceremony rows (chairs only)', kind: 'chair', seats: [1], def: 1, cx: 3, cy: 2, hx: 0.8, hy: 0.8, sqft: '6–8' },
  none: { label: 'No seating (standing / cocktail)', kind: 'none', seats: [0], def: 0, cx: 10, cy: 10, hx: 0, hy: 0, sqft: '6–8' },
};
// most chairs that fit around one table when adding chairs by hand
export const MAX_SEATS = { rounds60: 10, rounds72: 12, banquet: 8 };
// table types a single table can be switched to (in any table layout), with short names for the toolbar
export const TABLE_TYPES = { rounds60: '60" round', rounds72: '72" round', banquet: "8' banquet" };
// standing room per guest for a no-seating (cocktail) tent; auto tent size keeps at least this much
export const STANDING_SQFT = 6;

export const ACC = [
  { id: 'stage', label: 'Stage', short: 'STAGE', sizes: { '8×8': [8, 8], '12×8': [12, 8], '16×12': [16, 12], '24×16': [24, 16] }, def: '12×8', walls: ['left', 'top'], f: 0.5 },
  { id: 'head', label: 'Head table', short: 'HEAD TABLE', sizes: { 'Sweetheart · 2': [6, 5, 2], 'Head table · 8': [16, 6, 8], 'Head table · 12': [24, 6, 12], 'Head table · 16': [32, 6, 16] }, def: 'Head table · 8', walls: ['left', 'top'], f: 0.5 },
  { id: 'dance', label: 'Dance floor', short: 'DANCE FLOOR', dance: true },
  { id: 'dj', label: 'DJ booth', short: 'DJ', dims: [8, 6], walls: ['top', 'left'], f: 'dance' },
  { id: 'buffet', label: 'Buffet line', short: 'BUFFET', dims: [16, 9], qty: true, walls: ['right', 'top', 'bottom'], f: 0.5 },
  { id: 'bar', label: 'Bar', short: 'BAR', dims: [10, 6], qty: true, walls: ['bottom', 'top'], f: 1 },
  { id: 'cake', label: 'Cake table', short: 'CAKE', dims: [6, 6], walls: ['bottom', 'top'], f: 'dance' },
  { id: 'gift', label: 'Gift & card table', short: 'GIFTS', dims: [8, 5], walls: ['bottom', 'top'], f: 0.64 },
  { id: 'photo', label: 'Photo booth', short: 'PHOTO', dims: [10, 10], walls: ['bottom', 'top'], f: 0.3 },
  { id: 'lounge', label: 'Lounge seating', short: 'LOUNGE', dims: [14, 10], walls: ['top', 'bottom'], f: 1 },
  { id: 'highboy', label: 'Cocktail tables', short: '', dims: [5, 5], qty: true, qtyOpts: [2, 4, 6, 8, 10, 12, 16, 20], free: true, walls: ['bottom'], f: 1 },
];

export const WALLROT = { top: 0, right: 90, bottom: 180, left: 270 };
export const G = 1.5;

// Knights dance floor line (knightspartyrental.com › Flooring & Stage › Dance Floor)
export const DANCE = {
  cherry: { label: 'Cherry', desc: 'Rich cherry wood-tone finish', sizes: ['12x12', '12x16', '16x16', '20x20', '24x24'], colors: ['#7c3c27', '#6c3320'], tile: 4 },
  birch: { label: 'Birch', desc: 'Light birch wood-tone finish', sizes: ['12x12', '12x16', '16x16', '20x20', '24x24'], colors: ['#e2c797', '#d5b985'], tile: 4 },
  black: { label: 'Black', desc: 'Matte black finish', sizes: ['12x12', '12x16'], colors: ['#1f2226', '#272b30'], tile: 4 },
  white: { label: 'White', desc: 'Bright white high-gloss finish', sizes: ['12x12', '12x16'], colors: ['#f8f8f6', '#eeeeeb'], tile: 4 },
  bw: { label: 'Black & white checkered', desc: 'Classic black & white checkerboard', sizes: ['12x12', '12x16', '16x16', '20x20'], colors: ['#1f2226', '#f8f8f6'], tile: 4 },
  birchwhite: { label: 'Birch & white checkered', desc: 'Birch & white checkerboard', sizes: ['12x12', '16x16', '20x20', '20x24'], colors: ['#e2c797', '#f8f8f6'], tile: 4 },
};

export const EXIT_SPOTS = [['bottom', 0.5], ['top', 0.7], ['right', 0.5], ['top', 0.3], ['bottom', 0.2], ['bottom', 0.8]];

export const CHAIR_COLORS = { 'White folding': '#f1f2f2', Chiavari: '#c9a457', 'Cross-back': '#8a6340', 'Padded banquet': '#3b414a' };
// Bistro string light layouts: zigzag swags across the ceiling, a run around the inside of the perimeter, or both
export const LIGHT_STYLES = { swag: 'Swag (zigzag across ceiling)', perimeter: 'Inside perimeter', both: 'Swag + perimeter' };
export const LIGHT_INSET = 1.5; // perimeter run hangs this far inside the wall line (ft)

/** 8' banquet table chair spots [dx, side], filled alternately on both sides so a part-full table stays balanced. */
export const BANQUET_SEATS = [-3, -1, 1, 3].flatMap((dx) => [[dx, -1], [dx, 1]]);

export const CHAIR_STYLES = ['White folding', 'Chiavari', 'Cross-back', 'Padded banquet'];

export const DEFAULT = {
  siteName: 'Example: Hartwell wedding reception', sitePreset: 'church', siteL: 160, siteW: 120, surface: 'grass',
  guests: 150, seating: 'rounds60', seatsPer: 8, mixRound: 'rounds60', mixBanquet: 4, spacing: 'comfortable', chairStyle: 'Chiavari',
  name: 'Tent 1', tentType: 'frame', tentSize: 'auto', walls: 'window',
  acc: {
    stage: { on: false, size: '12×8', cl: 12, cw: 8 },
    head: { on: true, size: 'Head table · 8' },
    dance: { on: true, size: 'auto', cl: 20, cw: 20, finish: 'cherry', wrap: false },
    dj: { on: true }, buffet: { on: true, qty: 'auto' }, bar: { on: true, qty: 'auto' },
    cake: { on: true }, gift: { on: true }, photo: { on: false }, lounge: { on: false },
    highboy: { on: true, qty: 'auto' },
  },
  climate: 'none', stringLights: true, lightStyle: 'swag', chandeliers: false, uplights: true, generator: true,
  chandList: null, // null = automatic (one per 20' bay on the centerline); otherwise [{ fx, fy }] as fractions of L and W
  exits: null, // null = automatic from guest count; otherwise [{ side, f, kind: 'entrance' | 'exit' }]
  pos: {}, tentPos: null, tables: null, address: '', photo: null, tentAngle: 0,
};
