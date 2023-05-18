<script setup lang="ts">
defineProps<{
  error: { message: string }
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="w-full">
    <div class="my-32 flex flex-col items-center justify-center ">
      <Icon name="mdi-map-marker-question-outline" class="text-4xl text-gray-300 mr-2" />
      <h1 class="inline-flex text-5xl font-bold my-8">
        {{ error.message }}
      </h1>

      <button class=" px-6 py-3 font-semibold rounded-lg border" @click="handleError">
        Back to Home
      </button>
    </div>
  </div>
</template>
