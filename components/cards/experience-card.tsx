'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

export type ExperienceType = {
  position: string
  company: string
  description: string
  startDate: string
  endDate: string
  stack: string[]
}

export function ExperienceCard({ job }: { job: ExperienceType }) {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <article className="print-in border-primary/40 grid gap-4 border-t-2 border-dotted py-8 md:grid-cols-[1fr_2fr] md:gap-10">
      <div className="flex flex-col gap-2">
        <span className="font-heading text-3xl font-black md:text-4xl">
          {job.company}
        </span>
        <span className="text-primary text-sm font-bold">
          {dictionary[job.startDate as keyof typeof dictionary]} —{' '}
          {dictionary[job.endDate as keyof typeof dictionary]}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-teal text-lg font-bold">
          {dictionary[job.position as keyof typeof dictionary]}
        </h3>
        <p className="text-foreground/85 leading-relaxed">
          {dictionary[job.description as keyof typeof dictionary]}
        </p>
        <ul className="text-muted-foreground flex flex-wrap gap-x-2 text-sm font-medium">
          {job.stack.map((stack) => (
            <li
              key={stack}
              className="after:text-primary after:ml-2 after:content-['/'] last:after:content-none"
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
