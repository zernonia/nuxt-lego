<script setup lang="ts">
const props = defineProps<{ text?: string }>();

const path = inject("social-url", "");
const url = computed(
  () =>
    `https://twitter.com/intent/tweet?url=${encodeURI(path)}&text=${encodeURI(
      props.text ?? ""
    )}`
);
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <slot>
      <Icon name="uil:twitter"></Icon>
    </slot>
  </NuxtLink>
</template>
