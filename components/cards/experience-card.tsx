'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { ScrambleText } from '@/components/scramble-text'

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
    <li data-scramble-host className="relative flex flex-col gap-3">
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-2 -left-[29px] size-2.5 border md:-left-[37px]',
          current
            ? 'border-primary bg-primary shadow-[0_0_12px_var(--primary)]'
            : 'border-border bg-background'
        )}
      >
        {current && (
          <span className="bg-primary/50 absolute inset-0 animate-ping" />
        )}
      </span>
      <p className="text-muted-foreground font-mono text-xs">
        {dictionary[job.startDate as keyof typeof dictionary]} —{' '}
        {dictionary[job.endDate as keyof typeof dictionary]}
      </p>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-heading text-xl font-semibold">
          {dictionary[job.position as keyof typeof dictionary]}
        </h3>
        <ScrambleText
          text={job.company}
          duration={450}
          className="text-primary font-medium"
        />
      </div>
      <p className="text-foreground/80 max-w-2xl leading-relaxed">
        {dictionary[job.description as keyof typeof dictionary]}
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        {job.stack.map((stack) => (
          <li key={stack} className="text-muted-foreground font-mono text-xs">
            {stack}
          </li>
        ))}
      </ul>
    </li>
  )
}
