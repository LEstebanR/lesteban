import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'es']

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')?.split(',')[0]
  // Extract the language part (e.g., "en" from "en-US")
  const language = acceptLanguage?.split('-')[0]
  // Return the language if it's supported, otherwise default to "en"
  return locales.includes(language || '') ? language : 'en'
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Excluye _next, api, y cualquier archivo con extensión (estáticos)
    '/((?!_next/static|_next/image|api|favicon.ico|.*\.[^/]+$).*)',
  ],
}
