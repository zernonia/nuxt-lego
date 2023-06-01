<script setup lang="ts">
import { getLikeUrl } from 'lego/utils/twitter'
import key from '../.keys'

const tweet = inject(key)

const favoriteCount = computed(() =>
  tweet?.value.favorite_count ? formatNumber(tweet?.value.favorite_count) : 0,
)
</script>

<template>
  <a
    v-if="tweet"
    :href="getLikeUrl(tweet)"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot :favorite_count="favoriteCount">
      <LegoTweetActionLoveIcon />
      <span>{{ favoriteCount }}</span>
    </slot>
  </a>
</template>
