import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/**
 * In production IIS resolves /form/ to its default document. Vite's SPA
 * fallback would otherwise swallow the directory request and render the React
 * app, so the salesperson link cannot be tested locally. This mirrors IIS.
 */
const serveFormDirectory = {
  name: 'serve-form-directory',
  configureServer(server: { middlewares: { use: (fn: (req: { url?: string }, res: unknown, next: () => void) => void) => void } }) {
    server.middlewares.use((req, _res, next) => {
      if (req.url && /^\/form\/?($|\?)/.test(req.url)) {
        req.url = req.url.replace(/^\/form\/?/, '/form/index.html');
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), serveFormDirectory],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@shared': fileURLToPath(new URL('../server/src/contract.ts', import.meta.url)),
    },
  },
  server: { port: 5173, proxy: { '/api': 'http://localhost:8080' } },
  build: { outDir: 'dist', assetsDir: 'build', chunkSizeWarningLimit: 900 },
});
