export default defineNuxtConfig({
  extends: [".."],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/logo.svg" }],
    },
  },
  modules: [
    "@unocss/nuxt",
    "@nuxt/content",
    "@nuxt/devtools",
    "@nuxthq/studio",
  ],
  css: ["@unocss/reset/tailwind.css", "~/assets/css/main.css"],
  components: [{ path: "~/components", global: true }],
  content: {
    highlight: {
      theme: "github-light",
      preload: ["vue", "ts"],
    },
  },
  nitro: {
    rootDir: ".",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  unocss: {
    configFile: "~/uno.config.ts",
  },
});
