<script setup lang="ts">
import { TransitionPresets, useTransition } from '@vueuse/core'

const progress = ref(10)
const output = useTransition(progress, {
  duration: 300,
  transition: TransitionPresets.easeInOutCubic,
})
</script>

<template>
  <ShowcaseCard slug="page-progress" @mouseover="progress = 45" @mouseleave="progress = 10">
    <template #image>
      <div class="overflow-hidden h-full">
        <div class="absolute top-10 right-8 font-bold text-4xl text-blue-300">
          {{ output.toFixed(0) }}%
        </div>
        <div class="bg-white mt-10 group-hover:-mt-10 transition-margin w-64 h-60 border rounded-xl" />
      </div>
    </template>
  </ShowcaseCard>
</template>
