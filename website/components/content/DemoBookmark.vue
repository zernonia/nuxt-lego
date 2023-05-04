<script setup lang="ts">
defineProps<{ url: string }>();
</script>

<template>
  <LegoBookmark
    class="mt-4 border rounded-xl overflow-hidden max-w-[550px]"
    :url="url"
    v-slot="{ url, valid }"
  >
    <NuxtLink
      v-if="valid"
      :to="url"
      target="_blank"
      class="flex bg-white hover:bg-gray-50 transition"
    >
      <div class="p-4">
        <LegoBookmarkTitle class="font-medium"></LegoBookmarkTitle>
        <LegoBookmarkDescription class="text-xs text-gray-500 mt-2">
        </LegoBookmarkDescription>
        <LegoBookmarkUrl class="mt-2 text-sm text-gray-500"></LegoBookmarkUrl>
      </div>

      <LegoBookmarkImage class="w-52 object-cover"></LegoBookmarkImage>
    </NuxtLink>

    <div v-else class="p-6 text-sm text-gray-500 text-center">
      <span>Something wrong</span>

      <Icon class="mb-1 ml-2" name="uil:info-circle"></Icon>
    </div>
  </LegoBookmark>
</template>
