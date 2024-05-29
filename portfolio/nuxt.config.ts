// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  colorMode: {
    classSuffix: ''
  },
  css: ['@/assets/css/tailwind.css'],
  tailwindcss: {
    configPath: 'tailwind.config.js',
  },
})

