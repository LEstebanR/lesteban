import {
  cn,
  getCanonicalUrl,
  getLanguageAlternates,
  prefersReducedMotion,
  toAbsoluteUrl,
} from './utils'
import { describe, expect, test } from 'bun:test'

describe('cn', () => {
  test('combines classes correctly', () => {
    expect(cn('px-2', 'py-4')).toBe('px-2 py-4')
  })

  test('resolves Tailwind conflicts keeping last value', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })

  test('handles undefined values', () => {
    expect(cn('px-2', undefined, 'py-4')).toBe('px-2 py-4')
  })

  test('handles false values', () => {
    expect(cn('px-2', false, 'py-4')).toBe('px-2 py-4')
  })

  test('handles null values', () => {
    expect(cn('px-2', null, 'py-4')).toBe('px-2 py-4')
  })

  test('returns empty string with no arguments', () => {
    expect(cn()).toBe('')
  })

  test('deduplicates conflicting padding classes', () => {
    expect(cn('px-2', 'px-6')).toBe('px-6')
  })
})

describe('getCanonicalUrl', () => {
  test('returns full URL for path with leading slash', () => {
    expect(getCanonicalUrl('/about')).toBe('https://www.lesteban.dev/about')
  })

  test('adds leading slash when path has none', () => {
    expect(getCanonicalUrl('about')).toBe('https://www.lesteban.dev/about')
  })

  test('does not duplicate the leading slash', () => {
    const url = getCanonicalUrl('/about')
    expect(url).not.toContain('lesteban.dev//')
  })

  test('works with nested paths', () => {
    expect(getCanonicalUrl('/blog/my-post')).toBe(
      'https://www.lesteban.dev/blog/my-post'
    )
  })

  test('works with locale prefix', () => {
    expect(getCanonicalUrl('/en/blog/my-post')).toBe(
      'https://www.lesteban.dev/en/blog/my-post'
    )
  })

  test('works with root path', () => {
    expect(getCanonicalUrl('/')).toBe('https://www.lesteban.dev/')
  })
})

describe('toAbsoluteUrl', () => {
  test('prefixes site-relative paths', () => {
    expect(toAbsoluteUrl('/blog/marathon_image.jpg')).toBe(
      'https://www.lesteban.dev/blog/marathon_image.jpg'
    )
  })

  test('prefixes paths that omit the leading slash', () => {
    expect(toAbsoluteUrl('blog/marathon_image.jpg')).toBe(
      'https://www.lesteban.dev/blog/marathon_image.jpg'
    )
  })

  test('leaves absolute http and https URLs unchanged', () => {
    expect(toAbsoluteUrl('https://cdn.example/a.jpg')).toBe(
      'https://cdn.example/a.jpg'
    )
    expect(toAbsoluteUrl('http://cdn.example/a.jpg')).toBe(
      'http://cdn.example/a.jpg'
    )
  })
})

describe('getLanguageAlternates', () => {
  const en = 'https://www.lesteban.dev/en/blog'
  const es = 'https://www.lesteban.dev/es/blog'

  test('uses the English URL as x-default on both pages of a pair', () => {
    expect(getLanguageAlternates('en', en, es)).toEqual({
      en,
      es,
      'x-default': en,
    })
    expect(getLanguageAlternates('es', es, en)).toEqual({
      es,
      en,
      'x-default': en,
    })
  })

  test('falls back to the only available URL when there is no pair', () => {
    expect(getLanguageAlternates('en', en)).toEqual({
      en,
      'x-default': en,
    })
    expect(getLanguageAlternates('es', es)).toEqual({
      es,
      'x-default': es,
    })
  })
})

describe('prefersReducedMotion', () => {
  test('reflects the prefers-reduced-motion media query', () => {
    const original = window.matchMedia
    window.matchMedia = ((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
    })) as unknown as typeof window.matchMedia
    expect(prefersReducedMotion()).toBe(true)
    window.matchMedia = original
  })
})
