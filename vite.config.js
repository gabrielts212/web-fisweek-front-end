import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // include: '**/*.{jsx,tsx}',
  })],
  server: {
    proxy: {
      "/server/fisweek/lideres": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace(/^\/server/, '')  
      },
      "/server/fisweek/painel/buscar": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace(/^\/server/, '')
      },
      "/server/fisweek/startups": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace(/^\/server/, '')  
      },
      "/server/fisweek": {
        target: "http://127.0.0.1:4000",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace(/^\/server\/fisweek/, '')  
      },
    },
  },
  base: '/fisweek22/',
});
