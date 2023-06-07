<script setup lang="ts">
</script>

<template>
  <ShowcaseCard slug="marquee-banner">
    <template #image>
      <div class="overflow-hidden absolute fade-edge w-full">
        <div class="flex group-hover:translate-x-10 transition-transform">
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
        </div>
        <div class="flex mt-4 -translate-x-16 group-hover:-translate-x-32 transition-transform">
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
          <div class="flex-shrink-0 bg-gray-50 mr-2 w-32 h-10 border hover:bg-white hover:border-blue-400 transition rounded-full" />
        </div>
      </div>
    </template>
  </ShowcaseCard>
</template>
