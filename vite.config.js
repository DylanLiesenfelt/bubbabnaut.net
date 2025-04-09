// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // or '/' for root
  server: {
    host: true, 
    port: 5173, 
  }
})

