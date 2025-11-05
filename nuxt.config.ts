import { defineNuxtConfig } from "nuxt/config";
const getProjectRoutes = require("./scripts/get-project-routes");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@pinia/nuxt'],
  image: {
    dir: 'app/assets/images'
  },
  future: {
    compatibilityVersion: 4,
  },
  generate: {
    routes: getProjectRoutes(),
  },
})