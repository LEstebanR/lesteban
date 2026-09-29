'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ProjectCard } from '@/components/cards/project-card'
import { Section } from '@/components/section'

import { PROJECTS } from '@/lib/data'

export function Projects() {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <Section title={dictionary['projects']}>
      <div className="divide-border flex flex-col divide-y">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
