<script setup lang="ts">
const isPreview = ref(true);
</script>

<template>
  <div>
    <UButton
      :active="isPreview"
      label="Preview"
      color="gray"
      :variant="isPreview ? 'solid' : 'ghost'"
      @click="isPreview = true"
    />
    <UButton
      class="ml-2"
      label="Code"
      color="gray"
      :variant="!isPreview ? 'solid' : 'ghost'"
      @click="isPreview = false"
    />

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
