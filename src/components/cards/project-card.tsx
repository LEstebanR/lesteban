import { Project } from '@types/main'
import { Body, H3 } from '@components/ui/typography'
import { Chip } from '@components/ui/chip'
import { Link } from '@components/ui/link'
import { ExternalLink, GithubIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  return (
    <div className="shadow-primary/20 hover:shadow-primary/40 flex h-full flex-col justify-between gap-4 rounded-md border border-gray-200 p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-300">
      <H3>{t(project.name)}</H3>
      <Body>{t(project.description)}</Body>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((stack) => (
          <Chip key={stack} label={stack} />
        ))}
      </div>
      <div className="flex gap-8">
        {project.repo ? (
          <Link
            href={project.repo}
            withIcon={true}
            icon={<GithubIcon className="h-4 w-4" />}
          >
            {t('code')}
          </Link>
        ) : null}
        {project.link ? (
          <Link
            href={project.link}
            withIcon={true}
            icon={<ExternalLink className="h-4 w-4" />}
          >
            {t('live-demo')}
          </Link>
        ) : null}
      </div>
    </div>
  )
}
