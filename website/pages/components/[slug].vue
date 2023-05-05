<script setup lang="ts">
const slug = computed(() => useRoute().params.slug.toString());
const { data } = await useAsyncData(slug.value, () =>
  queryContent(`/components/${slug.value}`).findOne()
);

const links = computed(() => data.value?.body.toc.links);
</script>

<template>
  <div class="flex">
    <SideNavBar class="sticky top-6 h-max w-64"></SideNavBar>

    <main v-if="data" class="prose mx-auto">
      <h1>{{ data.title }}</h1>
      <p class="text-lg">{{ data.description }}</p>
      <ContentRenderer :value="data" />
    </main>

    <LegoToc class="hidden lg:block text-sm p-4 w-64 h-max sticky top-6">
      <template #title>
        <div class="ml-4 mb-4 text-xl font-semibold">Quick Nav</div>
      </template>

      <LegoTocLinks class="ml-4" :links="links" v-slot="{ link }">
        <div class="block my-2">{{ link.text }}</div>
      </LegoTocLinks>
    </LegoToc>
  </div>
</template>
