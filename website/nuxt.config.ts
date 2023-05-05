export default defineNuxtConfig({
  extends: "..",
  modules: ["@unocss/nuxt", "@nuxt/content"],
  css: ["@unocss/reset/tailwind.css", "~/assets/css/main.css"],
  content: {
    highlight: {
      theme: "github-light",
      preload: ["html", "typescript"],
    },
  },
  routeRules: {
    "/components/**": { prerender: true },
  },
  nitro: {
    rootDir: ".",
  },
});
