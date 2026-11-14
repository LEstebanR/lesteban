'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const dictionary = getClientDictionary(useLang())

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={dictionary['scroll-to-top']}
      className="animate-fade-in-scale fixed right-6 bottom-6 z-50 rounded-full shadow-md"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="chevron-up" />
    </Button>
  )
}
