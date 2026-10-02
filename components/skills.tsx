'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { CornerWeb } from '@/components/corner-web'
import { SectionHeading } from '@/components/section-heading'

import { SKILLS } from '@/lib/data'

function SkillRow({ skill, skills }: { skill: string; skills: string[] }) {
  return (
    <div className="border-border grid gap-3 border-b py-5 md:grid-cols-[240px_1fr] md:items-center">
      <h3 className="text-muted-foreground text-sm">{skill}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((item, index) => (
          <li
            key={item}
            style={{ '--i': index } as React.CSSProperties}
            className="chip-seq border-border bg-card hover:border-primary hover:text-primary rounded-sm border px-3 py-1.5 font-mono text-sm transition-colors"
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
    <section className="relative flex flex-col gap-4">
      <CornerWeb />
      <SectionHeading>{dictionary.skills}</SectionHeading>
      <div className="border-border border-t">
        <SkillRow
          skill={dictionary['frontend-development' as keyof typeof dictionary]}
          skills={SKILLS.frontend}
        />
        <SkillRow
          skill={dictionary['backend-development' as keyof typeof dictionary]}
          skills={SKILLS.backend}
        />
        <SkillRow
          skill={dictionary['database' as keyof typeof dictionary]}
          skills={SKILLS.database}
        />
        <SkillRow
          skill={dictionary['programing-languages' as keyof typeof dictionary]}
          skills={SKILLS.programing_languages}
        />
      </div>
    </section>
  )
}
