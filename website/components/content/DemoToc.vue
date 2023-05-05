<script setup lang="ts">
const props = defineProps<{ contentPath: string }>();

const { data } = await useAsyncData(props.contentPath, () => {
  return queryContent(props.contentPath).findOne();
});

const links = computed(() => data.value?.body.toc.links);
</script>

<template>
  <Demo>
    <LegoToc class="bg-white border text-sm p-4 rounded-xl">
      <template #title>
        <div class="mx-4 mb-4 text-lg font-semibold">Navigation</div>
      </template>

      <LegoTocLinks class="ml-4" :links="links" v-slot="{ link }">
        <div class="block my-2 hover:underline">{{ link.text }}</div>
      </LegoTocLinks>
    </LegoToc>
  </Demo>
</template>
