<script setup lang="ts">
import AppIcon from './AppIcon.vue'

const mouseX = ref(Infinity)
</script>

<template>
  <div
    class=" flex h-16 items-end gap-4 rounded-2xl  bg-white bg-opacity-20 backdrop-blur-md px-4 pb-3"
    @mousemove="mouseX = $event.pageX"
    @mouseleave="mouseX = Infinity"
  >
    <AppIcon v-for="i in 8" :key="i" :mouse-x="mouseX" />
  </div>
</template>
