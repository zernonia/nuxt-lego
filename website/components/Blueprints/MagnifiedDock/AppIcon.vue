<script setup lang="ts">
import { useMotionProperties, useMotionTransitions } from '@vueuse/motion'

const props = defineProps<{
  mouseX: number
}>()
const { mouseX } = toRefs(props)

const target = ref<HTMLElement>()
const distance = computed(() => {
  const bounds = target.value?.getBoundingClientRect() ?? { x: 0, width: 0 }

  const val = Math.abs(mouseX.value - bounds.x - bounds.width / 2)
  return val > 150 ? 150 : val
})

const { motionProperties } = useMotionProperties(target, { width: 40 })
const { push } = useMotionTransitions()

const widthSync = useProjection(distance, [0, 150], [100, 40])

watch(widthSync, () => {
  push('width', widthSync.value, motionProperties, { type: 'spring', mass: 0.1, stiffness: 150, damping: 12 })
})
</script>

<template>
  <div ref="target" class="aspect-square w-10 rounded-full bg-gray-100" />
</template>
