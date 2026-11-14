import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-halo focus-visible:ring-halo focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas aria-invalid:ring-alert/20 dark:aria-invalid:ring-alert/40 aria-invalid:border-alert cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-signal text-signal-ink shadow-xs hover:bg-signal/90',
        destructive:
          'bg-alert text-white shadow-xs hover:bg-alert/90 focus-visible:ring-alert/20 dark:focus-visible:ring-alert/40 dark:bg-alert/60',
        outline:
          'border bg-canvas shadow-xs hover:bg-tint hover:text-tint-ink dark:bg-field/30 dark:border-field dark:hover:bg-field/50',
        secondary: 'bg-flare text-flare-ink shadow-xs hover:bg-flare/80',
        ghost: 'hover:bg-tint hover:text-tint-ink dark:hover:bg-tint/50',
        link: 'text-signal underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
