'use client'

import * as React from 'react'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative"
    >
      <Icon
        name="moon"
        className="text-foreground size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <Icon
        name="sun"
        className="text-foreground absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
