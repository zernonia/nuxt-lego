export default defineNuxtPlugin(() => {
  const cfg = useRuntimeConfig()
  if (process.dev)
    return

  const url = new URL('/script.js', cfg.public.umamiHost)
  const node = document.createElement('script')
  node.async = true
  node.src = url.href
  node.setAttribute('data-website-id', cfg.public.umamiId)

  document.body.appendChild(node)
})
