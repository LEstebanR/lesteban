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
    <article className="toy bg-card grid gap-4 rounded-xl p-6 md:grid-cols-[220px_1fr] md:gap-8 md:p-8">
      <div className="flex flex-col items-start gap-3">
        <span className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-bold">
          {dictionary[job.startDate as keyof typeof dictionary]} →{' '}
          {dictionary[job.endDate as keyof typeof dictionary]}
        </span>
        <span className="font-heading text-2xl font-extrabold">
          {job.company}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-primary text-xl font-bold">
          {dictionary[job.position as keyof typeof dictionary]}
        </h3>
        <p className="text-foreground/80 leading-relaxed">
          {dictionary[job.description as keyof typeof dictionary]}
        </p>
        <ul className="flex flex-wrap gap-2">
          {job.stack.map((stack) => (
            <li
              key={stack}
              className="border-hairline rounded-full border-2 px-3 py-0.5 text-xs font-bold"
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
