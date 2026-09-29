'use client'

import { useLang } from '@/hooks/use-lang'

import Link from 'next/link'

export function Footer() {
  const lang = useLang()

  return (
    <footer className="bg-secondary text-secondary-foreground w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 md:px-8">
        <Link
          href={`/${lang}`}
          target="_self"
          className="font-heading flex items-center gap-2 text-xl font-black"
        >
          <span
            aria-hidden="true"
            className="bg-primary h-5 w-2 rounded-[2px]"
          />
          LEstebanR
        </Link>
        <span className="font-mono text-xs opacity-80">
          © {new Date().getFullYear()} Luis Esteban Ramírez
        </span>
      </div>
    </footer>
  )
}
