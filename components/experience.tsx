'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import { useLang } from '@/hooks/use-lang'

import { ExperienceCard } from '@/components/cards/experience-card'
import { SeeMoreButton } from '@/components/ui/see-more-button'
import { EXPERIENCE } from '@/lib/data'

export function Experience() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-heading text-primary text-2xl font-bold">
        {dictionary['experience']}
      </h1>
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
  )
}
