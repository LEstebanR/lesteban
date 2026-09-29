'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ExperienceCard } from '@/components/cards/experience-card'
import { Reveal } from '@/components/reveal'
import { SectionTitle } from '@/components/section-title'
import { SeeMoreButton } from '@/components/ui/see-more-button'

import { EXPERIENCE } from '@/lib/data'

export function Experience() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <section className="-mx-4 flex flex-col gap-10 overflow-x-clip px-4 md:-mx-8 md:px-8">
      <SectionTitle>{dictionary['experience']}</SectionTitle>
      <div className="flex flex-col gap-6">
        <Reveal>
          <ExperienceCard job={EXPERIENCE.aleluya} />
        </Reveal>
        <Reveal>
          <ExperienceCard job={EXPERIENCE.aleluya_freelance} />
        </Reveal>
        <SeeMoreButton
          seeMoreCopy={dictionary['see-more']}
          seeLessCopy={dictionary['see-less']}
          count={2}
        >
          <div className="flex flex-col gap-6 p-2">
            <ExperienceCard job={EXPERIENCE.devpeoplz} />
            <ExperienceCard job={EXPERIENCE.nominapp} />
          </div>
        </SeeMoreButton>
      </div>
    </section>
  )
}
