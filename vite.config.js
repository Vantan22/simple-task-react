import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      'helpers': fileURLToPath(new URL('./src/helpers', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/components/layouts', import.meta.url)),
      '@common': fileURLToPath(new URL('./src/components/common', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/components/pages', import.meta.url)),
      '@context': fileURLToPath(new URL('./src/context', import.meta.url)),},
  },
})
