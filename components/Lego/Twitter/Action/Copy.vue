<script setup lang="ts">
import key from "../.keys";

const tweet = inject(key);

const tweetUrl = computed(() => (tweet?.value ? getTweetUrl(tweet.value) : ""));
const { copy, copied } = useClipboard({ source: tweetUrl });
</script>

<template>
  <button v-if="tweet" @click="copy()">
    <div>
      <svg
        width="20"
        height="20"
        v-if="copied"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
      >
        <g>
          <path
            d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
          ></path>
        </g>
      </svg>

      <svg
        width="20"
        height="20"
        fill="currentColor"
        v-else
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <g>
          <path
            d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
          ></path>
        </g>
      </svg>
    </div>
    <span>
      {{ copied ? "Copied!" : "Copy link" }}
    </span>
  </button>
</template>
