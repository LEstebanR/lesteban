'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import Link from 'next/link'

import { cn } from '@/lib/utils'

export type ContactLink = {
  label: string
  href: string | '#'
  user: string
  icon: string
  iconColor: string
}

export function ContactCard({ link }: { link: ContactLink }) {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const isStatic = link.href === '#'
  return (
    <Link
      href={link.href}
      target={isStatic ? '_self' : '_blank'}
      className={cn(
        'toy bg-card text-card-foreground flex flex-col rounded-lg px-5 py-3',
        isStatic ? 'pointer-events-none' : 'toy-press'
      )}
    >
      <span className="text-muted-foreground text-xs font-bold">
        {dictionary[link.label as keyof typeof dictionary]}
      </span>
      <span className="font-heading text-lg font-bold">{link.user}</span>
    </Link>
  )
}
