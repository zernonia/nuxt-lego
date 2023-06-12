<script setup lang="ts">
const items = ['Vue', 'React', 'Angular']
</script>

<template>
  <LegoMarqueeBanner :speed="0.5" :hovered-speed="0.25" class="w-96 md:w-144 text-xl">
    <LegoMarqueeBannerLeft class="my-2">
      <div v-for="item in items" :key="item" class="whitespace-nowrap px-5 border hover:border-gray-400 transition mr-4 py-2 rounded-full bg-gray-50">
        {{ item }}
      </div>
    </LegoMarqueeBannerLeft>
    <LegoMarqueeBannerRight class="my-2">
      <div v-for="item in items" :key="item" class="whitespace-nowrap px-5 border hover:border-gray-400 transition mr-4 py-2 rounded-full bg-gray-50">
        {{ item }}
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
