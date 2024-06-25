// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Nick Schumacher - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio of Nick Schumacher' },
        { httpEquiv: 'origin-trial', content: 'ApD+HWsC7v4K9tU0vJ78JfppHyL2GOW7F7wj2GPLOwQ/CkM0sk7McG2WNMdPxOv3Lxv0mUhHfMAhQUypyBI8dw0AAAB9eyJvcmlnaW4iOiJodHRwczovL3BvcnRmb2xpby5uaWNrb3QuaXM6NDQzIiwiZmVhdHVyZSI6IkZsZWRnZUJpZGRpbmdBbmRBdWN0aW9uU2VydmVyIiwiZXhwaXJ5IjoxNzI3ODI3MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/unit_red.png' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content', '@sidebase/nuxt-auth'],
  colorMode: { classSuffix: '' },
  css: ['@/assets/css/tailwind.css'],
  tailwindcss: { configPath: 'tailwind.config.js',},
  auth: {
    provider: {
        type: 'authjs'
    },
    isEnabled: true,
    origin: 'https://portfolio.nickot.is',
    basePath: '/api/auth',
},
})