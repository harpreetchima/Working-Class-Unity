import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Site configuration for SEO and Schema.org
  site: {
    url: 'https://workingclassunity.com',
    name: 'Working Class Unity',
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'WCU' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/i18n', '@nuxt/image', '@nuxt/fonts', '@nuxt/scripts', 'nuxt-schema-org'],

  // Schema.org configuration
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Working Class Unity',
      logo: '/logo_dark.svg',
      sameAs: [
        'https://x.com/workclassunity',
        'https://www.facebook.com/WorkClassUnity/',
      ],
    },
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'es', file: 'es.json', name: 'Español' },
      { code: 'pa', file: 'pa.json', name: 'ਪੰਜਾਬੀ' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});