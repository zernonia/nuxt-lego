<template>
  <LegoGithubStar v-slot="{ stars }" repo="zernonia/nuxt-lego" class="group border bg-white hover:bg-gray-100 transition rounded-lg text-xl flex justify-center">
    <div class="flex items-center bg-gray-100 group-hover:bg-gray-200 transition rounded-l px-4 py-3 space-x-1">
      <Icon name="uil:star" class="text-xl group-hover:op75 " />
      <div>Star</div>
    </div>
    <div class="px-4 py-3">
      {{ stars }}
    </div>
  </LegoGithubStar>
</template>
