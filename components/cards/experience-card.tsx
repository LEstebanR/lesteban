'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { cn } from '@/lib/utils'

export type ExperienceType = {
  position: string
  company: string
  description: string
  startDate: string
  endDate: string
  stack: string[]
}

export function ExperienceCard({
  job,
  current = false,
}: {
  job: ExperienceType
  current?: boolean
}) {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  return (
    <li className="arrive relative flex flex-col gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'border-primary absolute top-1 -left-10 size-6 rounded-full border-[3px]',
          current ? 'bg-primary' : 'bg-background'
        )}
      />
      <p className="text-muted-foreground font-mono text-xs">
        {dictionary[job.startDate as keyof typeof dictionary]} →{' '}
        {dictionary[job.endDate as keyof typeof dictionary]}
      </p>
      <h3 className="font-heading text-2xl font-extrabold">
        {dictionary[job.position as keyof typeof dictionary]}
      </h3>
      <p className="text-primary font-bold">{job.company}</p>
      <p className="text-foreground/85 max-w-2xl leading-relaxed">
        {dictionary[job.description as keyof typeof dictionary]}
      </p>
      <ul className="flex flex-wrap gap-2 pt-1">
        {job.stack.map((stack) => (
          <li
            key={stack}
            className="bg-accent text-accent-foreground rounded-full px-2.5 py-0.5 font-mono text-xs"
          >
            {stack}
          </li>
        ))}
      </ul>
    </li>
  )
}
