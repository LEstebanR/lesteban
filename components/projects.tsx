'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ProjectCard } from '@/components/cards/project-card'
import { PosterTitle } from '@/components/poster-title'

import { PROJECTS } from '@/lib/data'

export function Projects() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <section className="flex flex-col gap-10">
      <PosterTitle>{dictionary['projects']}</PosterTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.name} project={project} tone={index} />
        ))}
      </div>
    </section>
  )
}
