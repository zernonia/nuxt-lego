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

    <main class="prose w-full lg:max-w-54rem mx-auto">
      <h1>
        {{ data.title }}
      </h1>
      <ContentRendererMarkdown :value="data" />

      <NuxtLink to="/blueprints" class="mt-12 inline-flex items-center underline underline-offset-4 underline-gray-100 hover:underline-blue-400 transition-all duration-1000">
        <Icon name="uil:angle-right" class="text-xl" />
        <span>cd ..</span>
      </NuxtLink>
    </main>
  </div>
</template>
