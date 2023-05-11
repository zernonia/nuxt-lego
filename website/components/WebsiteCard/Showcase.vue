<script setup lang="ts"></script>

<template>
  <ShowcaseCard to="/docs/components/website-card">
    <template #image>
      <div
        class="mt-4 h-22 flex items-center border rounded-xl overflow-hidden"
      >
        <div class="w-20 h-full bg-gray-100" />

        <div class="px-3 bg-white h-full flex flex-col justify-center">
          <p class="text-xs font-semibold text-gray-300">Title</p>
          <p class="text-xs my-1 text-gray-300">
            Website's metadata description
          </p>
          <div class="mt-1 h-2 w-16 rounded-full bg-gray-100" />
        </div>
      </div>
    </template>

    <h5 class="font-semibold">Website Card</h5>
    <p class="text-sm mt-1 text-gray-400">
      Render website card similar to Notion Bookmark.
    </p>
  </ShowcaseCard>
</template>
