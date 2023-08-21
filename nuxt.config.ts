// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt',
  ],
  pwa: {
    manifest: {
      name: 'Nuxt 3 PWA',
      short_name: 'Nuxt 3 PWA',
      description: 'Testando Nuxt 3 PWA',
      lang: 'pt-BR',
      icons: [
        {
          src: 'icons/icone_64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'icons/icone_120x120.png',
          sizes: '120x120',
          type: 'image/png',
        },
        {
          src: 'icons/icone_144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/icone_152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: 'icons/icone_192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/icone_384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: 'icons/icone_512x512.png',
          sizes: '512x512',
          type: 'image/png',
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
