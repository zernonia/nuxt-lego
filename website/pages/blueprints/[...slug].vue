<script setup lang="ts">
const slug = computed(() => useRoute().path)
const { data } = await useAsyncData(slug.value, () =>
  queryContent(slug.value).findOne(),
)
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found!!' })

const image = computed(() => {
  return `${useRoute().path}/__og_image__/og.png`
})
useCustomHead({
  title: data.value?.title ?? '',
  description: data.value?.description ?? '',
  image: image.value,
})

defineOgImageStatic({
  component: 'CustomOgImage',
  title: data.value?.title,
  description: data.value?.description ?? '',
})
</script>

<template>
  <div class="flex flex-col w-full text-base md:text-lg">
    <h1 class="text-4xl font-bold">
      {{ data.title }}
    </h1>

    <BlueprintsContainer class="my-6">
      <component :is="data.reference" />
    </BlueprintsContainer>

    <div class="flex ">
      <ContentRenderer class="prose flex-shrink-0" :value="data" />

      <div class="ml-8">
        hi
      </div>
    </div>
  </div>
</template>
