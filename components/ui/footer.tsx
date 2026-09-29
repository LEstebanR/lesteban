'use client'

import { useLang } from '@/hooks/use-lang'

import Link from 'next/link'

export function Footer() {
  const lang = useLang()

  return (
    <footer className="mx-auto w-full max-w-5xl px-5 md:px-10">
      <div className="border-border text-muted-foreground flex flex-wrap items-baseline justify-between gap-3 border-t py-8 text-sm">
        <span className="font-heading text-foreground text-base">
          Luis Esteban Ramírez
        </span>
        <span>
          © {new Date().getFullYear()} ·{' '}
          <Link href={`/${lang}`} target="_self" className="ink-link">
            LEstebanR
          </Link>
        </span>
      </div>
    </footer>
  )
}
