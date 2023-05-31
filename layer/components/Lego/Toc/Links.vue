<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'

defineProps<{
  links: TocLink[]
}>()

const router = useRouter()

function scrollToHeading(id: string) {
  router.push(`#${id}`)
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
        v-slot="{ link: childLink }"
        :links="link.children"
        :class="$attrs.class"
        :style="$attrs.style"
      >
        <slot :link="childLink" />
      </LegoTocLinks>
    </li>
  </ul>
</template>
