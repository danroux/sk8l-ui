// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

export default defineConfig(({ mode }) => {
  const httpsConfig = mode === "development"
    ? {
        key: fs.readFileSync('/etc/sk8l-certs/server-key.pem'),
        cert: fs.readFileSync('/etc/sk8l-certs/server-cert.pem'),
      }
    : {};

  return {
    plugins: [vue()],
    test: {
      environment: 'happy-dom',
      globals: true,
      include: ['tests/unit/**/*.spec.{ts,js}'],
      exclude: ['cypress/**', 'node_modules/**'],
    },
    server: {
      host: "0.0.0.0",
      port: 8001,
      https: httpsConfig,
    },
    resolve: {
      alias: {
        preserveSymlinks: true,
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
