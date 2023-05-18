<script setup lang="ts">
const isPreview = ref(true)
</script>

<template>
  <div>
    <button
      class="px-5 py-2.5 text-sm hover:bg-gray-100 opacity-50 hover:opacity-100 transition rounded-lg mr-2"
      :class="{ 'bg-gray-100 border !opacity-100': isPreview }"
      :active="isPreview"
      @click="isPreview = true"
    >
      Preview
    </button>
    <button
      class="px-5 py-2.5 text-sm hover:bg-gray-100 opacity-50 hover:opacity-100 transition rounded-lg"
      :class="{ 'bg-gray-100 border !opacity-100': !isPreview }"
      @click="isPreview = false"
    >
      Code
    </button>

    <div>
      <Demo v-show="isPreview">
        <slot name="preview" />
      </Demo>

      <div v-show="!isPreview" class="mt-4">
        <slot name="code" />
      </div>
    </div>
  </div>
</template>
