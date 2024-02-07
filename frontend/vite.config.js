import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://memoize-7433ax5bf-harsh-priyes-projects.vercel.app/",
    }  
  } ,
  plugins: [react()],
})
