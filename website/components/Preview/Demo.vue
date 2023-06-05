<script setup lang="ts">
import { withBase } from 'ufo'
import { computed, useRuntimeConfig } from '#imports'

// props from ProseImg (https://github.com/nuxt/content/blob/main/src/runtime/components/Prose/ProseImg.vue)
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//'))
    return withBase(props.src, useRuntimeConfig().app.baseURL)

  return props.src
})
</script>

<template>
  <div>
    <LegoPreview class="transition-transform ease-in-out duration-500 outline-none">
      <LegoPreviewDialog
        class="fixed z-800 left-0 top-0 w-screen h-screen bg-white bg-opacity-50 backdrop-blur-md"
      />

      <img class="rounded-2xl" :src="refinedSrc" :alt="alt" :width="width" :height="height">
    </LegoPreview>
  </div>
</template>
