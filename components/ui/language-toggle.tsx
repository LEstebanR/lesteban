'use client'

import { Button } from './button'

import { usePathname, useRouter } from 'next/navigation'

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const currentLang = segments[0] === 'en' || segments[0] === 'es'
    ? (segments[0] as 'en' | 'es')
    : 'en'
  const nextLang = currentLang === 'en' ? 'es' : 'en'
  const pathWithoutLang = segments[0] === 'en' || segments[0] === 'es'
    ? segments.slice(1)
    : segments
  const pathAfterLang = pathWithoutLang.length > 0
    ? `/${pathWithoutLang.join('/')}`
    : ''

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => router.push(`/${nextLang}${pathAfterLang}`)}
    >
      {nextLang.toUpperCase()}
    </Button>
  )
}
