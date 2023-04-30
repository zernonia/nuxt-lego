<script setup lang="ts">
import key from "./.keys";

const props = defineProps<{
  tweetId: string;
}>();

const { data } = useFetch(`/api/get-tweet/${props.tweetId}`, { server: false });
provide(key, data);

// reference from: https://github.com/vercel-labs/react-tweet/
</script>

<template>
  <div>
    <slot>
      <LegoTwitterUser></LegoTwitterUser>
      <LegoTwitterText></LegoTwitterText>

      <LegoTwitterMedia></LegoTwitterMedia>
      <LegoTwitterCreatedAt></LegoTwitterCreatedAt>
      <LegoTwitterAction></LegoTwitterAction>
      <LegoTwitterReplies></LegoTwitterReplies>
    </slot>
  </div>
</template>
