<script setup lang="ts">
// TODO: move these into Showcase Card
const componentSlug = 'preview'

const { data } = await useAsyncData(`showcase-${componentSlug}`, () => queryContent(`/docs/components/${componentSlug}`).only(['title', 'description', '_path', 'new']).findOne())
</script>

<template>
  <ShowcaseCard :to="data._path">
    <template #image>
      <div>
        <div class="relative bg-white transition-all w-32 h-20 group-hover:scale-120 flex items-center justify-center text-gray-200 text-3xl border rounded-xl">
          <Icon name="uil:image" />

          <div class="absolute top-4 -right-4 group-hover:right-0 transition-all font-bold text-4xl text-blue-300">
            <Icon name="akar-icons:zoom-in" />
          </div>
        </div>
      </div>
    </template>

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
  </ShowcaseCard>
</template>
