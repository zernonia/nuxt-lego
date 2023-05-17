<script setup lang="ts">
const props = defineProps<{
  code: string;
  language?: string;
  filename?: string;
  higlights?: number[];
  meta?: string;
}>();
const { code } = toRefs(props);
const { copy, copied } = useClipboard({ source: code.value });
</script>

<template>
  <div class="group relative border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-100 dark:bg-gray-800">
    <div v-if="filename" class="mr-4 mt-4 md:mr-0 md:mt-0 flex justify-end">
      <samp
        class="not-prose w-max md:absolute top-4 right-4 opacity-70 md:group-hover:opacity-0 transition text-xs px-2 py-1 bg-gray-200 dark:bg-gray-900 rounded"
      >
        {{ filename }}
      </samp>
    </div>

    <button
      class="absolute bottom-4 right-4 text-lg w-10 h-10 flex items-center justify-center rounded-lg border opacity-0 group-hover:opacity-70 text-gray-500 transition bg-white"
      @click="copy()"
    >
      <Icon v-if="!copied" name="uil:clipboard" />
      <Icon v-else name="uil:check" />
    </button>
    <slot />
  </div>
</template>
