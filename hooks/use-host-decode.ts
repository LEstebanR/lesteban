import { RefObject, useEffect, useRef } from 'react'

import { prefersReducedMotion } from '@/lib/utils'

interface HostDecodeOptions {
  /** Length of one pass in ms. */
  duration: number
  /** Delay before the first pass, e.g. to sync with a CSS reveal. */
  delay?: number
  /** Called once at the start of every pass. */
  onStart?: () => void
  /** Called every animation frame with progress from 0 to 1. */
  onFrame: (progress: number) => void
}

/**
 * Drives a "decode" animation: one pass after `delay`, and another each time
 * the pointer enters the closest `[data-scramble-host]` around `ref` (or the
 * element itself). Skipped entirely under reduced motion.
 */
export function useHostDecode(
  ref: RefObject<HTMLElement | null>,
  { duration, delay = 0, onStart, onFrame }: HostDecodeOptions
) {
  const handlers = useRef({ onStart, onFrame })

  useEffect(() => {
    handlers.current = { onStart, onFrame }
  })

  useEffect(() => {
    const el = ref.current as HTMLElement
    const host = el.closest<HTMLElement>('[data-scramble-host]') ?? el
    let frame = 0

    const run = () => {
      if (prefersReducedMotion()) return
      cancelAnimationFrame(frame)
      handlers.current.onStart?.()
      const start = performance.now()
      const tick = (now: number) => {
        // rAF timestamps can predate `start`, so clamp to [0, 1]
        const progress = Math.min(Math.max((now - start) / duration, 0), 1)
        handlers.current.onFrame(progress)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const timer = setTimeout(run, delay)
    host.addEventListener('pointerenter', run)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frame)
      host.removeEventListener('pointerenter', run)
    }
  }, [ref, duration, delay])
}
