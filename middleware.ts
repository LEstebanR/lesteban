import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'es']

export function getLocale(headers: {
  get: (key: string) => string | null
}): string {
  const acceptLanguage = headers.get('accept-language')?.split(',')[0]
  const language = acceptLanguage?.split('-')[0]
  return locales.includes(language || '') ? (language as string) : 'en'
}

/**
 * Bare paths that have a real localized page. Everything else should fall
 * through to the app router and 404, including unsupported locales.
 */
export function isLocalizablePath(pathname: string): boolean {
  if (pathname === '/') return true
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] !== 'blog') return false
  return parts.length === 1 || parts.length === 2
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return
  if (!isLocalizablePath(pathname)) return

  const locale = getLocale(request.headers)
  request.nextUrl.pathname =
    pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  // Use 301 (permanent redirect) for SEO - tells Google to index the destination URL
  return NextResponse.redirect(request.nextUrl, { status: 301 })
}

export const config = {
  // Only known unprefixed routes. A catch-all matcher would send unknown
  // paths (and unsupported locales) to /en/..., which the [lang] page then
  // rendered as the homepage.
  matcher: ['/', '/blog', '/blog/:path*'],
}
