import { getLocale, isLocalizablePath, middleware } from './middleware'
import { describe, expect, test } from 'bun:test'

import { NextRequest } from 'next/server'

describe('getLocale', () => {
  const headers = (value: string | null) => ({
    get: (key: string) => (key === 'accept-language' ? value : null),
  })

  test('returns "es" for Accept-Language: es', () => {
    expect(getLocale(headers('es'))).toBe('es')
  })

  test('returns "en" for Accept-Language: en-US', () => {
    expect(getLocale(headers('en-US'))).toBe('en')
  })

  test('returns "es" for Accept-Language: es-CO', () => {
    expect(getLocale(headers('es-CO'))).toBe('es')
  })

  test('returns "en" fallback for unsupported locale', () => {
    expect(getLocale(headers('fr'))).toBe('en')
  })

  test('returns "en" fallback when header is absent', () => {
    expect(getLocale(headers(null))).toBe('en')
  })
})

describe('isLocalizablePath', () => {
  test('accepts the home page, blog index, and a single post slug', () => {
    expect(isLocalizablePath('/')).toBe(true)
    expect(isLocalizablePath('/blog')).toBe(true)
    expect(isLocalizablePath('/blog/first-marathon')).toBe(true)
  })

  test('rejects unknown paths, extra segments, and unsupported locales', () => {
    expect(isLocalizablePath('/about')).toBe(false)
    expect(isLocalizablePath('/fr')).toBe(false)
    expect(isLocalizablePath('/fr/blog')).toBe(false)
    expect(isLocalizablePath('/blog/a/b')).toBe(false)
    expect(isLocalizablePath('/manifest.webmanifest')).toBe(false)
  })
})

describe('middleware', () => {
  function makeRequest(pathname: string, acceptLanguage?: string) {
    return new NextRequest(new URL(`http://localhost${pathname}`), {
      headers: acceptLanguage ? { 'accept-language': acceptLanguage } : {},
    })
  }

  test('redirects / to /en with status 301', () => {
    const res = middleware(makeRequest('/'))
    expect(res).toBeDefined()
    expect(res?.status).toBe(301)
    expect(res?.headers.get('location')).toContain('/en')
  })

  test('redirects /blog to /en/blog with status 301', () => {
    const res = middleware(makeRequest('/blog'))
    expect(res?.status).toBe(301)
    expect(res?.headers.get('location')).toContain('/en/blog')
  })

  test('redirects /blog/:slug to the localized post', () => {
    const res = middleware(makeRequest('/blog/first-marathon'))
    expect(res?.status).toBe(301)
    expect(res?.headers.get('location')).toContain('/en/blog/first-marathon')
  })

  test('does not redirect unknown paths', () => {
    expect(middleware(makeRequest('/about'))).toBeUndefined()
    expect(middleware(makeRequest('/fr'))).toBeUndefined()
    expect(middleware(makeRequest('/random-thing'))).toBeUndefined()
    expect(middleware(makeRequest('/manifest.webmanifest'))).toBeUndefined()
    expect(middleware(makeRequest('/blog/a/b'))).toBeUndefined()
  })

  test('does not redirect /en/about', () => {
    const res = middleware(makeRequest('/en/about'))
    expect(res).toBeUndefined()
  })

  test('does not redirect /es/blog', () => {
    const res = middleware(makeRequest('/es/blog'))
    expect(res).toBeUndefined()
  })

  test('does not redirect /en (exact locale path)', () => {
    const res = middleware(makeRequest('/en'))
    expect(res).toBeUndefined()
  })

  test('redirects /blog to /es/blog when Accept-Language is es', () => {
    const res = middleware(makeRequest('/blog', 'es'))
    expect(res?.headers.get('location')).toContain('/es/blog')
  })

  test('redirects / to /es when Accept-Language is es', () => {
    const res = middleware(makeRequest('/', 'es'))
    expect(res?.status).toBe(301)
    expect(res?.headers.get('location')).toContain('/es')
  })
})
