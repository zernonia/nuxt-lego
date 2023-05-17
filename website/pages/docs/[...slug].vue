<script setup lang="ts">
const slug = computed(() => useRoute().path);
const { data } = await useAsyncData(slug.value, () =>
  queryContent(slug.value).findOne()
);
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found!!' })
}
const [prev, next] = await queryContent()
  .only(['_path', 'title', '_dir'])
  .findSurround(slug.value)


const links = computed(() => data.value?.body.toc.links);

const image = computed(() => {
  return `/${useRoute().path}/__og_image__/og.png`;
});
useCustomHead({
  title: data.value?.title ?? "",
  description: data.value?.description ?? "",
  image: image.value,
});

defineOgImageStatic({
  component: "CustomOgImage",
  title: data.value?.title,
  description: data.value?.description ?? "",
});
</script>

<template>
  <div class="flex w-full">
    <main v-if="data" class="prose text-sm md:text-base mx-auto w-full">
      <h1>{{ data.title }}</h1>
      <p v-if="data.description" class="text-lg">
        {{ data.description }}
      </p>
      <ContentRenderer :value="data" />



      <div class="mt-20 pt-8 border-t not-prose flex justify-between">
        <div>
          <NuxtLink v-if="prev" :to="prev._path" class="flex items-center px-3 py-2.5 rounded-xl border w-max bg-white hover:bg-gray-100 transition">
            <Icon name="uil:angle-left-b" class="text-xl" />
            <div class="flex flex-col items-end px-2">
              <span class="text-gray-400 text-xs">{{ prev._dir }}</span>
              <h5>{{ prev.title }}</h5>
            </div>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink v-if="next" :to="next._path" class="flex items-center px-3 py-2.5 rounded-xl border w-max bg-white hover:bg-gray-100 transition">
            <div class="flex flex-col items-start px-2">
              <span class="text-gray-400 text-xs">{{ next._dir }}</span>
              <h5>{{ next.title }}</h5>
            </div>
            <Icon name="uil:angle-right-b" class="text-xl" />
          </NuxtLink>
        </div>
      </div>
    </main>

    <LegoToc
      class="hidden lg:block text-sm p-4 w-44 h-max sticky top-21 shrink-0"
    >
      <template #title>
        <div class="ml-4 mb-4 text-xl font-semibold">Quick Nav</div>
      </template>

      <LegoTocLinks v-slot="{ link }" class="ml-4" :links="links">
        <div class="block my-2 hover:underline">
          {{ link.text }}
        </div>
      </LegoTocLinks>
    </LegoToc>
  </div>
</template>
