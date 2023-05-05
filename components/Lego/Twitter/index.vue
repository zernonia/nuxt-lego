<script setup lang="ts">
// reference from: https://github.com/vercel-labs/react-tweet/
import key from "./.keys";
import { getTweetUrl } from "lego/utils/twitter";

const props = defineProps<{
  tweetId: string;
}>();

const { data, error } = useFetch(`/api/get-tweet/${props.tweetId}`);
provide(key, data);

const url = computed(() => (data?.value ? getTweetUrl(data.value) : ""));
</script>

<template>
  <div>
    <slot :valid="!error" :url="url">
      <LegoTwitterUser></LegoTwitterUser>
      <LegoTwitterText></LegoTwitterText>

      <LegoTwitterMedia></LegoTwitterMedia>
      <LegoTwitterCreatedAt></LegoTwitterCreatedAt>
      <LegoTwitterAction></LegoTwitterAction>
      <LegoTwitterReplies></LegoTwitterReplies>
    </slot>
  </div>
</template>
