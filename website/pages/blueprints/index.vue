<script setup lang="ts">
const { data } = await useAsyncData('nav', () => fetchContentNavigation(queryContent('blueprints')))

const navigation = computed(() => data.value?.[0].children)
</script>

<template>
  <div>
    Blueprint

    <ul class="mt-12">
      <li v-for="item in navigation" :key="item._id">
        <NuxtLink :to="item._path">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
