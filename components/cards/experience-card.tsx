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
    <article className="flex flex-col gap-2">
      <p className="text-muted-foreground text-sm tabular-nums">
        {dictionary[job.startDate as keyof typeof dictionary]} –{' '}
        {dictionary[job.endDate as keyof typeof dictionary]}
      </p>
      <h3 className="font-heading text-2xl leading-snug font-medium">
        {dictionary[job.position as keyof typeof dictionary]}
        <span className="text-muted-foreground font-normal">, </span>
        <span className="text-muted-foreground font-normal">{job.company}</span>
      </h3>
      <p className="text-foreground/80 max-w-[62ch] leading-relaxed">
        {dictionary[job.description as keyof typeof dictionary]}
      </p>
      <ul className="text-muted-foreground flex flex-wrap text-sm">
        {job.stack.map((stack) => (
          <li
            key={stack}
            className="after:mr-1 after:content-[','] last:after:content-none"
          >
            {stack}
          </li>
        ))}
      </ul>
    </article>
  )
}
