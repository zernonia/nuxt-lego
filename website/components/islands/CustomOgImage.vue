<script setup lang="ts">
defineProps<{ title: string; description: string }>();
</script>

<template>
  <div
    :style="{ fontFamily: 'Plus Jakarta Sans' }"
    class="relative w-full h-full flex flex-col bg-white text-blue-400 items-center justify-center"
  >
    <div
      class="mt-26 max-w-[600px] flex flex-col text-center items-center justify-center"
    >
      <h1 class="text-7xl font-bold">{{ title }}</h1>
      <p class="text-3xl">{{ description }}</p>
    </div>
    <div class="mt-28 flex flex-row items-center">
      <img src="/logo.png" height="50px" />
      <p class="text-gray-800 font-bold ml-4 text-3xl">NuxtLego</p>
    </div>
    <img class="absolute top-0 left-0 w-96" height="200px" src="/grid.png" />
    <img class="absolute top-0 right-0 w-96" src="/grid.png" />
    <img
      class="absolute bottom-0 left-0 w-96"
      style="transform: rotate(180deg)"
      src="/grid.png"
    />
    <img
      class="absolute bottom-0 right-0 w-96"
      style="transform: rotate(180deg)"
      src="/grid.png"
    />
  </div>
</template>
