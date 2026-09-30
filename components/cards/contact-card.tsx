'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import Image from 'next/image'
import Link from 'next/link'

import { ScrambleText } from '@/components/scramble-text'

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
    <Link
      href={link.href}
      target={link.href === '#' ? '_self' : '_blank'}
      data-scramble-host
      className="group border-border focus-visible:ring-ring flex items-center gap-4 border-b py-5 outline-none focus-visible:ring-2"
    >
      <Image src={link.icon} alt={link.label} width={22} height={22} />
      <span className="text-muted-foreground w-24 shrink-0 text-sm">
        {dictionary[link.label as keyof typeof dictionary]}
      </span>
      <ScrambleText
        text={link.user}
        duration={450}
        className="group-hover:text-primary truncate font-mono text-sm transition-colors"
      />
    </Link>
  )
}
