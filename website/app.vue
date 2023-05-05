<script setup lang="ts"></script>

<template>
  <div class="text-gray-700 max-w-screen-xl mx-auto">
    <NavBar
      class="sticky top-0 bg-white bg-opacity-50 backdrop-blur-md"
    ></NavBar>

    <div class="px-6 py-4">
      <NuxtPage></NuxtPage>
    </div>
    <NavFooter></NavFooter>
  </div>
</template>
