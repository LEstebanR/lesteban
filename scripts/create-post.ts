#!/usr/bin/env bun

import fs from 'fs'
import path from 'path'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

async function main() {
  console.log('📝 Create New Blog Post\n')

  // Get post details
  const url = await question('URL slug (e.g., my-first-post): ')
  const titleEn = await question('Title (English): ')
  const titleEs = await question('Title (Spanish): ')
  const shortTitleEn = await question('Short title (English): ')
  const shortTitleEs = await question('Short title (Spanish): ')
  const descriptionEn = await question('Description (English): ')
  const descriptionEs = await question('Description (Spanish): ')
  const image = await question('Image path (e.g., /blog/my-post.jpg): ')
  const author = await question('Author (default: Luis Esteban Ramirez): ')
  const tags = await question('Tags (comma-separated): ')

  const date = new Date().toISOString().split('T')[0]
  const tagsList = tags
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t)

  // Create English post
  const enFrontmatter = `---
title: "${titleEn}"
url: "${url}"
short_title: "${shortTitleEn}"
date: "${date}"
description: "${descriptionEn}"
image: "${image}"
author: "${author || 'Luis Esteban Ramirez'}"
tags: [${tagsList.map((t) => `"${t}"`).join(', ')}]
---

Write your content here in English...
`

  // Create Spanish post
  const esFrontmatter = `---
title: "${titleEs}"
url: "${url}"
short_title: "${shortTitleEs}"
date: "${date}"
description: "${descriptionEs}"
image: "${image}"
author: "${author || 'Luis Esteban Ramirez'}"
tags: [${tagsList.map((t) => `"${t}"`).join(', ')}]
---

Escribe tu contenido aquí en español...
`

  // Create files
  const enPath = path.join(
    process.cwd(),
    'content',
    'blog',
    'en',
    `${url}.md`
  )
  const esPath = path.join(
    process.cwd(),
    'content',
    'blog',
    'es',
    `${url}.md`
  )

  fs.writeFileSync(enPath, enFrontmatter)
  fs.writeFileSync(esPath, esFrontmatter)

  console.log('\n✅ Blog posts created successfully!')
  console.log(`   English: ${enPath}`)
  console.log(`   Spanish: ${esPath}`)

  rl.close()
}

main().catch((error) => {
  console.error('Error creating blog post:', error)
  process.exit(1)
})
