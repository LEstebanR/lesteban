'use client'

import { useHostDecode } from '@/hooks/use-host-decode'

import { useRef } from 'react'

import { isHalloweenActive } from '@/lib/season'

export const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}=+*#%&'

/** Mixed in during the Halloween season: the decoder picks up interference. */
export const OCCULT_GLYPHS = '☾†‡✟◬⸸ᛟ'

export function randomGlyph(): string {
  const pool = isHalloweenActive() ? GLYPHS + OCCULT_GLYPHS : GLYPHS
  return pool[Math.floor(Math.random() * pool.length)]
}

interface ScrambleTextProps {
  text: string
  className?: string
  /** Duration of one decode pass in ms. */
  duration?: number
}

/**
 * Decodes `text` from random glyphs, left to right: once on mount and again
 * whenever the pointer enters the closest `[data-scramble-host]` (or itself).
 */
export function ScrambleText({
  text,
  className,
  duration = 700,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useHostDecode(ref, {
    duration,
    onFrame: (progress) => {
      const settled = Math.floor(progress * text.length)
      ;(ref.current as HTMLSpanElement).textContent = Array.from(
        text,
        (char, i) => (i < settled || char === ' ' ? char : randomGlyph())
      ).join('')
    },
  })

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  )
}
