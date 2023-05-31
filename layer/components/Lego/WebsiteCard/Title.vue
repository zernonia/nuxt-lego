<script setup lang="ts">
import key from './.keys'

const bookmark = inject(key)
const title = computed(() => bookmark?.value?.title)
</script>

<template>
  <div>
    <slot :title="title">
      {{ title }}
    </slot>
  </div>
</template>
