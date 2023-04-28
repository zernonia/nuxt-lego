<script setup lang="ts">
import type { MediaVideo } from "../../../../types";

const getMediaUrl = (
  media: MediaVideo,
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
  media: MediaVideo;
}>();
</script>

<template>
  <video
    v-if="media"
    :poster="getMediaUrl(media, 'small')"
    draggable
    muted
    preload="metadata"
  >
    <source
      :src="media.url"
      :type="media.video_info.variants?.[0].content_type"
    />
  </video>
</template>
