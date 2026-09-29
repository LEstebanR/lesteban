'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { cn } from '@/lib/utils'

type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  repo?: string
}

/** Paper tone + two overprinted shapes per poster, cycled by index. */
const POSTERS = [
  {
    paper: 'bg-primary text-primary-foreground',
    a: 'bg-secondary rounded-full',
    b: 'bg-teal',
    tilt: '-rotate-1',
    ink: 'on-paper',
  },
  {
    paper: 'bg-secondary text-secondary-foreground',
    a: 'bg-teal [clip-path:polygon(50%_0,100%_100%,0_100%)]',
    b: 'bg-primary rounded-full',
    tilt: 'rotate-1',
    ink: 'on-paper',
  },
  {
    paper: 'bg-teal text-teal-foreground',
    a: 'bg-primary rounded-t-full',
    b: 'bg-secondary rounded-full',
    tilt: 'rotate-1',
    ink: 'on-paper',
  },
  {
    paper: 'bg-card text-card-foreground',
    a: 'bg-primary [clip-path:polygon(50%_0,100%_100%,0_100%)]',
    b: 'bg-secondary',
    tilt: '-rotate-1',
    ink: '',
  },
]

export function ProjectCard({
  project,
  tone = 3,
}: {
  project: Project
  tone?: number
}) {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const poster = POSTERS[tone % POSTERS.length]
  return (
    <article
      className={cn(
        'poster print-in relative isolate flex h-full flex-col gap-5 overflow-hidden p-7 transition-transform duration-500 hover:rotate-0 md:p-9',
        poster.paper,
        poster.tilt
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'ink shape shape-a absolute -top-10 -right-10 -z-10 size-40 opacity-90',
          poster.a,
          poster.ink
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          'ink shape shape-b absolute -top-2 right-16 -z-10 size-24 opacity-80',
          poster.b,
          poster.ink
        )}
      />
      <h3 className="font-heading max-w-[80%] text-3xl leading-none font-black tracking-tight md:text-4xl">
        {dictionary[project.name as keyof typeof dictionary]}
      </h3>
      <p className="flex-1 leading-relaxed font-medium opacity-90">
        {dictionary[project.description as keyof typeof dictionary]}
      </p>
      <ul className="flex flex-wrap gap-x-2 text-sm font-bold opacity-80">
        {project.stack.map((stack) => (
          <li
            key={stack}
            className="after:ml-2 after:content-['/'] last:after:content-none"
          >
            {stack}
          </li>
        ))}
      </ul>
      <div className="flex gap-5 font-bold">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-2 underline-offset-4 hover:decoration-4"
          >
            {dictionary['live-demo']}
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-2 underline-offset-4 hover:decoration-4"
          >
            {dictionary['code']}
          </a>
        )}
      </div>
    </article>
  )
}
