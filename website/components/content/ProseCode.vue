<script setup lang="ts">
const props = defineProps<{
  code: string;
  language?: string;
  filename?: string;
  higlights?: number[];
  meta?: string;
}>();
const { code } = toRefs(props);
const { copy, copied } = useClipboard({ source: code });
</script>

<template>
  <div class="group relative border rounded-xl bg-gray-100">
    <samp
      v-if="filename"
      class="not-prose w-max absolute top-4 right-4 opacity-70 group-hover:opacity-0 transition text-xs px-2 py-1 bg-gray-200 rounded"
    >
      {{ filename }}
    </samp>

    <button
      class="absolute bottom-4 right-4 text-lg w-10 h-10 flex items-center justify-center rounded-lg border opacity-0 group-hover:opacity-70 text-gray-500 transition bg-white"
      @click="copy()"
    >
      <Icon v-if="!copied" name="uil:clipboard"></Icon>
      <Icon v-else name="uil:check"></Icon>
    </button>
    <slot />
  </div>
</template>
