import { Experience } from '@types/main'
import { H3, Subtitle, Body } from '@components/ui/typography'
import { Calendar, Code } from 'lucide-react'
import { Chip } from '@components/ui/chip'
import { useTranslation } from 'react-i18next'

export function ExperienceCard({ job }: { job: Experience }) {
  const { t } = useTranslation()
  return (
    <div className="mb-4 flex flex-col gap-2">
      <H3>{t(job.position)}</H3>
      <div className="flex items-center gap-2">
        <Subtitle>{job.company}</Subtitle>
        <Calendar className="text-muted ml-1 h-4 w-4" />
        <Subtitle>
          {t(job.startDate)} - {t(job.endDate)}
        </Subtitle>
      </div>
      <Body>{t(job.description)}</Body>

      <div className="wrap flex items-center gap-2">
        <Code className="text-primary h-4 w-4" />
        {job.stack.map((stack) => (
          <Chip key={stack} label={stack} />
        ))}
      </div>
    </div>
  )
}
