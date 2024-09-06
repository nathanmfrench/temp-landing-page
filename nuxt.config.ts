// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/base.css"],
  
  app: {
    head: {
      title: "Voxium AI",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  
  site: {
    url: "https://voxium.tech",
  },
  
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "nuxt-og-image",
  ],
  
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
      },
    },
  },
  
  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "dark",
  },

  // Configuration for static site generation
  ssr: true,

  // Nitro configuration for static site generation
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    static: true,
  },

  // Optimize for production
  build: {
    transpile: ['vue'],
  },

})