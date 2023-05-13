<script setup lang="ts">
defineProps<{ title: string; description: string }>();
</script>

<template>
  <div
    :style="{ fontFamily: 'Plus Jakarta Sans' }"
    class="w-full h-full flex flex-col bg-white text-blue-400 items-center justify-center"
  >
    <div
      class="max-w-[600px] flex flex-col text-center items-center justify-center"
    >
      <h1 class="text-7xl font-bold">{{ title }}</h1>
      <p class="text-3xl">{{ description }}</p>
    </div>
    <div class="mt-20 flex items-center">
      <img src="/logo.png" height="50px" />
      <span class="text-gray-800 font-bold ml-4 text-3xl">NuxtLego</span>
    </div>
    <img class="fixed top-0 left-0 w-96 h-auto" src="/assets/img/grid.png" />
    <img class="fixed top-0 right-0 w-96 h-auto" src="/assets/img/grid.png" />
    <img
      class="fixed bottom-0 left-0 w-96 h-auto rotate-180"
      src="/assets/img/grid.png"
    />
    <img
      class="fixed bottom-0 right-0 w-96 h-auto rotate-180"
      src="/assets/img/grid.png"
    />
  </div>
</template>
