'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'
  const dictionary = getClientDictionary(lang)
  return (
    <Link href={link.href} target={link.href === '#' ? '_self' : '_blank'}>
      <Card className="border-secondary cursor-pointer">
        <CardHeader className="flex items-center gap-4">
          <Image src={link.icon} alt={link.label} width={35} height={35} />
          <div className="flex flex-col gap-1">
            <CardTitle>
              {dictionary[link.label as keyof typeof dictionary]}
            </CardTitle>
            <CardDescription>{link.user}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}
