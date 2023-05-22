<script setup lang="ts">
</script>

<template>
  <LegoMarqueeBanner :speed="0.5" :hovered-speed="0.25" class="w-96 md:w-120 text-xl">
    <LegoMarqueeBannerLeft class="my-2">
      <div class="whitespace-nowrap px-5 border hover:border-gray-400 transition mr-4 py-2 rounded-full bg-gray-50">
        Vue
      </div>
      <div class="whitespace-nowrap px-5 border hover:border-gray-400 transition mr-4 py-2 rounded-full bg-gray-50">
        React
      </div>
      <div class="whitespace-nowrap px-5 border hover:border-gray-400 transition mr-4 py-2 rounded-full bg-gray-50">
        Angular
      </div>
    </LegoMarqueeBannerLeft>
    <LegoMarqueeBannerRight class="my-2">
      <div class="whitespace-nowrap px-5 border hover:border-gray-400 transition mr-4 py-2 rounded-full bg-gray-100">
        Nuxt
      </div>
      <div class="whitespace-nowrap px-5 border hover:border-gray-400 transition mr-4 py-2 rounded-full bg-gray-100">
        Next
      </div>
      <div class="whitespace-nowrap px-5 border hover:border-gray-400 transition mr-4 py-2 rounded-full bg-gray-100">
        Analog
      </div>
    </LegoMarqueeBannerRight>
  </LegoMarqueeBanner>
</template>

<style scoped>
.marquee-container {
  --mask: linear-gradient(to right,
      rgba(0,0,0, 0) 0, rgba(0,0,0, 0) 5%,
      rgba(0,0,0, 1) 20%, rgba(0,0,0, 1) 80%,
      rgba(0,0,0, 0) 95%, rgba(0,0,0, 0) 0
  ) 100% 50% / 100% 100%;

  -webkit-mask: var(--mask);
  mask: var(--mask);
}
</style>
