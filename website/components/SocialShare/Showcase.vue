<script setup lang="ts"></script>

<template>
  <ShowcaseCard to="/docs/components/social-share">
    <template #image>
      <div class="text-blue-300 text-4xl flex space-x-2">
        <Icon name="mdi:twitter" />
        <Icon name="mdi:facebook" />
        <Icon name="mdi:linkedin" />
        <Icon name="mdi:share-variant" />
        <Icon name="mdi:reddit" />
      </div>
    </template>

    <h5 class="font-semibold">Social Share</h5>
    <p class="text-sm mt-1 text-gray-400">
      Primitive component to allow easy sharing for different social media
      providers.
    </p>
  </ShowcaseCard>
</template>
