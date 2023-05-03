<script setup lang="ts">
import key from "./.keys";

const bookmark = inject(key);
const description = computed(() => bookmark?.value?.description);
</script>

<template>
  <div>
    <slot :description="description">
      {{ description }}
    </slot>
  </div>
</template>
