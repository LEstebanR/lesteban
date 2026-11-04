import type { SVGProps } from 'react'

import { cn } from '@/lib/utils'

/*
 * The site's own icon set, drawn on a 24px grid in the console language:
 * square caps, mitred joins, straight segments where a stock set would curve.
 * Kept deliberately small — only icons that do a job (navigate, toggle,
 * disclose) belong here.
 */
const GLYPHS = {
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  'chevron-up': <path d="M6 15l6-6 6 6" />,
  'chevron-down': <path d="M6 9l6 6 6-6" />,
  'chevron-right': <path d="M9 6l6 6-6 6" />,
  'arrow-up-right': <path d="M7 17L17 7M9 7h8v8" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  more: (
    <path
      d="M5 11h2v2H5zM11 11h2v2h-2zM17 11h2v2h-2z"
      fill="currentColor"
      stroke="none"
    />
  ),
  dot: <path d="M9 9h6v6H9z" fill="currentColor" stroke="none" />,
  mail: <path d="M3.5 5.5h17v13h-17zM3.5 6l8.5 7 8.5-7" />,
  sun: (
    <path d="M8.5 8.5h7v7h-7zM12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
  ),
  moon: <path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z" />,
  /* Pixel heart: the footer sign-off, in the same 8-bit voice as the HUD */
  heart: (
    <path
      d="M4.5 6h5v2h5V6h5v2h2v5h-2v2h-2v2h-2v2h-2v2h-1v-2h-2v-2h-2v-2h-2v-2h-2V8h2z"
      fill="currentColor"
      stroke="none"
    />
  ),
} as const

export type IconName = keyof typeof GLYPHS

export function Icon({
  name,
  className,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={cn('size-4 shrink-0', className)}
      {...props}
    >
      {GLYPHS[name]}
    </svg>
  )
}
