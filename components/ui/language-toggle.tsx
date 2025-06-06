'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from './button'

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLang = pathname.split('/')[1] as 'en' | 'es'
  const nextLang = currentLang === 'en' ? 'es' : 'en'

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => router.push(`/${nextLang}`)}
    >
      {nextLang.toUpperCase()}
    </Button>
  )
}
