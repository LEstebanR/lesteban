'use client'

import { useLang } from '@/hooks/use-lang'

import Link from 'next/link'

export function Footer() {
  const lang = useLang()

  return (
    <footer className="bg-foreground text-background w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-end justify-between gap-6 px-4 py-10 md:px-8">
        <Link
          href={`/${lang}`}
          target="_self"
          className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          LEstebanR
        </Link>
        <span className="text-sm font-semibold opacity-70">
          © {new Date().getFullYear()} Luis Esteban Ramírez
        </span>
      </div>
    </footer>
  )
}
