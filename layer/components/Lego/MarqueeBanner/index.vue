<script setup lang="ts">
import { provide, ref } from 'vue'
import { rootKey } from './.keys'

const props = withDefaults(defineProps<{
  speed: number
  hoveredSpeed: number
}>(), {
  speed: 1,
  hoveredSpeed: 0.5,
})

const el = ref<HTMLDivElement>()
const { width } = useElementBounding(el)

provide(rootKey, {
  width,
  ...props,
})
</script>

<template>
  <div
    ref="el"
    class="marquee-container"
  >
    <div v-if="width">
      <slot />
    </div>
  </div>
</template>

<style>
.marquee-container {
  overflow: hidden;

}
</style>
