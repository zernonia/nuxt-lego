<script setup lang="ts">
defineOgImageStatic({
  title: "Welcome to my site!",
  background: "lightblue",
});
</script>

<template>
  <div class="text-gray-700 max-w-screen-xl mx-auto">
    <SeoKit />
    <NuxtLoadingIndicator color="rgb(96,165,250)" />
    <NavBar class="sticky top-0 bg-white bg-opacity-50 backdrop-blur-md" />

    <div class="px-4 md:px-6 py-4">
      <NuxtPage />
    </div>
    <NavFooter />
  </div>
</template>
