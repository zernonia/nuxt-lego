<script setup lang="ts">
// reference from: https://github.com/vercel-labs/react-tweet/
import key from './.keys'
import { getTweetUrl } from '~/../layer/utils/twitter'

const props = defineProps<{
  tweetId: string
}>()

const { data, error, pending } = useFetch(`/api/get-tweet/${props.tweetId}`)
provide(key, data)

const url = computed(() => (data?.value ? getTweetUrl(data.value) : ''))
</script>

<template>
  <div>
    <slot :valid="!error" :url="url" :pending="pending">
      <LegoTweetUser />
      <LegoTweetText />

      <LegoTweetMedia />
      <LegoTweetCreatedAt />
      <LegoTweetAction />
      <LegoTweetReplies />
    </slot>
  </div>
</template>
