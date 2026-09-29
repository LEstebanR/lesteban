'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  repo?: string
}
export function ProjectCard({ project }: { project: Project }) {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <article className="grid gap-3 py-7 first:pt-0 md:grid-cols-[1fr_auto] md:gap-x-10">
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-[1.75rem] leading-tight font-medium">
          {dictionary[project.name as keyof typeof dictionary]}
        </h3>
        <p className="text-foreground/80 max-w-[58ch] leading-relaxed">
          {dictionary[project.description as keyof typeof dictionary]}
        </p>
        <ul className="text-muted-foreground flex flex-wrap text-sm">
          {project.stack.map((stack) => (
            <li
              key={stack}
              className="after:mr-1 after:content-[','] last:after:content-none"
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-5 text-sm md:flex-col md:items-end md:gap-2 md:pt-2">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="ink-link text-primary"
          >
            {dictionary['live-demo']}
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="ink-link"
          >
            {dictionary['code']}
          </a>
        )}
      </div>
    </article>
  )
}
