import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://uma-techno-phrb.vercel.app', // Adjusted for Live
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
