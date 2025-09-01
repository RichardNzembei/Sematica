// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sematicca',
      meta: [
        { name: 'description', content: 'Sematicca - Voice + Chat + Commerce AI Platform' },
      ],
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/radix-vue.js',
  ],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000', // Backend API base URL
    },
  },
  devServer: {
    port: 3001, // Avoid conflict with backend on port 3000
  },
  css: ['~/assets/css/tailwind.css'], // Ensure Tailwind CSS is included
});
