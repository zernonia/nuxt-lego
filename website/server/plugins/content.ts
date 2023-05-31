// Autodoc from inkline.io
// reference: https://github.com/inkline/inkline.io/blob/main/server/plugins/content.ts
import { readFileSync } from 'node:fs'
import { resolve } from 'pathe'
import glob from 'fast-glob'

const rootPath = resolve('.')
const codeCache = new Map<string, string>()
const codeFilePaths = [...glob.sync(resolve('website', '**', 'components', '**'))]

codeFilePaths.forEach((filePath) => {
  const keyName = filePath.split(rootPath)[1].slice(1)
  codeCache.set(keyName, readFileSync(filePath, 'utf-8'))
})

const autodocsRegEx = /codegen\s*\{(.+})/g
const paramsRegEx = /(\w+)="([^"]+)"/g

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      let match
      let body = file.body

      do {
        match = autodocsRegEx.exec(body)

        if (match) {
          const rawParams = match[1]
          const params = [...rawParams.matchAll(paramsRegEx)].reduce<
            Record<string, string>
          >((acc, [, propertyName, propertyValue]) => {
            acc[propertyName] = propertyValue

            return acc
          }, {})

          const code = codeCache.get(params.src)
          const codeBlock = `~~~${params.lang}\n${code}\n~~~`

          if (code)
            body = body.replace(match[0], codeBlock)
          else
            console.error(`Could not find code for ${params.src}`)
        }
      } while (match)

      file.body = body
    }
  })
})
