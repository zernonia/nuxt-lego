<script setup lang="ts">
const { data } = await useAsyncData('nav-blueprints', () => fetchContentNavigation(queryContent('blueprints')))

const navigation = computed(() => data.value?.[0].children)
</script>

<template>
  <div class="md:mt-8">
    <h1 class="text-3xl md:text-4xl font-bold">
      Blueprints
    </h1>
    <h2 class="mt-4 text-lg md:text-xl text-gray-400">
      Code snippets for modern user interface techniques.
    </h2>

    <ul class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <li v-for="item in navigation" :key="item._id" class="group">
        <NuxtLink :to="item._path">
          <div class="border rounded-2xl bg-gradient-radial from-blue-400 to-blue-500 border-blue-400 ">
            <img :src="`assets/img/${item.image}`">
          </div>

          <h5 class="mt-2 text-gray-400 text-center group-hover:underline">
            {{ item.title }}
          </h5>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
