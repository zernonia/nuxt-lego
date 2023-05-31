<script setup lang="ts">
import key from './.keys'

const props = defineProps<{ text?: string }>()

const path = inject(key)

const url = computed(
  () =>
    `http://www.reddit.com/submit?url=${encodeURI(
      path?.value ?? '',
    )}&title=${encodeURI(props.text ?? '')}`,
)
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <slot>
      <Icon name="mdi:reddit" />
    </slot>
  </NuxtLink>
</template>
