'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { BlazeHeading } from '@/components/blaze-heading'
import { ContactCard, ContactLink } from '@/components/cards/contact-card'

import { resolveContactLinks } from '@/lib/data'

/** A trailhead signpost: one arrow per way to reach me. */
export function Contact() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const links = resolveContactLinks(false)

  return (
    <section className="flex flex-col gap-10 pb-20">
      <BlazeHeading>{dictionary['contact']}</BlazeHeading>
      <div className="relative mx-auto flex w-full max-w-xl flex-col gap-4 py-4">
        <span
          aria-hidden="true"
          className="bg-foreground/80 absolute top-0 bottom-[-40px] left-1/2 w-4 -translate-x-1/2 rounded-t-sm"
        />
        {links.map((link, index) => (
          <ContactCard
            key={link.label}
            link={link as ContactLink}
            flip={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}
