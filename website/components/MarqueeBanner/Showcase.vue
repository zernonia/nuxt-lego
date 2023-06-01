<script setup lang="ts">
</script>

<template>
  <ShowcaseCard to="/docs/components/marquee-banner">
    <template #image>
      <div class="overflow-hidden absolute fade-edge w-full">
        <div class="flex">
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
        </div>
        <div class="flex mt-4 -translate-x-16">
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
        </div>
      </div>
    </template>

    <h5 class="font-semibold">
      Marquee Banner
    </h5>
    <p class="text-sm mt-1 text-gray-400">
      Simple and easy marquee effect.
    </p>
  </ShowcaseCard>
</template>
