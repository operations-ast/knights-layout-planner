# Knights Wedding Layout Planner

React + Vite app (dark theme). Two planners share one code base:

- `index.html`: Knights **Wedding Layout Planner**
- `festival.html`: American Structure Tent **Festival Layout Planner** (stages, sound booth, vendor booths, food lines, bars, first aid and other festival items; structure tents by default)

What differs between them (title, logo, company name, site types, floor items, defaults, wording) is in `src/edition.js` and the per-edition tables in `src/lib/constants.js`. Each planner keeps its own plans and saved layouts in the browser.

## Run locally

```
npm install        # first time only
npm start          # dev server at http://localhost:5173 (opens the browser, reloads on save)
```

Production build served locally:

```
npm run serve      # builds to dist/ and serves it at http://localhost:4173
```

## Moving to a server later

`npm run build` outputs a static site in `dist/`. Copy that folder to any web server (IIS, nginx, Azure Static Web Apps, etc.). No backend is needed. Saved layouts live in each browser's localStorage.

## Layout

- `src/lib/` — layout engine (`planner.js`), rental list and checks (`reports.js`), data tables (`constants.js`)
- `src/components/` — React UI: settings rail, SVG plan, selection toolbar, panels
- `src/three/Scene3D.js` — Three.js 3D view
- `layout-planner.html` — the original single-file version, kept for reference
