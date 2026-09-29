import { cn } from '@/lib/utils'

/**
 * Pops content in with a springy lift as it scrolls into view.
 * Pure CSS (scroll-driven animation), so content is never hidden without JS
 * or in browsers without `animation-timeline` support.
 */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('pop-in', className)}>{children}</div>
}
