'use client'

import { useLang } from '@/hooks/use-lang'

import { ProjectCard } from '@/components/cards/project-card'

import { PROJECTS } from '@/lib/data'

export function Projects() {
  const lang = useLang()
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-12">
      <p className="text-primary mb-6 font-mono text-xs font-medium tracking-wider uppercase">
        {lang === 'es' ? 'Proyectos destacados' : 'Featured Projects'}
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
