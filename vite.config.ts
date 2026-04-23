import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('lucide-react')) return 'vendor-icons'
          if (id.includes('react-router')) return 'vendor-router'
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/'))
            return 'vendor-react'
        },
      },
    },
  },
})
