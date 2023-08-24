// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // buildModules: ["@nuxtjs/pwa"],
  app: {
    head: {
      meta: [
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      ],
      link: [],
      script: [],
      style: [],
      noscript: [],
    },
  },
  modules: [
    "@pinia/nuxt",
    '@vite-pwa/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  colorMode: {
    classSuffix: '',
  },
  pinia: {
    autoImports: [
      "defineStore", 
      "acceptHMRUpdate",
      ['defineStore', 'definePiniaStore'],
    ],
  },
  imports: { dirs: ["stores"] },
  ssr: true,
  image: {
    dir: 'assets/img',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },
  pwa: {
    manifest: {
      name: 'Nuxt 3 PWA',
      short_name: 'Nuxt 3 PWA',
      description: 'Testando Nuxt 3 PWA',
      lang: 'pt-BR',
      display: 'standalone',
      theme_color: '#000000',
      icons: [
        {
          src: 'icons/icone_64x64.png',
          sizes: '64x64',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: 'icons/icone_120x120.png',
          sizes: '120x120',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: 'icons/icone_144x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: 'icons/icone_152x152.png',
          sizes: '152x152',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: 'icons/icone_192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: 'icons/icone_384x384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: 'icons/icone_512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})
