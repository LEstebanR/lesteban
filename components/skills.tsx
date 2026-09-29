'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { Section } from '@/components/section'

import { SKILLS } from '@/lib/data'

function SkillGroup({ skill, skills }: { skill: string; skills: string[] }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-muted-foreground text-sm">{skill}</h3>
      <ul className="font-heading flex flex-wrap text-xl">
        {skills.map((item) => (
          <li
            key={item}
            className="after:mr-1.5 after:content-[','] last:after:content-none"
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
    <Section title={dictionary.skills}>
      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        <SkillGroup
          skill={dictionary['frontend-development' as keyof typeof dictionary]}
          skills={SKILLS.frontend}
        />
        <SkillGroup
          skill={dictionary['backend-development' as keyof typeof dictionary]}
          skills={SKILLS.backend}
        />
        <SkillGroup
          skill={dictionary['database' as keyof typeof dictionary]}
          skills={SKILLS.database}
        />
        <SkillGroup
          skill={dictionary['programing-languages' as keyof typeof dictionary]}
          skills={SKILLS.programing_languages}
        />
      </div>
    </Section>
  )
}
