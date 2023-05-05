<script setup lang="ts">
const { data } = await useAsyncData("components", () =>
  queryContent("/components").only(["title", "_path"]).find()
);
</script>

<template>
  <div>
    <h4 class="font-semibold text-lg">Components</h4>

    <div class="mt-4 text-sm flex flex-col space-y-1">
      <NuxtLink v-for="item in data" :to="item._path">{{
        item.title
      }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-blue-400;
}
</style>
