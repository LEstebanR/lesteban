import { describe, expect, test } from 'bun:test'
import { NextRequest } from 'next/server'

import { getLocale, middleware } from './middleware'

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

describe('middleware', () => {
  function makeRequest(pathname: string, acceptLanguage?: string) {
    return new NextRequest(new URL(`http://localhost${pathname}`), {
      headers: acceptLanguage ? { 'accept-language': acceptLanguage } : {},
    })
  }

  test('redirects /about to /en/about with status 301', () => {
    const res = middleware(makeRequest('/about'))
    expect(res).toBeDefined()
    expect(res?.status).toBe(301)
    expect(res?.headers.get('location')).toContain('/en/about')
  })

  test('redirects / to /en with status 301', () => {
    const res = middleware(makeRequest('/'))
    expect(res).toBeDefined()
    expect(res?.status).toBe(301)
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

  test('redirects to /es/about when Accept-Language is es', () => {
    const res = middleware(makeRequest('/about', 'es'))
    expect(res?.headers.get('location')).toContain('/es/about')
  })
})
