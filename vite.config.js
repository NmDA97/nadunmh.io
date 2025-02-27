import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
// import tailwindcssMotion from 'tailwindcss-motion'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // tailwindcssMotion

  ],
  
})