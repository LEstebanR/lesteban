'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { PosterTitle } from '@/components/poster-title'

import { SKILLS } from '@/lib/data'

const INKS = ['text-primary', 'text-teal', 'text-foreground']
const SIZES = [
  'text-4xl md:text-6xl',
  'text-3xl md:text-5xl',
  'text-2xl md:text-4xl',
]

function SkillSet({ skill, skills }: { skill: string; skills: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-muted-foreground text-sm font-bold">{skill}</h3>
      <ul className="font-heading flex flex-wrap items-baseline gap-x-5 gap-y-1 leading-none font-black tracking-tight">
        {skills.map((item, i) => (
          <li
            key={item}
            className={`${INKS[i % INKS.length]} ${SIZES[i % SIZES.length]}`}
          >
            {item}
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
      <PosterTitle>{dictionary.skills}</PosterTitle>
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        <SkillSet
          skill={dictionary['frontend-development' as keyof typeof dictionary]}
          skills={SKILLS.frontend}
        />
        <SkillSet
          skill={dictionary['backend-development' as keyof typeof dictionary]}
          skills={SKILLS.backend}
        />
        <SkillSet
          skill={dictionary['database' as keyof typeof dictionary]}
          skills={SKILLS.database}
        />
        <SkillSet
          skill={dictionary['programing-languages' as keyof typeof dictionary]}
          skills={SKILLS.programing_languages}
        />
      </div>
    </section>
  )
}
