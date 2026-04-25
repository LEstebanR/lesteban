import { describe, expect, test } from 'bun:test'

import { getAllPosts, getAllPostUrls, getPostByUrl } from './blog'

describe('Blog Utilities', () => {
  describe('getAllPosts', () => {
    test('should return an array of posts for English', async () => {
      const posts = await getAllPosts('en')
      expect(Array.isArray(posts)).toBe(true)
    })

    test('should return an array of posts for Spanish', async () => {
      const posts = await getAllPosts('es')
      expect(Array.isArray(posts)).toBe(true)
    })

    test('should return posts with required fields', async () => {
      const posts = await getAllPosts('en')
      if (posts.length > 0) {
        const post = posts[0]
        expect(post).toHaveProperty('slug')
        expect(post).toHaveProperty('url')
        expect(post).toHaveProperty('title')
        expect(post).toHaveProperty('short_title')
        expect(post).toHaveProperty('date')
        expect(post).toHaveProperty('description')
        expect(post).toHaveProperty('image')
      }
    })

    test('should sort posts by date in descending order', async () => {
      const posts = await getAllPosts('en')
      if (posts.length > 1) {
        for (let i = 0; i < posts.length - 1; i++) {
          expect(posts[i].date >= posts[i + 1].date).toBe(true)
        }
      }
    })
  })

  describe('getPostByUrl', () => {
    test('should return null for non-existent post', async () => {
      const post = await getPostByUrl('non-existent-post', 'en')
      expect(post).toBeNull()
    })

    test('should return post with content for existing post', async () => {
      const posts = await getAllPosts('en')
      if (posts.length > 0) {
        const firstPost = posts[0]
        const post = await getPostByUrl(firstPost.url, 'en')
        expect(post).not.toBeNull()
        expect(post).toHaveProperty('content')
        expect(post).toHaveProperty('readingTime')
        expect(typeof post?.readingTime).toBe('number')
      }
    })

    test('should have default author if not specified', async () => {
      const posts = await getAllPosts('en')
      if (posts.length > 0) {
        const firstPost = posts[0]
        const post = await getPostByUrl(firstPost.url, 'en')
        expect(post?.author).toBeDefined()
      }
    })

    test('should have tags array', async () => {
      const posts = await getAllPosts('en')
      if (posts.length > 0) {
        const firstPost = posts[0]
        const post = await getPostByUrl(firstPost.url, 'en')
        expect(Array.isArray(post?.tags)).toBe(true)
      }
    })
  })

  describe('getAllPostUrls', () => {
    test('should return an array of URLs for English', async () => {
      const urls = await getAllPostUrls('en')
      expect(Array.isArray(urls)).toBe(true)
    })

    test('should return an array of URLs for Spanish', async () => {
      const urls = await getAllPostUrls('es')
      expect(Array.isArray(urls)).toBe(true)
    })

    test('should return strings', async () => {
      const urls = await getAllPostUrls('en')
      if (urls.length > 0) {
        expect(typeof urls[0]).toBe('string')
      }
    })

    test('should match the URLs from getAllPosts', async () => {
      const posts = await getAllPosts('en')
      const urls = await getAllPostUrls('en')
      expect(urls.length).toBe(posts.length)
    })

    test('should not contain URLs with leading or trailing slashes', async () => {
      const urls = await getAllPostUrls('en')
      for (const url of urls) {
        expect(url.startsWith('/')).toBe(false)
        expect(url.endsWith('/')).toBe(false)
      }
    })

    test('should not contain duplicate URLs', async () => {
      const urls = await getAllPostUrls('en')
      const unique = new Set(urls)
      expect(unique.size).toBe(urls.length)
    })
  })

  describe('language parity', () => {
    test('en and es have the same number of posts', async () => {
      const enPosts = await getAllPosts('en')
      const esPosts = await getAllPosts('es')
      expect(enPosts.length).toBe(esPosts.length)
    })

    test('all post URLs match across en and es', async () => {
      const enUrls = (await getAllPostUrls('en')).sort()
      const esUrls = (await getAllPostUrls('es')).sort()
      expect(enUrls).toEqual(esUrls)
    })
  })

  describe('data integrity', () => {
    test('all posts have a valid date string', async () => {
      const posts = await getAllPosts('en')
      for (const post of posts) {
        expect(isNaN(Date.parse(post.date))).toBe(false)
      }
    })

    test('getPostByUrl returns non-empty content', async () => {
      const posts = await getAllPosts('en')
      if (posts.length > 0) {
        const post = await getPostByUrl(posts[0].url, 'en')
        expect((post?.content ?? '').length).toBeGreaterThan(0)
      }
    })

    test('getPostByUrl returns readingTime greater than 0', async () => {
      const posts = await getAllPosts('en')
      if (posts.length > 0) {
        const post = await getPostByUrl(posts[0].url, 'en')
        expect(post?.readingTime).toBeGreaterThan(0)
      }
    })
  })
})
