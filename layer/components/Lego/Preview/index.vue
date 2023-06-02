<script setup lang="ts">
import { rootKey } from './.keys'

const props = withDefaults(defineProps<{
  padding?: number
  duration?: number
}>(),
{
  padding: 200,
  duration: 500,
})

const el = ref<HTMLElement>()
const isPreviewActive = ref(false)
const isTransitioning = refAutoReset(false, props.duration)

const { left, width: elWidth, height: elHeight } = useElementBounding(el, {
  windowResize: true,
  windowScroll: false,
})
const { width: windowWidth, height: windowHeight } = useWindowSize()

const top = ref(0)

watch([windowWidth, el], () => {
  // Act as window resize observer
  nextTick(() => {
    if (el.value)
      top.value = el.value?.getBoundingClientRect().top + window.pageYOffset
  })
}, { immediate: true })

onKeyStroke('Escape', (e) => {
  e.preventDefault()
  isPreviewActive.value = false
})

const computedScale = ref(1)
const computedTop = ref(0)

const computedStyle = computed(() => {
  if (isPreviewActive.value) {
    return {
      position: 'absolute',
      left: `${left.value}px`,
      top: `${computedTop.value}px`,
      transform: `scale(${computedScale.value})`,
      zIndex: '999',
      cursor: 'zoom-out',
    }
  }
  else {
    return {
      position: isTransitioning.value ? 'absolute' : 'initial',
      zIndex: isTransitioning.value ? '999' : 'unset',
      top: `${top.value}px`,
      transform: 'scale(1)',
      cursor: 'zoom-in',
    }
  }
},
)

const initialScrollPosition = ref(0)
function handleScroll() {
  const diff = Math.abs(initialScrollPosition.value - window.scrollY)
  if (diff > 10)
    isPreviewActive.value = false
}

function applyStying() {
  const scrollTop = window?.pageYOffset || document.documentElement.scrollTop
  computedTop.value = scrollTop - window.screenY + ((windowHeight.value - elHeight.value) / 2)

  if (windowWidth.value < 900)
    computedScale.value = (windowWidth.value) / elWidth.value
  else
    computedScale.value = (windowWidth.value - props.padding) / elWidth.value
}
function clearStyling() {
  computedTop.value = 0
}

watch(isPreviewActive, (n) => {
  // add scroll event listener
  if (n) {
    applyStying()
    initialScrollPosition.value = window.scrollY
    document.addEventListener('scroll', handleScroll)
  }
  else {
    clearStyling()
    initialScrollPosition.value = 0
    isTransitioning.value = true
    document.removeEventListener('scroll', handleScroll)
  }
})

provide(rootKey, {
  isPreviewActive,
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div
    v-bind="$attrs"
    ref="el"
    role="button"
    tabindex="0"
    :style="computedStyle"
    @click="isPreviewActive = !isPreviewActive"
  >
    <div :style=" { width: isPreviewActive || isTransitioning ? `${elWidth}px` : '100%' }">
      <slot />
    </div>
  </div>
  <div v-if="isPreviewActive || isTransitioning" :style="{ height: `${elHeight}px` }" />
</template>
