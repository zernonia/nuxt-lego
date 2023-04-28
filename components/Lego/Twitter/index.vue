<script setup lang="ts">
import key from "./.keys";

const props = defineProps<{
  tweetId: string;
}>();

const { data } = useFetch(`/api/get-tweet/${props.tweetId}`, { server: false });
provide(key, data);
</script>

<template>
  <div>
    <slot>
      <LegoTwitterUser></LegoTwitterUser>
      <LegoTwitterText></LegoTwitterText>

      <LazyLegoTwitterMedia></LazyLegoTwitterMedia>
    </slot>
  </div>
</template>
