'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import Link from 'next/link'

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
  return (
    <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-3 first:pt-0">
      <dt className="text-muted-foreground text-sm">
        {dictionary[link.label as keyof typeof dictionary]}
      </dt>
      <dd className="font-heading text-xl">
        <Link
          href={link.href}
          target={link.href === '#' ? '_self' : '_blank'}
          className={link.href === '#' ? 'pointer-events-none' : 'ink-link'}
        >
          {link.user}
        </Link>
      </dd>
    </div>
  )
}
