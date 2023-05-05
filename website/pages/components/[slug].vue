<script setup lang="ts">
const slug = computed(() => useRoute().params.slug.toString());
const { data } = await useAsyncData(slug.value, () =>
  queryContent(`/components/${slug.value}`).findOne()
);

const links = computed(() => data.value?.body.toc.links);
</script>

<template>
  <div class="flex">
    <SideNavBar
      class="hidden md:block sticky top-21 py-4 h-max w-44 shrink-0"
    ></SideNavBar>

    <main v-if="data" class="prose mx-auto w-full">
      <h1>{{ data.title }}</h1>
      <p v-if="data.description" class="text-lg">{{ data.description }}</p>
      <ContentRenderer :value="data" />
    </main>

    <LegoToc
      class="hidden lg:block text-sm p-4 w-44 h-max sticky top-21 shrink-0"
    >
      <template #title>
        <div class="ml-4 mb-4 text-xl font-semibold">Quick Nav</div>
      </template>

      <LegoTocLinks class="ml-4" :links="links" v-slot="{ link }">
        <div class="block my-2">{{ link.text }}</div>
      </LegoTocLinks>
    </LegoToc>
  </div>
</template>
