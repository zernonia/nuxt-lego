<script setup lang="ts">
import CustomButton from './CustomButton.vue'

function handleSelectProvider(provider: string) {
  // return the selected provider
}
</script>

<template>
  <LegoAuth
    class="max-w-96 w-full bg-white border rounded-2xl px-8 py-10 shadow-sm"
    :hide-provider-label="true"
    :providers="['twitter', 'google', 'facebook']"
  >
    <LegoAuthHeader>
      <div class="font-medium text-xl text-gray-300">
        Custom Button <br> for Social Providers
      </div>
    </LegoAuthHeader>

    <div class="flex space-x-2 w-full mt-8">
      <LegoAuthSocialProviders
        :is="CustomButton"
        class="w-full px-4 py-3 border bg-white hover:bg-gray-50 transition rounded-lg text-xl flex justify-center"
        @select="handleSelectProvider"
      />
    </div>
  </LegoAuth>
</template>
