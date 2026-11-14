'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useHasMounted } from '@/hooks/use-has-mounted'
import { useLang } from '@/hooks/use-lang'

import { useTheme } from 'next-themes'

import { ContactCard, ContactLink } from '@/components/cards/contact-card'
import { ScrambleText } from '@/components/scramble-text'
import { SectionHeading } from '@/components/section-heading'
import { Icon } from '@/components/ui/icon'
import { Skeleton } from '@/components/ui/skeleton'

import { CONTACT_EMAIL } from '@/lib/constants'
import { resolveContactLinks } from '@/lib/data'

export function Contact() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const { resolvedTheme } = useTheme()
  const mounted = useHasMounted()

  return (
    <section className="flex flex-col gap-4 pb-16">
      <SectionHeading>{dictionary['contact']}</SectionHeading>
      <div className="grid gap-8 py-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-16">
        <p className="text-ink/80 max-w-xl text-lg leading-relaxed text-pretty">
          {dictionary['contact-lead']}
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          data-scramble-host
          className="group hud-frame border-rule bg-panel hover:border-signal/60 focus-visible:ring-halo flex items-center gap-4 border px-5 py-4 transition-colors outline-none focus-visible:ring-2 md:min-w-80"
        >
          <Icon name="mail" className="text-signal size-5" />
          <span className="flex min-w-0 flex-col gap-1">
            <span className="font-heading group-hover:text-signal text-lg font-medium tracking-tight transition-colors">
              {dictionary['contact-cta']}
            </span>
            <ScrambleText
              text={CONTACT_EMAIL}
              duration={450}
              className="text-ink-dim truncate font-mono text-xs"
            />
          </span>
          <Icon
            name="arrow-up-right"
            className="text-ink-dim group-hover:text-signal ml-auto transition-[color,translate] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          />
        </a>
      </div>
      <div className="border-rule grid grid-cols-1 border-t md:grid-cols-2 md:gap-x-10">
        {mounted
          ? resolveContactLinks(resolvedTheme === 'dark').map((link, index) => (
              <ContactCard key={index} link={link as ContactLink} />
            ))
          : Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="border-rule flex items-center gap-4 border-b py-5"
              >
                <Skeleton className="size-6 shrink-0 rounded-full" />
                <Skeleton className="h-4 w-40 rounded-sm" />
              </div>
            ))}
      </div>
    </section>
  )
}
