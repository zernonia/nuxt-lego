<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <input type="submit" style="cursor: pointer" :value="label ?? 'Sign In'">
</template>
