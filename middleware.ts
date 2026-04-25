import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'es']

export function getLocale(headers: { get: (key: string) => string | null }): string {
  const acceptLanguage = headers.get('accept-language')?.split(',')[0]
  const language = acceptLanguage?.split('-')[0]
  return locales.includes(language || '') ? (language as string) : 'en'
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request.headers)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en/products
  // Use 301 (permanent redirect) for SEO - tells Google to index the destination URL
  return NextResponse.redirect(request.nextUrl, { status: 301 })
}

export const config = {
  matcher: [
    // Excluye _next, api, y cualquier archivo con extensión (estáticos)
    '/((?!_next/static|_next/image|api|favicon.ico|.*\.[^/]+$).*)',
  ],
}
