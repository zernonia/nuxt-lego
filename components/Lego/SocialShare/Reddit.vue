<script setup lang="ts">
import key from "./.keys";
const path = inject(key);

const props = defineProps<{ text?: string }>();

const url = computed(
  () =>
    `http://www.reddit.com/submit?url=${encodeURI(
      path?.value ?? ""
    )}&title=${encodeURI(props.text ?? "")}`
);
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <slot>
      <Icon name="uil:reddit-alien-alt" />
    </slot>
  </NuxtLink>
</template>
