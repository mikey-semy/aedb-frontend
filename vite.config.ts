import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path  from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      'process.env.VITE_API_USERNAME': JSON.stringify(env.VITE_API_USERNAME),
      'process.env.VITE_API_PASSWORD': JSON.stringify(env.VITE_API_PASSWORD),
    },
    server: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      },
      proxy: {
        '/api': {
          target: 'https://api.aedb.online',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/media': {
          target: 'https://api.aedb.online',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/media/, ''),
        },
      }
        
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        },
      },
      
    }
  }
});