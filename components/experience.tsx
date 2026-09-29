'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ExperienceCard } from '@/components/cards/experience-card'
import { SectionHeading } from '@/components/section-heading'
import { SeeMoreButton } from '@/components/ui/see-more-button'

import { EXPERIENCE } from '@/lib/data'

export function Experience() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <section className="flex flex-col gap-8">
      <SectionHeading>{dictionary['experience']}</SectionHeading>
      <ol className="border-border flex flex-col gap-10 border-l pl-6 md:pl-8">
        <ExperienceCard job={EXPERIENCE.aleluya} current />
        <ExperienceCard job={EXPERIENCE.aleluya_freelance} />
      </ol>
      <SeeMoreButton
        seeMoreCopy={dictionary['see-more']}
        seeLessCopy={dictionary['see-less']}
        count={2}
      >
        <ol className="border-border flex flex-col gap-10 border-l pl-6 md:pl-8">
          <ExperienceCard job={EXPERIENCE.devpeoplz} />
          <ExperienceCard job={EXPERIENCE.nominapp} />
        </ol>
      </SeeMoreButton>
    </section>
  )
}
