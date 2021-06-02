// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": resolve(__dirname, "src"),
  },
  plugins: [vue()]
})