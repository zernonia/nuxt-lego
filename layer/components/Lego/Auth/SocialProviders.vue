<script setup lang="ts">
import { rootKey } from "./.keys";
import type { Provider } from "./.types";

const rootProps = inject(rootKey);
const emits = defineEmits<{
  (e: "select", payload: Provider): void;
}>();
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
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
