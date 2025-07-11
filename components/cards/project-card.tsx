'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from '@/components/ui/link'
import { ExternalLink, GithubIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  repo?: string
}
export function ProjectCard({ project }: { project: Project }) {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'
  const dictionary = getClientDictionary(lang)
  return (
    <Card className="border-primary flex h-full flex-col">
      <CardHeader>
        <CardTitle>
          {dictionary[project.name as keyof typeof dictionary]}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p>{dictionary[project.description as keyof typeof dictionary]}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2">
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((stack) => (
            <Badge
              key={stack}
              variant="outline"
              className="bg-primary/10 dark:bg-primary/40"
            >
              {stack}
            </Badge>
          ))}
        </div>
        <div className="flex w-full justify-between">
          <div>
            {project.repo && (
              <Link
                href={project.repo}
                withIcon={true}
                icon={<GithubIcon className="h-4 w-4" />}
              >
                {dictionary['code']}
              </Link>
            )}
          </div>
          <div>
            {project.link && (
              <Link
                href={project.link}
                withIcon={true}
                icon={<ExternalLink className="h-4 w-4" />}
              >
                {dictionary['live-demo']}
              </Link>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
