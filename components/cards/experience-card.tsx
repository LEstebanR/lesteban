'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import { Calendar, Code } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

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
    <div className="border-border bg-card hover:border-primary/20 rounded-2xl border p-6 transition-all">
      <h3 className="font-heading text-primary mb-2 text-lg font-semibold">
        {dictionary[job.position as keyof typeof dictionary]}
      </h3>
      <div className="text-muted-foreground mb-3 flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold">{job.company}</span>
        <span className="text-border">•</span>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          <span>
            {dictionary[job.startDate as keyof typeof dictionary]} -{' '}
            {dictionary[job.endDate as keyof typeof dictionary]}
          </span>
        </div>
      </div>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {dictionary[job.description as keyof typeof dictionary]}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <Code className="text-primary h-4 w-4" />
        {job.stack.map((stack) => (
          <Badge
            key={stack}
            variant="outline"
            className="bg-cyan-soft border-transparent font-mono text-xs font-medium"
            style={{
              backgroundColor: 'var(--cyan-soft)',
              color: '#0088a3',
            }}
          >
            {stack}
          </Badge>
        ))}
      </div>
    </div>
  )
}
