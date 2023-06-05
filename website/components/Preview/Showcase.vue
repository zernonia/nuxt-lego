<script setup lang="ts">
</script>

<template>
  <ShowcaseCard slug="preview">
    <template #image>
      <div>
        <div class="relative bg-white transition-all w-32 h-20 group-hover:scale-120 flex items-center justify-center text-gray-200 text-3xl border rounded-xl">
          <Icon name="uil:image" />

          <div class="absolute top-4 -right-4 group-hover:right-0 transition-all font-bold text-4xl text-blue-300">
            <Icon name="akar-icons:zoom-in" />
          </div>
        </div>
      </div>
    </template>
  </ShowcaseCard>
</template>
