import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Localhost only for now. When this moves to a server, change `host`
// (e.g. to '0.0.0.0') or deploy the static `dist/` folder from `npm run build`.
export default defineConfig({
  plugins: [react()],
  server: { host: 'localhost', port: 5173, strictPort: true },
  preview: { host: 'localhost', port: 4173, strictPort: true },
  build: { chunkSizeWarningLimit: 1000 }, // three.js is most of the bundle
});
