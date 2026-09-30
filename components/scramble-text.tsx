'use client'

import { useCallback, useEffect, useRef } from 'react'

export const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}=+*#%&'

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
  const frame = useRef(0)

  const decode = useCallback(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    cancelAnimationFrame(frame.current)
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const settled = Math.floor(progress * text.length)
      el.textContent = Array.from(text, (char, i) =>
        i < settled || char === ' '
          ? char
          : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      ).join('')
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }, [text, duration])

  useEffect(() => {
    const el = ref.current as HTMLSpanElement
    const host = el.closest<HTMLElement>('[data-scramble-host]') ?? el
    decode()
    host.addEventListener('pointerenter', decode)
    return () => {
      host.removeEventListener('pointerenter', decode)
      cancelAnimationFrame(frame.current)
    }
  }, [decode])

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  )
}
