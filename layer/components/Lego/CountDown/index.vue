<script setup lang="ts">
const props = defineProps<{
  date: Date
  enableDays?: boolean
}>()

const timestamp = useTimestamp()

const dateInMilliseconds = computed(() => props.date?.getTime())
const differenceInSeconds = computed(() => (dateInMilliseconds.value - timestamp.value) / 1000) // in seconds

const days = computed(() => props.enableDays ? Math.floor(differenceInSeconds.value / 86400) : undefined)
const hours = computed(() => props.enableDays ? Math.floor((differenceInSeconds.value % 86400) / 3600) : Math.floor(differenceInSeconds.value / 3600))
const minutes = computed(() => Math.floor((differenceInSeconds.value % 3600) / 60))
const seconds = computed(() => Math.floor((differenceInSeconds.value % 60)))
</script>

<template>
  <div v-if="date">
    <slot :days="days" :hours="hours" :minutes="minutes" :seconds="seconds">
      {{ days }} days
      {{ hours }} hours
      {{ minutes }} minutes
      {{ seconds }} seconds
    </slot>
  </div>
</template>
