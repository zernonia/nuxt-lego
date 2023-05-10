<script setup lang="ts">
import key from "./.keys";

const path = inject(key);

const { copy } = useClipboard({ source: path });
</script>

<template>
  <button @click="copy()">
    <slot>
      <Icon name="uil:share-alt" />
    </slot>
  </button>
</template>
