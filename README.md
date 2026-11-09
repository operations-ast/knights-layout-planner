# Knights Tent Layout Planner

React + Vite app (dark theme). Runs on localhost until it moves to a server.

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
