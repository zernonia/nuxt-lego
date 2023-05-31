interface MetaTags {
  [key: string]: string
}

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event)

  if (!url)
    return sendError(event, new Error('Missing url'))

  const html = await $fetch<string>(url, { responseType: 'text' })

  const metaTags: MetaTags = {}
  const metaTagRegExp
    = /<meta\s+(?:name|property)="([^"]+)"\s+content="([^"]+)"\s*\/?>/g
  let match

  // eslint-disable-next-line no-cond-assign
  while ((match = metaTagRegExp.exec(html))) {
    const tagName = match[1]
    const tagContent = match[2]
    metaTags[tagName] = tagContent
  }

  const titleRegExp = /<title>([^<]*)<\/title>/i
  const titleTag = titleRegExp.exec(html)

  const title
    = titleTag?.[1] || metaTags['og:title'] || metaTags['twitter:title']
  const description
    = metaTags.description
    || metaTags['og:description']
    || metaTags['twitter:description']
  const image = metaTags['og:image'] || metaTags['twitter:image']

  return {
    title,
    description,
    image,
    url,
  }
})
