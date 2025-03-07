import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: "vercel",
  },
  modules: ['@pinia/nuxt'],

  runtimeConfig: {
    public: {
      apiBase: 'https://dummyjson.com', 
      // Weather API
     }
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  compatibilityDate: '2025-03-01',
})