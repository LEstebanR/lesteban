'use client'

import { useHostDecode } from '@/hooks/use-host-decode'

import { useRef } from 'react'

export const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}=+*#%&'

export function randomGlyph(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
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
