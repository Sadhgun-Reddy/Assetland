import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'REACT_APP_']);

  return {
    plugins: [react()],
    envPrefix: ['VITE_', 'REACT_APP_'],
    define: {
      'process.env': env,
      global: 'globalThis',
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      testTimeout: 60000,
      server: {
        deps: {
          inline: ['@testing-library/jest-dom'],
        },
      },
    },
  };
});
