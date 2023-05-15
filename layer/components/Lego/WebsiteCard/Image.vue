<script setup lang="ts">
import key from "./.keys";

const bookmark = inject(key);
const image = computed(() => bookmark?.value?.image);
</script>

<template>
  <img v-if="image" :src="image">
</template>
