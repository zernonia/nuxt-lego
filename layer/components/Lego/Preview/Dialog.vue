<script setup lang="ts">
import { rootKey } from './.keys'

defineProps<{
  name?: string
}>()

const { isPreviewActive } = inject(rootKey)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isPreviewActive" v-bind="$attrs" role="dialog" style="cursor: zoom-out;" aira-modal="true" @click="isPreviewActive = false" />
  </Teleport>
</template>
