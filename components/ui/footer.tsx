'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import Link from 'next/link'

import { Heart } from 'lucide-react'

export function Footer() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <footer className="border-border w-full border-t">
      <div className="text-muted-foreground mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 font-mono text-xs md:px-8">
        <span>© {new Date().getFullYear()} Luis Esteban Ramírez</span>
        <span className="flex items-center gap-1.5">
          {dictionary['made-with' as keyof typeof dictionary]}
          <Heart className="fill-secondary text-secondary size-3" />
          {dictionary['by' as keyof typeof dictionary]}
          <Link
            href={`/${lang}`}
            target="_self"
            className="hover:text-primary text-foreground transition-colors"
          >
            LEstebanR
          </Link>
        </span>
      </div>
    </footer>
  )
}
