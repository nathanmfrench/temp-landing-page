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
    url: "https://https://voxium.tech/", //change this soon to my real domain name heeeeee
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
    preference: "dark", // Set this to "dark" to default to dark mode
    fallback: "dark",  // Also set fallback to "dark" to ensure dark mode is used if preference is not detected
  },
})
