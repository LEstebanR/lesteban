import type { BlogPost } from '@/types/blog'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import rehypeHighlight from 'rehype-highlight'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'

import { BASE_URL } from '@/lib/constants'
import { toAbsoluteUrl } from '@/lib/utils'

const postsDirectory = path.join(process.cwd(), 'content/blog')

// Extend the default schema to allow className on elements used by rehype-highlight,
// so hljs-* classes survive sanitization while XSS protection remains intact.
const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code ?? []), 'className'],
    span: [...(defaultSchema.attributes?.span ?? []), 'className'],
    pre: [...(defaultSchema.attributes?.pre ?? []), 'className'],
  },
}

/**
 * Calculate estimated reading time based on content
 * @param content - Markdown content
 * @returns Reading time in minutes
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Read a post file. Content is normalised to NFC so accents authored in
 * decomposed form (common on macOS) behave like single characters everywhere
 * they're rendered: pages, metadata, OG images and decode animations.
 */
function readPostFile(fullPath: string) {
  return matter(fs.readFileSync(fullPath, 'utf8').normalize('NFC'))
}

export async function getAllPosts(lang: 'en' | 'es'): Promise<BlogPost[]> {
  const langDirectory = path.join(postsDirectory, lang)

  // Check if directory exists
  if (!fs.existsSync(langDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(langDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(langDirectory, fileName)
      const { data } = readPostFile(fullPath)

      return {
        slug,
        url: data.url || slug,
        title: data.title,
        short_title: data.short_title,
        date: data.date,
        description: data.description,
        image: data.image,
        imagePosition: data.image_position,
        author: data.author,
        tags: data.tags,
        updatedDate: data.updated_date,
      } as BlogPost
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostByUrl(
  url: string,
  lang: 'en' | 'es'
): Promise<BlogPost | null> {
  const langDirectory = path.join(postsDirectory, lang)

  // Check if directory exists
  if (!fs.existsSync(langDirectory)) {
    return null
  }

  const fileNames = fs.readdirSync(langDirectory)

  // Find the file with matching url
  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue

    const fullPath = path.join(langDirectory, fileName)
    const { data, content } = readPostFile(fullPath)

    const postUrl = data.url || fileName.replace(/\.md$/, '')

    if (postUrl === url) {
      // Convert markdown to HTML with syntax highlighting
      const processedContent = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeHighlight)
        .use(rehypeSanitize, sanitizeSchema)
        .use(rehypeStringify)
        .process(content)
      const contentHtml = processedContent.toString()

      // Calculate reading time
      const readingTime = calculateReadingTime(content)

      return {
        slug: fileName.replace(/\.md$/, ''),
        url: postUrl,
        title: data.title,
        short_title: data.short_title,
        date: data.date,
        description: data.description,
        image: data.image,
        imagePosition: data.image_position,
        content: contentHtml,
        author: data.author || 'Luis Esteban Ramirez',
        tags: data.tags || [],
        readingTime,
        updatedDate: data.updated_date,
      }
    }
  }

  return null
}

export async function getAllPostUrls(lang: 'en' | 'es'): Promise<string[]> {
  const langDirectory = path.join(postsDirectory, lang)

  // Check if directory exists
  if (!fs.existsSync(langDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(langDirectory)
  const urls: string[] = []

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue

    const fullPath = path.join(langDirectory, fileName)
    const { data } = readPostFile(fullPath)

    urls.push(data.url || fileName.replace(/\.md$/, ''))
  }

  return urls
}

/** Newest `updatedDate` or `date` among posts. Invalid dates are ignored. */
export function latestPostDate(
  posts: { date: string; updatedDate?: string }[]
): Date | undefined {
  let latest: number | undefined
  for (const post of posts) {
    const time = new Date(post.updatedDate || post.date).getTime()
    if (Number.isNaN(time)) continue
    if (latest === undefined || time > latest) latest = time
  }
  return latest === undefined ? undefined : new Date(latest)
}

/** BlogPosting JSON-LD. Image is absolute; empty keyword lists are omitted. */
export function toBlogPostingJsonLd(
  post: Pick<
    BlogPost,
    | 'title'
    | 'description'
    | 'image'
    | 'date'
    | 'updatedDate'
    | 'author'
    | 'tags'
    | 'url'
  >,
  lang: 'en' | 'es'
): Record<string, unknown> {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Luis Esteban Ramirez',
    },
    publisher: {
      '@type': 'Person',
      name: 'Luis Esteban Ramirez',
    },
    inLanguage: lang,
    url: `${BASE_URL}/${lang}/blog/${post.url}`,
  }

  if (post.image) {
    jsonLd.image = toAbsoluteUrl(post.image)
  }

  if (post.tags && post.tags.length > 0) {
    jsonLd.keywords = post.tags.join(', ')
  }

  return jsonLd
}
