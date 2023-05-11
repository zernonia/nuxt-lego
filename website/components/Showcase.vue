<script setup lang="ts"></script>

<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <ShowcaseCard to="/docs/components/social-share">
      <template #image>
        <div class="text-blue-300 text-4xl flex space-x-2">
          <Icon name="mdi:twitter" />
          <Icon name="mdi:facebook" />
          <Icon name="mdi:linkedin" />
          <Icon name="mdi:share-variant" />
        </div>
      </template>

      <h5 class="font-semibold">Social Share</h5>
      <p class="text-sm mt-1 text-gray-400">
        Primitive component to allow easy sharing for different social media
        providers.
      </p>
    </ShowcaseCard>

    <ShowcaseCard to="/docs/components/static-tweet">
      <template #image>
        <div class="w-64 p-4 mt-12 border bg-white rounded-xl">
          <div class="flex justify-between items-center">
            <div class="flex">
              <div class="w-10 h-10 rounded-full bg-gray-100" />

              <div class="ml-2 mt-1">
                <div class="h-2 w-16 rounded-full bg-gray-100" />
                <div class="mt-1 h-2 w-12 rounded-full bg-gray-100" />
              </div>
            </div>
            <div>
              <Icon class="text-4xl text-blue-300" name="uil:twitter" />
            </div>
          </div>

          <div class="h-12 w-full" />
        </div>
      </template>

      <h5 class="font-semibold">Static Tweet</h5>
      <p class="text-sm mt-1 text-gray-400">
        Primitive component to render static tweet.
      </p>
    </ShowcaseCard>

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

    <ShowcaseCard to="/docs/components/table-of-contents">
      <template #image>
        <div class="px-4 py-6 flex flex-col space-y-2">
          <div class="h-2 w-36 rounded-full bg-gray-100" />
          <div class="ml-4 h-2 w-36 rounded-full bg-gray-100" />
          <div class="ml-4 h-2 w-36 rounded-full bg-gray-100" />
          <div class="h-2 w-36 rounded-full bg-gray-100" />
          <div class="ml-4 h-2 w-36 rounded-full bg-gray-100" />
        </div>
      </template>

      <h5 class="font-semibold">Table of Contents</h5>
      <p class="text-sm mt-1 text-gray-400">WIP</p>
    </ShowcaseCard>

    <ShowcaseCard to="/docs/components/page-progress">
      <template #image>
        <div>
          <div class="absolute top-10 right-8 font-bold text-4xl text-blue-300">
            45%
          </div>
          <div class="bg-white mt-10 w-64 h-28 border rounded-xl" />
        </div>
      </template>

      <h5 class="font-semibold">Page progress</h5>
      <p class="text-sm mt-1 text-gray-400">WIP</p>
    </ShowcaseCard>
  </div>
</template>
