import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy all requests starting with '/app/v1' to the Vercel backend
      '/app/v1': {
        target: "https://backend-service-two.vercel.app", // Your backend URL
        changeOrigin: true, // Changes the origin of the host header to the target URL
        secure: true,       // Set to true since Vercel uses HTTPS
        rewrite: (path) => path.replace(/^\/app\/v1/, '') // Rewrite the URL, remove '/app/v1'
      }
    }
  },
  plugins: [react()],
})
