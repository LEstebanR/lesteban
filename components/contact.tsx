'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ContactCard } from '@/components/cards/contact-card'

import { CONTACT_LINKS_STATIC } from '@/lib/data'

export function Contact() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  const CONTACT_LINKS = CONTACT_LINKS_STATIC.map(({ lightIcon, ...rest }) => ({
    ...rest,
    icon: lightIcon,
    iconColor: '',
  }))

  return (
    <section id="contact" className="mx-auto w-full max-w-4xl px-6 py-12">
      <p className="text-primary mb-6 font-mono text-xs font-medium tracking-wider uppercase">
        {dictionary['contact']}
      </p>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {CONTACT_LINKS.map((link, index) => (
          <ContactCard key={index} link={link} />
        ))}
      </div>
    </section>
  )
}
