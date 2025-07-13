import { sentryVitePlugin } from "@sentry/vite-plugin";
import tailwind from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwind(), sentryVitePlugin({
    org: "oki-abrian",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})