<script setup lang="ts">
const path = inject("social-url", "");

const url = computed(
  () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(path)}`
);
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <slot>
      <Icon name="uil:facebook"></Icon>
    </slot>
  </NuxtLink>
</template>
