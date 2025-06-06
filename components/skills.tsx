'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Layout, Server } from 'lucide-react'
import { usePathname } from 'next/navigation'

const SKILLS = {
  frontend: ['React', 'Next', 'Tailwind'],
  backend: ['Node.js', 'Supabase'],
  database: ['MongoDB', 'PostgresSQL'],
  programing_languages: ['Javascript', 'Typescript'],
}

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
        <h3 className="text-lg font-bold">{skill}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          return (
            <Badge key={skill} variant="outline" className="bg-primary/10">
              {skill}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}

export function Skills() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'
  const dictionary = getClientDictionary(lang)
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary text-2xl font-bold">{dictionary.skills}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Skill
          skill={dictionary['frontend-development' as keyof typeof dictionary]}
          icon={
            <Layout className="h-5 w-5 animate-bounce text-blue-500 [animation-duration:1s]" />
          }
          skills={SKILLS.frontend}
        />
        <Skill
          skill={dictionary['backend-development' as keyof typeof dictionary]}
          icon={
            <Server className="h-5 w-5 animate-bounce text-green-500 [animation-duration:1s]" />
          }
          skills={SKILLS.backend}
        />
        <Skill
          skill={dictionary['database' as keyof typeof dictionary]}
          icon={
            <Database className="h-5 w-5 animate-bounce text-orange-500 [animation-duration:1s]" />
          }
          skills={SKILLS.database}
        />
        <Skill
          skill={dictionary['programing-languages' as keyof typeof dictionary]}
          icon={
            <Code className="h-5 w-5 animate-bounce text-red-500 [animation-duration:1s]" />
          }
          skills={SKILLS.programing_languages}
        />
      </div>
    </div>
  )
}
