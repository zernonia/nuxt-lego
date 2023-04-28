<script setup lang="ts">
import key from "./.keys";

const tweet = inject(key);
const text = computed(() => tweet?.value?.text);
</script>

<template>
  <div v-html="text"></div>
</template>
