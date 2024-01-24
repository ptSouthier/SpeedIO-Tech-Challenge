// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
  ],
  quasar: {
    iconSet: 'material-symbols-outlined',
    extras: {
      animations: 'all',
    },
    plugins: [
      'Loading',
    ],
  },
  typescript: {
    typeCheck: true
  },
})
