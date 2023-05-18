<script setup lang="ts">
import key from './.keys'

const bookmark = inject(key)
const url = computed(() => bookmark?.value?.url)
</script>

<template>
  <div>
    <slot :url="url">
      {{ url }}
    </slot>
  </div>
</template>
