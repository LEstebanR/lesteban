'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LucideIcon } from 'lucide-react'

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
  icon: LucideIcon
  iconColor: string
}

export function ContactCard({ link }: { link: ContactLink }) {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'
  const dictionary = getClientDictionary(lang)
  return (
    <Link href={link.href} target={link.href === '#' ? '_self' : '_blank'}>
      <Card className="border-primary cursor-pointer">
        <CardHeader className="flex items-center gap-2">
          <link.icon className={`${link.iconColor} h-6 w-6`} />
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
