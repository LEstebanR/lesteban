'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ExperienceCard } from '@/components/cards/experience-card'
import { PosterTitle } from '@/components/poster-title'
import { SeeMoreButton } from '@/components/ui/see-more-button'

import { EXPERIENCE } from '@/lib/data'

export function Experience() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <section className="flex flex-col gap-10">
      <PosterTitle>{dictionary['experience']}</PosterTitle>
      <div className="flex flex-col">
        <ExperienceCard job={EXPERIENCE.aleluya} />
        <ExperienceCard job={EXPERIENCE.aleluya_freelance} />
        <SeeMoreButton
          seeMoreCopy={dictionary['see-more']}
          seeLessCopy={dictionary['see-less']}
          count={2}
        >
          <ExperienceCard job={EXPERIENCE.devpeoplz} />
          <ExperienceCard job={EXPERIENCE.nominapp} />
        </SeeMoreButton>
      </div>
    </section>
  )
}
