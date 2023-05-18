import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@vueuse/nuxt'],
  alias: {
    lego: currentDir,
  },
})
