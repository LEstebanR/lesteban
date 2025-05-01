import { H1 } from '@components/ui/typography'
import { PROJECTS } from '@data/data'
import { ProjectCard } from './cards/project-card'
import { useTranslation } from 'react-i18next'

export function Projects() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-4">
      <H1 color="primary">{t('projects')}</H1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
