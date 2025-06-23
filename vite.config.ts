import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
    open: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html']
    }
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Nayan',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'src/App.ts', 'src/website/**', 'src/tests/**'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false
  },
  plugins: [react(), dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
