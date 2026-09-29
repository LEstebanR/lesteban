'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ContactCard, ContactLink } from '@/components/cards/contact-card'
import { SectionTitle } from '@/components/section-title'

import { resolveContactLinks } from '@/lib/data'

export function Contact() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const links = resolveContactLinks(false)

  return (
    <section className="flex flex-col gap-10 pb-24">
      <SectionTitle>{dictionary['contact']}</SectionTitle>
      <div className="toy bg-primary text-primary-foreground flex flex-col gap-8 rounded-xl p-8 md:p-12">
        <p className="font-heading max-w-2xl text-4xl leading-tight font-extrabold md:text-6xl">
          {dictionary['contact-cta']}
        </p>
        <ul className="flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <ContactCard link={link as ContactLink} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
