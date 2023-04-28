<script setup lang="ts">
const { data } = await useAsyncData("toc-example", () => {
  return queryContent("/toc-example").findOne();
});

const links = computed(() => data.value?.body.toc.links);
</script>

<template>
  <LegoToc class="p-4 rounded-lg border w-max">
    <LegoTocLinks :links="links" v-slot="{ link }">
      {{ link.text }}
    </LegoTocLinks>
  </LegoToc>
</template>
