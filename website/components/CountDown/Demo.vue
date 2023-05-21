<script setup lang="ts">
const date = computed(() => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow
})
</script>

<template>
  <div class="p-8 bg-white flex flex-col items-center rounded-3xl border ">
    <h4 class="text-2xl font-semibold">
      Coming soon!
    </h4>
    <LegoCountDown v-slot="{ days, hours, minutes, seconds }" :date="date" enable-days>
      <div class="mt-6 flex items-center  space-x-4">
        <div class="w-20 h-20 p-2 bg-gray-100 rounded-xl flex flex-col items-center justify-center">
          <h5 class="text-3xl font-semibold">
            {{ days }}
          </h5>
          <p class="text-sm mt-1 text-gray-400">
            Days
          </p>
        </div>

        <div class="w-20 h-20 p-2 bg-gray-100 rounded-xl flex flex-col items-center justify-center">
          <h5 class="text-3xl font-semibold">
            {{ hours }}
          </h5>
          <p class="text-sm mt-1 text-gray-400">
            Hours
          </p>
        </div>

        <div class="w-20 h-20 p-2 bg-gray-100 rounded-xl flex flex-col items-center justify-center">
          <h5 class="text-3xl font-semibold">
            {{ minutes }}
          </h5>
          <p class="text-sm mt-1 text-gray-400">
            Minutes
          </p>
        </div>

        <div class="w-20 h-20 p-2 bg-gray-100 rounded-xl flex flex-col items-center justify-center">
          <h5 class="text-3xl font-semibold">
            {{ seconds }}
          </h5>
          <p class="text-sm mt-1 text-gray-400">
            Seconds
          </p>
        </div>
      </div>
    </LegoCountDown>
  </div>
</template>
