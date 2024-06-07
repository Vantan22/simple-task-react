import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // Kích thước mặc định của SVG sẽ là 1em x 1em, rất hữu ích cho các biểu tượng
        expandProps: 'end',
        svgProps: {
          // width: '24', // Đặt kích thước mặc định cho chiều rộng
          // height: '20',
          fill:'#778CA2'// Đặt kích thước mặc định cho chiều cao
        },// Thêm tất cả các thuộc tính SVG vào phần tử gốc
        svgoConfig: {
          plugins: [
            {
              name: 'removeViewBox', // Giữ viewBox (giúp điều chỉnh kích thước SVG)
              active: false,
            },
            {
              name: 'removeAttrs', // Xóa các thuộc tính không cần thiết
              params: {
                attrs: '(fill|stroke)',
              },
            },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      helpers: fileURLToPath(new URL('./src/helpers', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/components/layouts', import.meta.url)),
      '@common': fileURLToPath(new URL('./src/components/common', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@context': fileURLToPath(new URL('./src/context', import.meta.url)),
      '@icons': fileURLToPath(new URL('./public/icons', import.meta.url)),
    },
  },
})
