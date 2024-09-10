// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/base.css"],
  
  app: {
    head: {
      title: "Voxium AI",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
      ],
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