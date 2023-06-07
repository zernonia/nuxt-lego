<script setup lang="ts"></script>

<template>
  <ShowcaseCard slug="static-tweet">
    <template #image>
      <div class="overflow-hidden h-full w-full">
        <div class="w-64 p-4 mt-12 mx-auto border bg-white rounded-xl">
          <div class="flex justify-between items-center">
            <div class="flex">
              <div class="w-10 h-10 rounded-full bg-gray-100" />

              <div class="ml-2 mt-1">
                <div class="h-2 w-16 rounded-full bg-gray-100" />
                <div class="mt-1 h-2 w-12 rounded-full bg-gray-100" />
              </div>
            </div>
            <div>
              <Icon class="text-4xl group-hover:text-6xl group-hover:-rotate-5 transition-all text-blue-300" name="uil:twitter" />
            </div>
          </div>

          <div class="h-20 w-full" />
        </div>
      </div>
    </template>
  </ShowcaseCard>
</template>
