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

  ssr: true,

  // Configure site URL for nuxt-og-image
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://voxium.tech',
  },

  // Nitro configuration for static site generation
  nitro: {
    preset: 'static',
  },

  compatibilityDate: "2024-09-06",
})