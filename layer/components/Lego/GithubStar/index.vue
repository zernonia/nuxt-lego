<script lang="ts" setup>
import { withBase, withoutBase } from 'ufo'
import { useFetch } from '#imports'

const props = defineProps<{
  repo: string
  to?: string
}>()

const repo = computed(() => {
  // support users providing full github url
  return withoutBase(props.repo, 'https://github.com/')
})
const link = computed(() => {
  return props.to || withBase(repo.value, 'https://github.com')
})
// pull the stars from the server
const { data: stars } = await useFetch('/api/get-github-stars', {
  query: {
    repo,
  },
})
</script>

<template>
  <NuxtLink :to="link" target="_blank" :aria-label="`Star ${repo} on GitHub`">
    <slot :stars="stars">
      <div>{{ stars }}</div>
    </slot>
  </NuxtLink>
</template>
