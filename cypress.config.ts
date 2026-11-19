import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://sk8l:8590',
    supportFile: false,
    video: false,
    specPattern: [
      "cypress/**/*.spec.js"
    ]
  }
})
