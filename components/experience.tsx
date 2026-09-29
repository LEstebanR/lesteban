'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ExperienceCard } from '@/components/cards/experience-card'
import { Section } from '@/components/section'
import { SeeMoreButton } from '@/components/ui/see-more-button'

import { EXPERIENCE } from '@/lib/data'

export function Experience() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <Section title={dictionary['experience']}>
      <div className="flex flex-col gap-8">
        <ExperienceCard job={EXPERIENCE.aleluya} />
        <ExperienceCard job={EXPERIENCE.aleluya_freelance} />
        <SeeMoreButton
          seeMoreCopy={dictionary['see-more']}
          seeLessCopy={dictionary['see-less']}
          count={2}
        >
          <div className="flex flex-col gap-8">
            <ExperienceCard job={EXPERIENCE.devpeoplz} />
            <ExperienceCard job={EXPERIENCE.nominapp} />
          </div>
        </SeeMoreButton>
      </div>
    </Section>
  )
}
