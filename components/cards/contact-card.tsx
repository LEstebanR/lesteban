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
  const isStatic = link.href === '#'
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-sm font-bold opacity-70">
        {dictionary[link.label as keyof typeof dictionary]}
      </dt>
      <dd className="font-heading text-xl font-bold break-all md:text-2xl">
        <Link
          href={link.href}
          target={isStatic ? '_self' : '_blank'}
          className={
            isStatic
              ? 'pointer-events-none'
              : 'decoration-primary underline decoration-4 underline-offset-4'
          }
        >
          {link.user}
        </Link>
      </dd>
    </div>
  )
}
