/// <reference types="vitest/" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
  },  
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 0,
          autoprefixer: {},
          browsers: 'last 2 versions',
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
