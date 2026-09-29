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

/** One signpost arrow. Alternating arrows point the other way. */
export function ContactCard({
  link,
  flip = false,
}: {
  link: ContactLink
  flip?: boolean
}) {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const isStatic = link.href === '#'
  return (
    <Link
      href={link.href}
      target={isStatic ? '_self' : '_blank'}
      className={cn(
        'sign-arrow bg-secondary text-secondary-foreground focus-visible:ring-ring relative z-10 flex w-[88%] flex-col px-6 py-3 outline-none focus-visible:ring-4 sm:w-4/5',
        flip
          ? 'flip self-end pl-10 text-right [clip-path:polygon(0_50%,1.5rem_0,100%_0,100%_100%,1.5rem_100%)]'
          : 'pr-10 [clip-path:polygon(0_0,calc(100%-1.5rem)_0,100%_50%,calc(100%-1.5rem)_100%,0_100%)]',
        isStatic && 'pointer-events-none'
      )}
    >
      <span className="text-primary font-mono text-xs">
        {dictionary[link.label as keyof typeof dictionary]}
      </span>
      <span className="font-heading truncate text-xl font-extrabold">
        {link.user}
      </span>
    </Link>
  )
}
