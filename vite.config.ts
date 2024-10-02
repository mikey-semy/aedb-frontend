import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';
import { URL } from 'url';


// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')

  const mediaProxy = createProxyMiddleware({
    target: new URL('https://api.aedb.ru').href,
    changeOrigin: true,
    pathRewrite: { '^/media': '' },
  }) as unknown as RequestHandler

  return {
    plugins: [react()],
    define: {
      'process.env.VITE_API_USERNAME': JSON.stringify(env.VITE_API_USERNAME),
      'process.env.VITE_API_PASSWORD': JSON.stringify(env.VITE_API_PASSWORD),
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://api.aedb.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/media': {
          target: 'https://api.aedb.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/media/, ''),
          ...mediaProxy,
        },
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
});