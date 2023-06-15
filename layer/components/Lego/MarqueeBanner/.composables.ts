import { useSlots, inject, ref, type Ref, computed } from "vue"
import { rootKey } from "./.keys"

export const useMarqueeBanner = (el: Ref<HTMLElement[] | undefined>) => {

  const slots = useSlots()
  const rootInject = inject(rootKey, {
    width: ref(0),
  })

  const componentsWidth = computed(() => el.value?.map((i) => {
    const computedStyle = window.getComputedStyle(i)
    const width = i.offsetWidth
    const marginLeft = parseInt(computedStyle.marginLeft, 0)
    const marginRight = parseInt(computedStyle.marginRight, 0)
    return width + marginLeft + marginRight
  }).reduce((prev, curr) => prev + curr, 0) ?? 0)

  const baseEl = computed(() => {
    const defaultSlots = slots.default?.()
    if (!defaultSlots?.length)
      return

    const slotItems = defaultSlots.flatMap((i) => {
      if (i.type.toString() === 'Symbol(v-fgt)')
        return i.children

      else
        return i
    })
    return slotItems
  })


  const shadowCount = computed(() => componentsWidth.value !== 0 ? Math.ceil(rootInject.width.value / componentsWidth.value) : rootInject.shadowCount)
  const shadowEl = computed(() => {
    return Array.from(Array(shadowCount.value).keys()).map(() => baseEl.value).flat()
  })

  const isHovering = ref(false)
  const onMouseEnter = (event: MouseEvent) => {
    isHovering.value = true
  }
  const onMouseLeave = (event: MouseEvent) => {
    isHovering.value = false
  }



  return {
    componentsWidth, baseEl, shadowEl, shadowCount, isHovering, onMouseEnter, onMouseLeave
  }
}
