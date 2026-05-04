'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import { Code, Database, Layout, Server } from 'lucide-react'

import { useLang } from '@/hooks/use-lang'

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
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {icon}
        <h3 className="font-heading text-lg font-bold">{skill}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          return (
            <Badge
              key={skill}
              variant="outline"
              className="bg-primary/10 dark:bg-primary/20 text-primary/70 dark:text-primary/90 border-primary rounded-full text-sm"
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
    <div className="flex flex-col gap-4">
      <h1 className="font-heading text-primary text-2xl font-bold">{dictionary.skills}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Skill
          skill={dictionary['frontend-development' as keyof typeof dictionary]}
          icon={
            <Layout className="h-5 w-5 text-primary transition-transform duration-300 hover:scale-110" />
          }
          skills={SKILLS.frontend}
        />
        <Skill
          skill={dictionary['backend-development' as keyof typeof dictionary]}
          icon={
            <Server className="h-5 w-5 text-accent transition-transform duration-300 hover:scale-110" />
          }
          skills={SKILLS.backend}
        />
        <Skill
          skill={dictionary['database' as keyof typeof dictionary]}
          icon={
            <Database className="h-5 w-5 text-chart-5 transition-transform duration-300 hover:scale-110" />
          }
          skills={SKILLS.database}
        />
        <Skill
          skill={dictionary['programing-languages' as keyof typeof dictionary]}
          icon={
            <Code className="h-5 w-5 text-secondary transition-transform duration-300 hover:scale-110" />
          }
          skills={SKILLS.programing_languages}
        />
      </div>
    </div>
  )
}
