import { describe, expect, test } from 'bun:test'

import { cn, getCanonicalUrl } from './utils'

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
    expect(getCanonicalUrl('/about')).toBe('https://lesteban.dev/about')
  })

  test('adds leading slash when path has none', () => {
    expect(getCanonicalUrl('about')).toBe('https://lesteban.dev/about')
  })

  test('does not duplicate the leading slash', () => {
    const url = getCanonicalUrl('/about')
    expect(url).not.toContain('lesteban.dev//')
  })

  test('works with nested paths', () => {
    expect(getCanonicalUrl('/blog/my-post')).toBe(
      'https://lesteban.dev/blog/my-post'
    )
  })

  test('works with locale prefix', () => {
    expect(getCanonicalUrl('/en/blog/my-post')).toBe(
      'https://lesteban.dev/en/blog/my-post'
    )
  })

  test('works with root path', () => {
    expect(getCanonicalUrl('/')).toBe('https://lesteban.dev/')
  })
})
