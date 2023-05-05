export default defineNuxtConfig({
  extends: [".."],
  modules: ["@unocss/nuxt", "@nuxt/content"],
  css: ["@unocss/reset/tailwind.css", "~/assets/css/main.css"],
  content: {
    highlight: {
      theme: "github-light",
      preload: ["vue", "ts"],
    },
  },
  nitro: {
    rootDir: ".",
    routeRules: {
      "/components/**": { static: true },
    },
  },
  unocss: {
    configFile: "~/uno.config.ts",
  },
});
