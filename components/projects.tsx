'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ProjectCard } from '@/components/cards/project-card'
import { Reveal } from '@/components/reveal'
import { SectionTitle } from '@/components/section-title'

import { PROJECTS } from '@/lib/data'

export function Projects() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <section className="-mx-4 flex flex-col gap-10 overflow-x-clip px-4 md:-mx-8 md:px-8">
      <SectionTitle>{dictionary['projects']}</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.name}>
            <ProjectCard project={project} tone={index} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
