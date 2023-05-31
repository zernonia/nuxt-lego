export default defineNuxtConfig({
  extends: ['../layer', 'nuxt-seo-kit'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }],
    },
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/devtools',
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
      fields: ['new'],
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
    },
  },
  ogImage: {
    fonts: ['Plus+Jakarta+Sans:400', 'Plus+Jakarta+Sans:700'],
  },
})
