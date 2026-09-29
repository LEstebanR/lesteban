'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ContactCard, ContactLink } from '@/components/cards/contact-card'

import { resolveContactLinks } from '@/lib/data'

export function Contact() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const links = resolveContactLinks(false)

  return (
    <section className="bg-secondary text-secondary-foreground relative isolate mb-20 overflow-hidden p-8 md:p-14">
      <div
        aria-hidden="true"
        className="ink on-paper drift bg-primary absolute -right-24 -bottom-32 -z-10 size-56 rounded-full md:-right-16 md:-bottom-24 md:size-80"
      />
      <div
        aria-hidden="true"
        className="ink on-paper drift bg-teal absolute top-10 right-40 -z-10 hidden size-40 [clip-path:polygon(50%_0,100%_100%,0_100%)] md:block"
        style={{ '--dur': '20s', '--dx': '-16px' } as React.CSSProperties}
      />
      <h2 className="font-heading mb-10 text-[clamp(2.5rem,9vw,6rem)] leading-[0.9] font-black tracking-tight">
        {dictionary['contact']}
      </h2>
      <dl className="grid gap-6 sm:grid-cols-2">
        {links.map((link) => (
          <ContactCard key={link.label} link={link as ContactLink} />
        ))}
      </dl>
    </section>
  )
}
