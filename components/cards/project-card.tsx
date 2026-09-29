'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ArrowUpRight } from 'lucide-react'

type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  repo?: string
}

/** A trail sign: forest panel, cream lettering, routed border. */
export function ProjectCard({ project }: { project: Project }) {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <article className="group bg-secondary text-secondary-foreground relative flex h-full flex-col gap-4 rounded-xl p-2 transition-transform duration-300 hover:-translate-y-1">
      <div className="border-secondary-foreground/40 flex h-full flex-col gap-4 rounded-lg border-2 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-3xl font-black tracking-tight">
            {dictionary[project.name as keyof typeof dictionary]}
          </h3>
          <svg
            aria-hidden="true"
            viewBox="0 0 32 24"
            className="text-primary mt-1 w-9 shrink-0 transition-transform duration-500 group-hover:-translate-y-1"
          >
            <path d="M1 23 L12 5 L18 14 L22 9 L31 23 Z" fill="currentColor" />
          </svg>
        </div>
        <p className="flex-1 leading-relaxed opacity-90">
          {dictionary[project.description as keyof typeof dictionary]}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((stack) => (
            <li
              key={stack}
              className="border-secondary-foreground/30 rounded-full border px-2.5 py-0.5 font-mono text-xs"
            >
              {stack}
            </li>
          ))}
        </ul>
        <div className="border-secondary-foreground/25 flex items-center justify-between border-t-2 border-dashed pt-4 font-bold">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-primary flex items-center gap-1 hover:underline"
            >
              {dictionary['live-demo']}
              <ArrowUpRight className="size-4" />
            </a>
          ) : (
            <span />
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {dictionary['code']}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
