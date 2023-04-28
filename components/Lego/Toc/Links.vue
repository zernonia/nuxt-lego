<script setup lang="ts">
import type { TocLink } from "@nuxt/content/dist/runtime/types";

defineProps<{
  links: TocLink[];
}>();

const router = useRouter();

function scrollToHeading(id: string) {
  router.push(`#${id}`);
}
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.text">
      <a :href="`#${link.id}`" @click.prevent="scrollToHeading(link.id)">
        <slot :link="link">
          {{ link.text }}
        </slot>
      </a>

      <LegoTocLinks
        v-if="link.children"
        :links="link.children"
        v-bind:class="$attrs.class"
        v-bind:style="$attrs.style"
        v-slot="{ link }"
      >
        <slot v-bind:link="link"></slot>
      </LegoTocLinks>
    </li>
  </ul>
</template>
