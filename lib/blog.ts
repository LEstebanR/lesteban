import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'

import type { BlogPost } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'content/blog')

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
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        url: data.url || slug,
        title: data.title,
        short_title: data.short_title,
        date: data.date,
        description: data.description,
        image: data.image,
        author: data.author,
        tags: data.tags,
        updatedDate: data.updated_date,
      } as BlogPost
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
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
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const postUrl = data.url || fileName.replace(/\.md$/, '')

    if (postUrl === url) {
      // Convert markdown to HTML with syntax highlighting
      const processedContent = await remark()
        .use(remarkRehype)
        .use(rehypeHighlight)
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
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    urls.push(data.url || fileName.replace(/\.md$/, ''))
  }

  return urls
}
