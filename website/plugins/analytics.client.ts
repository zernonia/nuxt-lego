export default defineNuxtPlugin((nuxtApp) => {
  const cfg = useRuntimeConfig()
  if (process.dev)
    return

  const node = document.createElement('script')
  node.async = true
  node.src = `${cfg.public.umamiHost}/script.js`
  node.setAttribute('data-website-id', cfg.public.umamiId)

  document.body.appendChild(node)
})
