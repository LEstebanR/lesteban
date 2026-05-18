'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import { useTheme } from 'next-themes'

import { useHasMounted } from '@/hooks/use-has-mounted'
import { useLang } from '@/hooks/use-lang'

import { ContactCard, ContactLink } from '@/components/cards/contact-card'
import { Skeleton } from '@/components/ui/skeleton'
import { resolveContactLinks } from '@/lib/data'

export function Contact() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const { resolvedTheme } = useTheme()
  const mounted = useHasMounted()

  const CONTACT_LINKS = mounted ? resolveContactLinks(resolvedTheme === 'dark') : []
  if (!mounted) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="font-heading text-primary text-2xl font-bold">
          {dictionary['contact']}
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border py-6 px-6 flex items-center gap-4"
            >
              <Skeleton className="h-[35px] w-[35px] shrink-0 rounded-full" />
              <div className="flex flex-col gap-1.5 flex-1">
                <Skeleton className="h-4 w-28 rounded-md" />
                <Skeleton className="h-3 w-36 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-heading text-primary text-2xl font-bold">
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
