<script setup lang="ts">
import key from "./.keys";

const props = defineProps<{ text?: string }>();

const path = inject(key);
const url = computed(
  () =>
    `https://twitter.com/intent/tweet?url=${encodeURI(
      path?.value ?? ""
    )}&text=${encodeURI(props.text ?? "")}`
);
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <slot>
      <Icon name="uil:twitter" />
    </slot>
  </NuxtLink>
</template>
