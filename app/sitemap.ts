import { MetadataRoute } from 'next'

import { getAllPostUrls } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lestebanr.com'

  // Get all blog post URLs for both languages
  const enPostUrls = await getAllPostUrls('en')
  const esPostUrls = await getAllPostUrls('es')

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
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
  const enBlogRoutes: MetadataRoute.Sitemap = enPostUrls.map((url) => ({
    url: `${baseUrl}/en/blog/${url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const esBlogRoutes: MetadataRoute.Sitemap = esPostUrls.map((url) => ({
    url: `${baseUrl}/es/blog/${url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...enBlogRoutes, ...esBlogRoutes]
}
