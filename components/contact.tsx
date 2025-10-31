'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import { useTheme } from 'next-themes'

import { ContactCard, ContactLink } from '@/components/cards/contact-card'

export function Contact() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'
  const dictionary = getClientDictionary(lang)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const CONTACT_LINKS = mounted
    ? [
        {
          label: 'github',
          href: 'https://github.com/LEstebanR',
          user: 'LEstebanR',
          icon:
            theme === 'dark'
              ? '/logos/github_dark.svg'
              : '/logos/github_light.svg',
        },
        {
          label: 'linkedin',
          href: 'https://www.linkedin.com/in/lestebanr/',
          user: 'Luis Esteban',
          icon: '/logos/linkedin.svg',
        },
        {
          label: 'email',
          href: 'mailto:leramirezca@gmail.com',
          user: 'leramirezca@gmail.com',
          icon:
            theme === 'dark' ? '/logos/mail_dark.svg' : '/logos/mail_light.svg',
        },
        {
          label: 'location',
          user: 'Colombia',
          icon:
            theme === 'dark'
              ? '/logos/location_dark.svg'
              : '/logos/location_light.svg',
          href: '#',
        },
      ]
    : []
  if (!mounted) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-primary text-2xl font-bold">
          {dictionary['contact']}
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Placeholder para evitar layout shift */}
          <div className="h-24" />
          <div className="h-24" />
          <div className="h-24" />
          <div className="h-24" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary text-2xl font-bold">
        {dictionary['contact']}
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CONTACT_LINKS.map((link, index) => (
          <ContactCard key={index} link={link as ContactLink} />
        ))}
      </div>
    </div>
  )
}
