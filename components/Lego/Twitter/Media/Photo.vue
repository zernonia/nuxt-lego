<script setup lang="ts">
import type { MediaPhoto } from "../../../../types";

const getMediaUrl = (
  media: MediaPhoto,
  size: "small" | "medium" | "larget"
): string => {
  const url = new URL(media.media_url_https);
  const extension = url.pathname.split(".").pop();

  if (!extension) return media.media_url_https;

  url.pathname = url.pathname.replace(`.${extension}`, "");
  url.searchParams.set("format", extension);
  url.searchParams.set("name", size);

  return url.toString();
};

defineProps<{
  media: MediaPhoto;
}>();
</script>

<template>
  <div>
    <img :src="getMediaUrl(media, 'small')" />
  </div>
</template>
