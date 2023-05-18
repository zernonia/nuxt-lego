<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to">
    <div class="border rounded-xl overflow-hidden h-full">
      <div
        class="h-48 relative flex items-center justify-center bg-grid bg-no-repeat bg-cover"
      >
        <div
          class="blur-overlay w-full h-full absolute pointer-events-none"
        />
        <slot name="image" />
      </div>

      <div class="p-4">
        <slot> text </slot>
      </div>
    </div>
  </NuxtLink>
</template>
