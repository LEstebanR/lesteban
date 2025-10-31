import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  url: string
  title: string
  short_title: string
  date: string
  description: string
  image: string
  content?: string
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
        date: data.date,
        description: data.description,
        image: data.image,
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
      // Convert markdown to HTML
      const processedContent = await remark().use(html).process(content)
      const contentHtml = processedContent.toString()

      return {
        slug: fileName.replace(/\.md$/, ''),
        url: postUrl,
        title: data.title,
        short_title: data.short_title,
        date: data.date,
        description: data.description,
        image: data.image,
        content: contentHtml,
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
