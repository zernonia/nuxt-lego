<script setup lang="ts"></script>

<template>
  <div class="max-w-screen-xl mx-auto text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900">
    <SeoKit />
    <NuxtLoadingIndicator color="rgb(96,165,250)" />
    <NavBar class="sticky top-0 dark:bg-stone-900/50 bg-white/50 backdrop-blur-md" />

    <div class="px-4 md:px-6 py-4">
      <NuxtPage />
    </div>
    <NavFooter />
  </div>
</template>
