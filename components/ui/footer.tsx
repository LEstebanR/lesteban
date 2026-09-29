'use client'

import { useLang } from '@/hooks/use-lang'

import Link from 'next/link'

export function Footer() {
  const lang = useLang()

  return (
    <footer className="mx-auto w-full max-w-6xl px-4 md:px-8">
      <div className="border-primary flex flex-wrap items-end justify-between gap-4 border-t-2 border-dotted py-8">
        <Link
          href={`/${lang}`}
          target="_self"
          className="font-heading misregister text-3xl font-black tracking-tight"
        >
          LEstebanR
        </Link>
        <span className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} Luis Esteban Ramírez
        </span>
      </div>
    </footer>
  )
}
