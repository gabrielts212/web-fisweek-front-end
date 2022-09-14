import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // include: '**/*.{jsx,tsx}',
  })],
  server: {
    proxy: {
      "/server/fisweek": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace(/^\/server\/fisweek/, '')  
      },
    },
  },
  base: '/fisweek22/',
});