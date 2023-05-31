<script setup lang="ts">
const mouseX = ref(Infinity)
</script>

<template>
  <div class=" flex h-16 items-end gap-4 rounded-2xl bg-blue-400 px-4 pb-3" @mousemove="mouseX = $event.pageX" @mouseleave="mouseX = Infinity">
    <BlueprintsMagnifiedDockAppIcon v-for="i in 8" :key="i" :mouse-x="mouseX" />
  </div>
</template>
