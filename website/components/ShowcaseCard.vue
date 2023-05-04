<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
  <NuxtLink :to="to">
    <div class="border rounded-xl overflow-hidden">
      <div
        class="h-48 relative flex items-center justify-center bg-grid bg-no-repeat bg-cover"
      >
        <div
          class="blur-overlay w-full h-full absolute pointer-events-none"
        ></div>
        <slot name="image"></slot>
      </div>

      <div class="p-4">
        <slot> text </slot>
      </div>
    </div>
  </NuxtLink>
</template>
