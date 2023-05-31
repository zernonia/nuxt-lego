<script setup lang="ts"></script>

<template>
  <div class="my-10 md:my-20">
    <h1 class="text-4xl md:text-6xl font-semibold">
      Ready made <br>
      UI components <br>
      with Nuxt layer.
    </h1>
    <h2 class="mt-4 text-lg md:text-xl text-gray-400">
      Unstyled components for building your<br>
      Nuxt content quick & beautiful.
    </h2>

    <div class=" mt-12 flex items-center space-x-4">
      <NuxtLink
        to="/docs/overview/getting-started"
        class="block w-max px-6 py-3 font-semibold bg-blue-300 hover:bg-blue-400 transition text-white rounded-lg border"
      >
        Install NuxtLego
      </NuxtLink>

      <NuxtLink
        to="/blueprints"
        class="block w-max px-6 py-3 bg-white hover:bg-gray-100 transition text-gray-600 font-semibold rounded-lg border"
      >
        Blueprint
      </NuxtLink>
    </div>
  </div>
</template>
