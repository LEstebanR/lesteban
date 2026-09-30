'use client'

import { useCallback, useEffect, useRef } from 'react'

import { GLYPHS } from '@/components/scramble-text'

interface DecodeMaskProps {
  cols?: number
  rows?: number
  /** Duration of one decode pass in ms. */
  duration?: number
  /** Delay before the first pass, to sync with the scan beam. */
  delay?: number
}

/**
 * A mosaic of glyph cells over an image that clears row by row, the image
 * counterpart of `ScrambleText`. Runs on mount and whenever the pointer
 * enters the closest `[data-scramble-host]`. Without JS the cells fade out
 * on their own (CSS fallback), so the image is never hidden for good.
 */
export function DecodeMask({
  cols = 12,
  rows = 12,
  duration = 1300,
  delay = 150,
}: DecodeMaskProps) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const decode = useCallback(() => {
    const grid = ref.current as HTMLDivElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cells = Array.from(grid.children) as HTMLElement[]
    cancelAnimationFrame(frame.current)
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const front = progress * rows
      cells.forEach((cell, i) => {
        const row = Math.floor(i / cols)
        cell.style.animation = 'none'
        if (row < Math.floor(front)) {
          cell.style.opacity = '0'
          return
        }
        cell.style.opacity = '1'
        cell.dataset.front = String(row === Math.floor(front))
        if (Math.random() < 0.35) {
          cell.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        }
      })
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }, [cols, rows, duration])

  useEffect(() => {
    const grid = ref.current as HTMLDivElement
    const host = grid.closest<HTMLElement>('[data-scramble-host]') ?? grid
    timer.current = setTimeout(decode, delay)
    host.addEventListener('pointerenter', decode)
    return () => {
      clearTimeout(timer.current)
      cancelAnimationFrame(frame.current)
      host.removeEventListener('pointerenter', decode)
    }
  }, [decode, delay])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="decode-mask absolute inset-0 z-[3] grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from({ length: cols * rows }, (_, i) => (
        <span key={i} className="decode-cell">
          {GLYPHS[(i * 7) % GLYPHS.length]}
        </span>
      ))}
    </div>
  )
}
