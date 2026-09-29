'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { Code, Database, Layout, Server } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import { SKILLS } from '@/lib/data'

function Skill({
  skill,
  icon,
  skills,
}: {
  skill: string
  icon: React.ReactNode
  skills: string[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-heading text-base font-semibold">{skill}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          return (
            <Badge
              key={skill}
              variant="outline"
              className="bg-cyan-soft border-transparent font-mono text-xs font-medium"
              style={{
                backgroundColor: 'var(--cyan-soft)',
                color: '#0088a3',
              }}
            >
              {skill}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}

export function Skills() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-12">
      <p className="text-primary mb-6 font-mono text-xs font-medium tracking-wider uppercase">
        {dictionary.skills}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Skill
          skill={dictionary['frontend-development' as keyof typeof dictionary]}
          icon={<Layout className="text-primary h-5 w-5" />}
          skills={SKILLS.frontend}
        />
        <Skill
          skill={dictionary['backend-development' as keyof typeof dictionary]}
          icon={<Server className="text-primary h-5 w-5" />}
          skills={SKILLS.backend}
        />
        <Skill
          skill={dictionary['database' as keyof typeof dictionary]}
          icon={<Database className="text-primary h-5 w-5" />}
          skills={SKILLS.database}
        />
        <Skill
          skill={dictionary['programing-languages' as keyof typeof dictionary]}
          icon={<Code className="text-primary h-5 w-5" />}
          skills={SKILLS.programing_languages}
        />
      </div>
    </section>
  )
}
