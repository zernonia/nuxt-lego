<script setup lang="ts">
import key from "./.keys";
const path = inject(key);

const url = computed(
  () =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
      path?.value ?? ""
    )}`
);
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <slot>
      <Icon name="uil:facebook" />
    </slot>
  </NuxtLink>
</template>
