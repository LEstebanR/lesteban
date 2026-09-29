'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ContactCard, ContactLink } from '@/components/cards/contact-card'
import { Section } from '@/components/section'

import { resolveContactLinks } from '@/lib/data'

export function Contact() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const links = resolveContactLinks(false)

  return (
    <Section title={dictionary['contact']}>
      <dl className="divide-border flex flex-col divide-y">
        {links.map((link) => (
          <ContactCard key={link.label} link={link as ContactLink} />
        ))}
      </dl>
    </Section>
  )
}
