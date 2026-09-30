'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useHasMounted } from '@/hooks/use-has-mounted'
import { useLang } from '@/hooks/use-lang'

import { useTheme } from 'next-themes'

import { ContactCard, ContactLink } from '@/components/cards/contact-card'
import { SectionHeading } from '@/components/section-heading'
import { Skeleton } from '@/components/ui/skeleton'

import { resolveContactLinks } from '@/lib/data'

export function Contact() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const { resolvedTheme } = useTheme()
  const mounted = useHasMounted()

  return (
    <section className="flex flex-col gap-4 pb-16">
      <SectionHeading>{dictionary['contact']}</SectionHeading>
      <div className="border-border grid grid-cols-1 border-t md:grid-cols-2 md:gap-x-10">
        {mounted
          ? resolveContactLinks(resolvedTheme === 'dark').map((link, index) => (
              <ContactCard key={index} link={link as ContactLink} />
            ))
          : Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="border-border flex items-center gap-4 border-b py-5"
              >
                <Skeleton className="size-6 shrink-0 rounded-full" />
                <Skeleton className="h-4 w-40 rounded-sm" />
              </div>
            ))}
      </div>
    </section>
  )
}
