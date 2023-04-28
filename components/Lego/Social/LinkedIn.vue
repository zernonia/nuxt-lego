<script setup lang="ts">
const props = defineProps<{ text?: string }>();

const path = inject("social-url", "");
const url = computed(
  () =>
    `https://www.linkedin.com/shareArticle/?mini=true&url=${encodeURI(
      path
    )}&title=${encodeURI(props.text ?? "")}`
);
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <slot>
      <Icon name="uil:linkedin"></Icon>
    </slot>
  </NuxtLink>
</template>
