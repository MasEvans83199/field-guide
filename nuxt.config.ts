// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    ebirdApiKey: '',
    public: {
      siteTitle: '',
      supabaseUrl: '',
      supabaseAnonKey: ''
    }
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/birds', '/birds/**', '/']
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/birds/**': { prerender: true },
    '/sightings': { ssr: true }
  }
})