'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import Link from 'next/link'

import { Heart } from 'lucide-react'

export function Footer() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <footer className="my-8 w-full">
      <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-2 text-sm">
        <span>{dictionary['made-with' as keyof typeof dictionary]}</span>
        <Heart className="fill-primary text-primary h-4 w-4" />
        <span>{dictionary['by' as keyof typeof dictionary]}</span>
        <Link
          href={`/${lang}`}
          target="_self"
          className="hover:text-primary font-medium transition-colors"
        >
          LEstebanR
        </Link>
      </div>
    </footer>
  )
}
