'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import { useLang } from '@/hooks/use-lang'

import { ProjectCard } from '@/components/cards/project-card'
import { PROJECTS } from '@/lib/data'

export function Projects() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-heading text-primary text-2xl font-bold">
        {dictionary['projects']}
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
