import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {  // Replace '/api' with your custom backend API prefix if different
        target: 'https://cloud.appwrite.io/v1', // Replace with your backend API URL and port
        changeOrigin: true, // Optional, but recommended for CORS issues
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional, rewrites path
      },
    },
  },
  plugins: [react()],
})
