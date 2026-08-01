import { MetadataRoute } from 'next'

import { getAllPosts } from '@/lib/blog'
import { BASE_URL } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BASE_URL

  // Get all blog posts for both languages
  const enPosts = await getAllPosts('en')
  const esPosts = await getAllPosts('es')

  // Static routes (only include URLs with language to avoid redirects)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Blog post routes
  const enBlogRoutes: MetadataRoute.Sitemap = enPosts.map((post) => ({
    url: `${baseUrl}/en/blog/${post.url}`,
    lastModified: new Date(post.updatedDate || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const esBlogRoutes: MetadataRoute.Sitemap = esPosts.map((post) => ({
    url: `${baseUrl}/es/blog/${post.url}`,
    lastModified: new Date(post.updatedDate || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...enBlogRoutes, ...esBlogRoutes]
}
