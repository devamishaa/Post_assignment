/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    },
    resolve: {
        alias: {
          '~': fileURLToPath(new URL('./', import.meta.url)),
          '@': fileURLToPath(new URL('./', import.meta.url)),
          '#app': fileURLToPath(new URL('./mocks/runtimeConfig.ts', import.meta.url))
        }
      }
})
