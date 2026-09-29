'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { BlazeHeading } from '@/components/blaze-heading'
import { ProjectCard } from '@/components/cards/project-card'

import { PROJECTS } from '@/lib/data'

export function Projects() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <section className="flex flex-col gap-10">
      <BlazeHeading>{dictionary['projects']}</BlazeHeading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
