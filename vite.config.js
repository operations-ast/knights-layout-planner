import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dev server is localhost only. The live site is the static `dist/` build on GitHub Pages
// (`npm run deploy`); `base: './'` keeps asset links relative so it works under any sub-path.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { host: 'localhost', port: 5173, strictPort: true },
  preview: { host: 'localhost', port: 4173, strictPort: true },
  build: { chunkSizeWarningLimit: 1000 }, // three.js is most of the bundle
});
