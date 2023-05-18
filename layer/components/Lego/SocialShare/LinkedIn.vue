<script setup lang="ts">
import key from './.keys'

const props = defineProps<{ text?: string }>()

const path = inject(key)

const url = computed(
  () =>
    `https://www.linkedin.com/shareArticle/?mini=true&url=${encodeURI(
      path?.value ?? '',
    )}&title=${encodeURI(props.text ?? '')}`,
)
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <slot>
      <Icon name="uil:linkedin" />
    </slot>
  </NuxtLink>
</template>
