'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import Image from 'next/image'
import Link from 'next/link'

export type ContactLink = {
  label: string
  href: string
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
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="border-border bg-card hover:border-primary/35 hover:shadow-primary/10 flex items-center gap-4 rounded-2xl border p-6 transition-all hover:shadow-lg">
        <div className="shrink-0">
          <Image
            src={link.icon}
            alt={link.label}
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-foreground mb-1 text-base font-semibold">
            {dictionary[link.label as keyof typeof dictionary]}
          </h3>
          <p className="text-muted-foreground truncate text-sm">{link.user}</p>
        </div>
      </div>
    </Link>
  )
}
