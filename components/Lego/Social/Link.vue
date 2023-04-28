<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

const path = inject("social-url", "");

const { copy } = useClipboard({ source: path });
</script>

<template>
  <button @click="copy()">
    <slot>
      <Icon name="uil:share-alt"></Icon>
    </slot>
  </button>
</template>
