/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve' || mode === 'development';

  // Base alias configuration
  const baseAlias = {
    '@': path.resolve(__dirname, './src')
  };

  // Add nayan source alias only in development
  const alias = isDev
    ? {
        '@': path.resolve(__dirname, './src'),
        // Point nayan package to source directory for development
        nayan: path.resolve(__dirname, '../react/src')
      }
    : baseAlias;

  const plugins = [react()];

  return {
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
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) {
            return;
          }
          // Suppress PURE comment annotation warnings from react-helmet-async
          if (warning.message && warning.message.includes('/*#__PURE__*/') && warning.message.includes('react-helmet-async')) {
            return;
          }
          warn(warning);
        }
      }
    },
    plugins,
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis'
        }
      }
    },
    resolve: {
      alias
    }
  };
});
