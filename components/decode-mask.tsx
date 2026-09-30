'use client'

import { useHostDecode } from '@/hooks/use-host-decode'

import { useRef } from 'react'

import { GLYPHS, randomGlyph } from '@/components/scramble-text'

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
 * counterpart of `ScrambleText`. Without JS the cells fade out on their own
 * (CSS fallback), so the image is never hidden for good.
 */
export function DecodeMask({
  cols = 12,
  rows = 12,
  duration = 1300,
  delay = 150,
}: DecodeMaskProps) {
  const ref = useRef<HTMLDivElement>(null)
  const clearedRows = useRef(0)

  const cells = () =>
    (ref.current as HTMLDivElement).children as HTMLCollectionOf<HTMLElement>

  useHostDecode(ref, {
    duration,
    delay,
    onStart: () => {
      clearedRows.current = 0
      for (const cell of Array.from(cells())) {
        cell.style.animation = 'none'
        cell.style.opacity = '1'
        cell.dataset.front = 'false'
      }
    },
    onFrame: (progress) => {
      const all = cells()
      const front = Math.floor(progress * rows)
      // Rows the front has passed since the last frame are cleared once
      for (let i = clearedRows.current * cols; i < front * cols; i++) {
        all[i].style.opacity = '0'
      }
      clearedRows.current = front
      // Rows still ahead keep shuffling; the front row is highlighted
      for (let i = front * cols; i < all.length; i++) {
        if (i < (front + 1) * cols) all[i].dataset.front = 'true'
        if (Math.random() < 0.35) all[i].textContent = randomGlyph()
      }
    },
  })

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
