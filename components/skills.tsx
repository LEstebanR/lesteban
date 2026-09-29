'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { Reveal } from '@/components/reveal'
import { SectionTitle } from '@/components/section-title'

import { SKILLS } from '@/lib/data'

const ROTATIONS = ['-5deg', '4deg', '-2deg', '6deg']

function SkillBox({
  skill,
  skills,
  tone,
}: {
  skill: string
  skills: string[]
  tone: string
}) {
  return (
    <div className="toy bg-card flex h-full flex-col gap-5 rounded-xl p-6">
      <h3 className="font-heading text-xl font-bold">{skill}</h3>
      <ul className="flex flex-wrap gap-3">
        {skills.map((item, i) => (
          <li
            key={item}
            style={
              { '--r': ROTATIONS[i % ROTATIONS.length] } as React.CSSProperties
            }
            className={`sticker toy rounded-full px-4 py-1.5 font-bold ${tone}`}
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
    <section className="-mx-4 flex flex-col gap-10 overflow-x-clip px-4 md:-mx-8 md:px-8">
      <SectionTitle>{dictionary.skills}</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal>
          <SkillBox
            skill={
              dictionary['frontend-development' as keyof typeof dictionary]
            }
            skills={SKILLS.frontend}
            tone="bg-primary text-primary-foreground"
          />
        </Reveal>
        <Reveal>
          <SkillBox
            skill={dictionary['backend-development' as keyof typeof dictionary]}
            skills={SKILLS.backend}
            tone="bg-pink text-pink-foreground"
          />
        </Reveal>
        <Reveal>
          <SkillBox
            skill={dictionary['database' as keyof typeof dictionary]}
            skills={SKILLS.database}
            tone="bg-secondary text-secondary-foreground"
          />
        </Reveal>
        <Reveal>
          <SkillBox
            skill={
              dictionary['programing-languages' as keyof typeof dictionary]
            }
            skills={SKILLS.programing_languages}
            tone="bg-accent text-accent-foreground"
          />
        </Reveal>
      </div>
    </section>
  )
}
