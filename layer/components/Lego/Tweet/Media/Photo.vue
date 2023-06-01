<script setup lang="ts">
import type { MediaPhoto } from 'lego/types'
import { getMediaUrl } from 'lego/utils/twitter'

defineProps<{
  media: MediaPhoto
}>()
</script>

<template>
  <img
    style="object-fit: cover; height: 100%; width: 100%"
    :src="getMediaUrl(media, 'small')"
  >
</template>
