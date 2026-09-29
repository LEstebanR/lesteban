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
    <section id="experience" className="mx-auto max-w-4xl px-6 py-12">
      <p className="text-primary mb-6 font-mono text-xs font-medium tracking-wider uppercase">
        {dictionary['experience']}
      </p>
      <div className="flex flex-col gap-4">
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
