'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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
    <Link href={link.href} target={link.href === '#' ? '_self' : '_blank'}>
      <Card className="border-border hover:border-primary/35 hover:shadow-primary/10 cursor-pointer rounded-2xl border transition-all hover:shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
          <Image src={link.icon} alt={link.label} width={32} height={32} />
          <div className="flex flex-col gap-1">
            <CardTitle className="text-base font-semibold">
              {dictionary[link.label as keyof typeof dictionary]}
            </CardTitle>
            <CardDescription className="text-sm">{link.user}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}
