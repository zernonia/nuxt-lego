<template>
  <ShowcaseCard slug="github-star">
    <template #image>
      <div class="text-blue-300 group-hover:text-[1.25rem] group-hover:text-blue-500 transition-all ">
        <LegoGithubStar v-slot="{ stars }" repo="zernonia/nuxt-lego" class="flex items-center space-x-1 px-3 py-2 border bg-white hover:bg-gray-50 transition rounded-lg flex justify-center">
          <Icon name="mdi:star" class="op75 " />
          {{ stars }}
        </LegoGithubStar>
      </div>
    </template>
  </ShowcaseCard>
</template>
