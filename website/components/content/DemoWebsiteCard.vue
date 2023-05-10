<script setup lang="ts">
defineProps<{ url: string }>();
</script>

<template>
  <Demo>
    <LegoWebsiteCard
      v-slot="{ url, valid }"
      class="border rounded-xl overflow-hidden max-w-[550px]"
      :url="url"
    >
      <NuxtLink
        v-if="valid"
        :to="url"
        target="_blank"
        class="flex bg-white hover:bg-gray-50 transition"
      >
        <div class="p-4">
          <LegoWebsiteCardTitle class="font-medium" />
          <LegoWebsiteCardDescription class="text-xs text-gray-500 mt-2" />
          <LegoWebsiteCardUrl class="mt-2 text-xs md:text-sm text-gray-500" />
        </div>

        <LegoWebsiteCardImage class="w-28 md:w-52 border-l object-cover" />
      </NuxtLink>

      <div v-else class="p-6 text-sm text-gray-500 text-center">
        <span>Something wrong</span>

        <Icon class="mb-1 ml-2" name="uil:info-circle" />
      </div>
    </LegoWebsiteCard>
  </Demo>
</template>
