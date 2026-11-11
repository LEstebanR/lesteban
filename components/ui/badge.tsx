import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-halo focus-visible:ring-halo focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas aria-invalid:ring-alert/20 dark:aria-invalid:ring-alert/40 aria-invalid:border-alert transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-signal text-signal-ink [a&]:hover:bg-signal/90',
        secondary:
          'border-transparent bg-flare text-flare-ink dark:bg-flare/80 dark:text-flare-ink [a&]:hover:bg-flare/90',
        destructive:
          'border-transparent bg-alert text-white [a&]:hover:bg-alert/90 focus-visible:ring-alert/20 dark:focus-visible:ring-alert/40 dark:bg-alert/60',
        outline:
          'text-ink dark:text-ink/90 [a&]:hover:bg-tint [a&]:hover:text-tint-ink',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
