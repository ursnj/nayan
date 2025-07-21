/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import path from 'path';

// Vite configuration for monorepo with local nayan source resolution
export default defineConfig({
  base: '/',
  server: {
    host: 'localhost',
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress "use client" directive warnings from node_modules
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) return;
        // Suppress PURE comment annotation warnings from react-helmet-async
        if (warning.message?.includes('/*#__PURE__*/') && warning.message.includes('react-helmet-async')) return;
        warn(warning);
      }
    }
  },
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      define: { global: 'globalThis' }
    }
  },
  resolve: {
    alias: [
      // Resolve nayan imports to local source for development and CI
      { find: /^nayan$/, replacement: path.resolve(__dirname, '../react/src/index.ts') },
      { find: /^nayan\/(.*)$/, replacement: path.resolve(__dirname, '../react/src/$1') },
      // Project src alias
      { find: '@', replacement: path.resolve(__dirname, './src') }
    ]
  }
});
