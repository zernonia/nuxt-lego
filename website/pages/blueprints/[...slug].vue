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
    <BlueprintsContainer class="mb-6">
      <component :is="data.reference" />
    </BlueprintsContainer>

    <div class="prose lg:max-w-[54rem] mx-auto flex-shrink-0">
      <h1>
        {{ data.title }}
      </h1>
      <ContentRendererMarkdown :value="data" />
    </div>
  </div>
</template>
