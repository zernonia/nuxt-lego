<script setup lang="ts">
import { rootKey } from './.keys'
import type { Provider } from './.types'

const emits = defineEmits<{
  (e: 'select', payload: Provider): void
}>()
const rootProps = inject(rootKey)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <LegoAuthSocialProvider
    v-for="provider in rootProps?.providers"
    v-bind="$attrs"
    :key="provider"
    :provider="provider"
    @select="emits('select', $event)"
  />
</template>
