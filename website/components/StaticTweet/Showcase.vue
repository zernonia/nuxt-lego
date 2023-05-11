<script setup lang="ts"></script>

<template>
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
</template>
