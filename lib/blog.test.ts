import fs from 'fs'
import path from 'path'

import { afterEach, beforeEach, describe, expect, test } from 'bun:test'

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

  describe('missing directory fallback', () => {
    test('getAllPosts returns [] when lang directory does not exist', async () => {
      const posts = await getAllPosts('fr' as 'en')
      expect(posts).toEqual([])
    })

    test('getPostByUrl returns null when lang directory does not exist', async () => {
      const post = await getPostByUrl('any-post', 'fr' as 'en')
      expect(post).toBeNull()
    })

    test('getAllPostUrls returns [] when lang directory does not exist', async () => {
      const urls = await getAllPostUrls('fr' as 'en')
      expect(urls).toEqual([])
    })
  })

  describe('sort order', () => {
    const enDir = path.join(process.cwd(), 'content/blog/en')
    const oldFixture = path.join(enDir, '_aaa-sort-old.md')
    const newFixture = path.join(enDir, '_bbb-sort-new.md')

    const makeFixture = (url: string, date: string) => `---
title: Sort Fixture ${url}
short_title: Sort Fixture
date: ${date}
description: Sort fixture
image: /test.jpg
url: ${url}
author: Test
tags: []
---
Content
`

    beforeEach(() => {
      fs.writeFileSync(oldFixture, makeFixture('_aaa-sort-old', '2000-01-01'))
      fs.writeFileSync(newFixture, makeFixture('_bbb-sort-new', '2099-01-01'))
    })

    afterEach(() => {
      if (fs.existsSync(oldFixture)) fs.unlinkSync(oldFixture)
      if (fs.existsSync(newFixture)) fs.unlinkSync(newFixture)
    })

    test('getAllPosts returns posts sorted newest-first, covering both sort comparator branches', async () => {
      const posts = await getAllPosts('en')
      const idxOld = posts.findIndex((p) => p.url === '_aaa-sort-old')
      const idxNew = posts.findIndex((p) => p.url === '_bbb-sort-new')
      expect(idxNew).toBeLessThan(idxOld)
    })
  })

  describe('XSS sanitization', () => {
    const fixtureUrl = '_test-xss-fixture'
    const fixturePath = path.join(process.cwd(), 'content/blog/en', `${fixtureUrl}.md`)

    beforeEach(() => {
      fs.writeFileSync(
        fixturePath,
        `---
title: XSS Fixture
short_title: XSS Fixture
date: 2024-01-01
description: Sanitization test fixture
image: /test.jpg
url: ${fixtureUrl}
author: Test
tags: []
---

Hello <script>alert('xss')</script> world

<img src="x" onerror="alert(1)" />
`
      )
    })

    afterEach(() => {
      if (fs.existsSync(fixturePath)) fs.unlinkSync(fixturePath)
    })

    test('strips <script> tags from rendered HTML', async () => {
      const post = await getPostByUrl(fixtureUrl, 'en')
      expect(post).not.toBeNull()
      expect(post?.content).not.toContain('<script>')
      expect(post?.content).not.toContain('</script>')
    })

    test('strips onerror event handlers from rendered HTML', async () => {
      const post = await getPostByUrl(fixtureUrl, 'en')
      expect(post?.content).not.toContain('onerror')
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
