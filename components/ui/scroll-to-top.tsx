'use client'

import { useEffect, useState } from 'react'

import { ChevronUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

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
      aria-label="Scroll to top"
      className="animate-fade-in-scale fixed bottom-6 right-6 z-50 rounded-full shadow-md"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ChevronUp />
    </Button>
  )
}
