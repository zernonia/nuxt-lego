export default defineNuxtConfig({
  extends: "..",
  modules: ["@unocss/nuxt", "@nuxt/content"],
  css: ["@unocss/reset/tailwind.css"],
  nitro: {
    rootDir: ".",
  },
});
