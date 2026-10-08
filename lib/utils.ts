import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { BASE_URL } from '@/lib/constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCanonicalUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_URL}${cleanPath}`
}

/** Absolute URL for structured data and other consumers that reject site-relative paths. */
export function toAbsoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return getCanonicalUrl(path)
}

/**
 * hreflang set for a localized URL. `x-default` is always the English URL
 * when that version exists, so both pages in a pair advertise the same default.
 */
export function getLanguageAlternates(
  lang: 'en' | 'es',
  canonicalUrl: string,
  alternateUrl?: string
): Record<string, string> {
  const alternateLang = lang === 'en' ? 'es' : 'en'
  const languages: Record<string, string> = {
    [lang]: canonicalUrl,
  }
  if (alternateUrl) {
    languages[alternateLang] = alternateUrl
  }
  languages['x-default'] =
    lang === 'en' ? canonicalUrl : (alternateUrl ?? canonicalUrl)
  return languages
}

/** Whether the visitor asked the OS to minimise non-essential motion. */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
