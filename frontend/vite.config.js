import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   optimizeDeps: {
    exclude: ["@mediapipe/tasks-vision"],
  },
   build: {
    commonjsOptions: {
      ignore: ["@mediapipe/tasks-vision"],
    },
    rollupOptions: {
      external: ["@mediapipe/tasks-vision"],
    },
  },
})
