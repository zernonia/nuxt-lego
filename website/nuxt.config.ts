export default defineNuxtConfig({
  extends: ['../layer', 'nuxt-seo-kit'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }],
      meta: [{ name: 'google-site-verification', content: '0fHjXCYubdueQI63delbgFoqfSf_90OQdhwJBW5NxpQ' }],
    },
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  css: ['@unocss/reset/tailwind.css', '~/assets/css/main.css'],
  components: [
    { path: '~/components', global: true },
    { path: '~/components/islands', island: true },
  ],
  content: {
    highlight: {
      theme: 'github-light',
      preload: ['vue', 'ts'],
    },
    navigation: {
      fields: ['new', 'image'],
    },
  },
  nitro: {
    rootDir: '.',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/docs'],
    },
  },
  unocss: {
    configFile: '~/uno.config.ts',
  },
  image: {
    provider: 'ipx',
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL
        || `https://${process.env.NUXT_ENV_VERCEL_URL}`
        || 'https://nuxt-lego.vercel.app',
      titleSeparator: '|',
      siteName: 'NuxtLego',
      siteDescription: 'Ready made UI components with Nuxt layer.',
      language: 'en',
      umamiHost: '',
      umamiId: '',
      umamiDomains: '',
      studioTokens: '',
    },
  },
  ogImage: {
    fonts: ['Plus+Jakarta+Sans:400', 'Plus+Jakarta+Sans:700'],
  },
})
