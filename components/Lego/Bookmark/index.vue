<script setup lang="ts">
import key from "./.keys";

const props = defineProps<{
  url: string;
}>();

const { data, error } = useFetch("/api/get-metatags", {
  method: "POST",
  body: {
    url: props.url,
  },
});
provide(key, data);
</script>

<template>
  <div>
    <slot
      :title="data?.title"
      :description="data?.description"
      :image="data?.image"
      :url="url"
      :valid="!error"
    >
      <LegoBookmarkTitle></LegoBookmarkTitle>
      <LegoBookmarkDescription></LegoBookmarkDescription>
      <LegoBookmarkUrl></LegoBookmarkUrl>
      <LegoBookmarkImage></LegoBookmarkImage>
    </slot>
  </div>
</template>
