import { MetadataRoute } from 'next'

import { getAllPosts, latestPostDate } from '@/lib/blog'
import { BASE_URL } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BASE_URL

  // Get all blog posts for both languages
  const enPosts = await getAllPosts('en')
  const esPosts = await getAllPosts('es')

  const enBlogUpdated = latestPostDate(enPosts)
  const esBlogUpdated = latestPostDate(esPosts)

  // Home has no content date, so lastmod is omitted rather than stamped with
  // the build time. Blog indexes use the newest post date.
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/en`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en/blog`,
      ...(enBlogUpdated ? { lastModified: enBlogUpdated } : {}),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es/blog`,
      ...(esBlogUpdated ? { lastModified: esBlogUpdated } : {}),
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
