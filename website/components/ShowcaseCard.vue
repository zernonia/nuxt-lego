<script setup lang="ts">
const props = defineProps<{
  slug: string
}>()
const { slug } = toRefs(props)

const { data } = await useAsyncData(`showcase-${slug.value}`, () => queryContent(`/docs/components/${slug.value}`).only(['title', 'description', '_path', 'new']).findOne())
</script>

<template>
  <NuxtLink :to="data._path">
    <div class="group relative border hover:border-blue-400 transition rounded-xl overflow-hidden h-full">
      <div
        class="h-48 relative flex items-center justify-center bg-grid bg-no-repeat bg-cover"
      >
        <div
          class="blur-overlay w-full h-full absolute pointer-events-none"
        />
        <slot name="image" />
      </div>

      <div class="p-4">
        <h5 class="font-semibold">
          {{ data.title }}
        </h5>
        <p class="text-sm mt-1 text-gray-400">
          {{ data.description }}
        </p>

        <span
          v-if="data.new"
          class="absolute top-4 right-4 text-xs px-2 flex items-center rounded-full bg-blue-50 text-blue-400"
        >
          New
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
