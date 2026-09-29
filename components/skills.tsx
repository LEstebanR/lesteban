'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { Check } from 'lucide-react'

import { BlazeHeading } from '@/components/blaze-heading'

import { SKILLS } from '@/lib/data'

function GearList({ skill, skills }: { skill: string; skills: string[] }) {
  return (
    <div className="bg-card flex flex-col gap-3 rounded-xl border p-6">
      <h3 className="font-heading border-border border-b-2 border-dashed pb-3 text-lg font-extrabold">
        {skill}
      </h3>
      <ul className="flex flex-col gap-2">
        {skills.map((item) => (
          <li key={item} className="flex items-center gap-3 font-medium">
            <span
              aria-hidden="true"
              className="border-primary text-primary flex size-5 items-center justify-center rounded-[4px] border-2"
            >
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <section className="flex flex-col gap-10">
      <BlazeHeading>{dictionary.skills}</BlazeHeading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <GearList
          skill={dictionary['frontend-development' as keyof typeof dictionary]}
          skills={SKILLS.frontend}
        />
        <GearList
          skill={dictionary['backend-development' as keyof typeof dictionary]}
          skills={SKILLS.backend}
        />
        <GearList
          skill={dictionary['database' as keyof typeof dictionary]}
          skills={SKILLS.database}
        />
        <GearList
          skill={dictionary['programing-languages' as keyof typeof dictionary]}
          skills={SKILLS.programing_languages}
        />
      </div>
    </section>
  )
}
