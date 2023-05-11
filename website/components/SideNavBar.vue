<script setup lang="ts">
const { data } = await useAsyncData("nav", () =>
  queryContent("/").only(["title", "_path", "_dir"]).find()
);

const tree = computed(() => {
  return data.value?.reduce((result, currentObject) => {
    const key = currentObject["_dir"];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(currentObject);
    return result;
  }, {});
});
</script>

<template>
  <div>
    <div v-for="(child, key) of tree" :key="key" class="mb-6">
      <h4 class="font-semibold text-lg capitalize">
        {{ key }}
      </h4>

      <div class="mt-2 text-sm flex flex-col space-y-1">
        <NuxtLink
          v-for="item in child"
          :key="item.title"
          class="hover:underline"
          :to="item._path"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-blue-400;
}
</style>
