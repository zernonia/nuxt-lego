export default defineNuxtPlugin(() => {
  const cfg = useRuntimeConfig()

  if (!cfg.public.umamiHost)
    return

  const url = new URL('/script.js', cfg.public.umamiHost)
  const node = document.createElement('script')
  node.async = true
  node.src = url.href
  node.setAttribute('data-website-id', cfg.public.umamiId)
  node.setAttribute('data-domains', cfg.public.umamiDomains)

  document.body.appendChild(node)
})
