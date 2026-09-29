'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { BlazeHeading } from '@/components/blaze-heading'
import { ExperienceCard } from '@/components/cards/experience-card'
import { SeeMoreButton } from '@/components/ui/see-more-button'

import { EXPERIENCE } from '@/lib/data'

function RouteLog({ children }: { children: React.ReactNode }) {
  return (
    <ol className="rail-route relative flex flex-col gap-10 pl-10">
      {children}
    </ol>
  )
}

export function Experience() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <section className="flex flex-col gap-10">
      <BlazeHeading>{dictionary['experience']}</BlazeHeading>
      <RouteLog>
        <ExperienceCard job={EXPERIENCE.aleluya} current />
        <ExperienceCard job={EXPERIENCE.aleluya_freelance} />
      </RouteLog>
      <SeeMoreButton
        seeMoreCopy={dictionary['see-more']}
        seeLessCopy={dictionary['see-less']}
        count={2}
      >
        <RouteLog>
          <ExperienceCard job={EXPERIENCE.devpeoplz} />
          <ExperienceCard job={EXPERIENCE.nominapp} />
        </RouteLog>
      </SeeMoreButton>
    </section>
  )
}
