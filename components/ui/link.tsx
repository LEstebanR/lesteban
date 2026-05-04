import { default as NextLink } from 'next/link'

import { cn } from '@/lib/utils'

export function Link({
  children,
  href,
  withIcon = false,
  icon,
  target = '_blank',
  className,
}: {
  children: React.ReactNode
  href: string
  withIcon?: boolean
  icon?: React.ReactNode
  target?: string
  className?: string
}) {
  return (
    <NextLink
      href={href}
      target={target}
      className={cn(
        'hover:text-primary hover:animate-underline-link decoration-2 underline-offset-4 transition-all duration-300 hover:underline',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
        className
      )}
    >
      <div className="flex flex-row items-center gap-1">
        {withIcon && icon}
        {children}
      </div>
    </NextLink>
  )
}
