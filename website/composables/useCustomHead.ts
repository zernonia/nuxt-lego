export function useCustomHead(data: {
  title: string
  description: string
  image: string
} = {
  title: '',
  description: '',
  image: '/og.png',
}) {
  const {
    public: { siteUrl },
  } = useRuntimeConfig()
  const image = computed(() => `${siteUrl}${data.image ?? ''}`)

  return useSeoMeta({
    title: () => data.title,
    description: () => data.description,
    ogTitle: () => data.title,
    ogDescription: () => data.description,
    ogImage: () => image.value,
    twitterTitle: () => data.title,
    twitterDescription: () => data.description,
    twitterImage: () => image.value,
  })
}
