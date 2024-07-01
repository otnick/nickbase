// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'nickot - nickbase',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'kickbase client' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/unit_red.png' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    "@nuxt/icon",
  ],
  colorMode: { classSuffix: '' },
  css: ['@/assets/css/tailwind.css'],
  tailwindcss: { configPath: 'tailwind.config.js',},
})