<script setup lang="ts">
import { rootKey } from "./.keys";
import type { Provider } from "./.types";

const rootProps = inject(rootKey);

const props = defineProps<{
  provider: Provider;
}>();
const emits = defineEmits<{
  (e: "select", payload: Provider): void;
}>();

const providerInfo = {
  facebook: { title: "Facebook", icon: "logos:facebook" },
  twitter: { title: "Twitter", icon: "logos:twitter" },
  google: { title: "Google", icon: "logos:google-icon" },
  discord: { title: "Discord", icon: "logos:discord-icon" },
  github: { title: "GitHub", icon: "devicon:github" },
  gitlab: { title: "gitlab", icon: "devicon:gitlab" },
  apple: { title: "apple", icon: "devicon:apple" },
  slack: { title: "slack", icon: "devicon:slack" },
  azure: { title: "azure", icon: "devicon:azure" },
  bitbucket: { title: "bitbucket", icon: "devicon:bitbucket" },
  tiktok: { title: "TikTok", icon: "logos-tiktok-icon" },
};

const mappedProvider = computed(() => providerInfo[props.provider]);
</script>

<template>
  <button @click="emits('select', provider)">
    <Icon :name="mappedProvider.icon" />
    <div v-if="!rootProps?.hideProviderLabel">
      <slot> Sign in with {{ mappedProvider.title }} </slot>
    </div>
  </button>
</template>
