'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import Link from 'next/link'

import { Ghost, Heart } from 'lucide-react'

import { ScrambleText } from '@/components/scramble-text'

export function Footer() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <footer className="border-border w-full border-t">
      <div className="text-muted-foreground mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 font-mono text-xs md:px-8">
        <span>© {new Date().getFullYear()} Luis Esteban Ramírez</span>
        <span className="flex items-center gap-1.5">
          {dictionary['made-with' as keyof typeof dictionary]}
          <Heart className="season-off fill-secondary text-secondary size-3" />
          <Ghost className="season-only text-secondary size-3.5" />
          {dictionary['by' as keyof typeof dictionary]}
          <Link
            href={`/${lang}`}
            target="_self"
            data-scramble-host
            className="hover:text-primary text-foreground transition-colors"
          >
            <ScrambleText text="LEstebanR" duration={450} />
          </Link>
        </span>
      </div>
    </footer>
  )
}
