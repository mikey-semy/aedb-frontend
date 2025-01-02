import { defineConfig } from 'vite';
import baseConfig from './vite.config.base';

export default defineConfig((env) => ({
  ...baseConfig(env),
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/media': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/media/, ''),
      },
    }
  }
}));