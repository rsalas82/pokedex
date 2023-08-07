/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    css: false,
    globals: true,
    environment: 'jsdom',
    watch: false,
    setupFiles: './src/setupTests.ts'
  },
  server: {
    port: 3000,
  },
  build: {
    sourcemap: true,
  }
})
