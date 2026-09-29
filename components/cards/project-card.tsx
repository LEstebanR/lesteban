'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'

import Image from 'next/image'

import { ExternalLink } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from '@/components/ui/link'

type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  repo?: string
}

export function ProjectCard({ project }: { project: Project }) {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)

  return (
    <Card className="group border-border bg-card hover:border-primary/35 hover:shadow-primary/10 relative h-full overflow-hidden rounded-2xl border transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {dictionary[project.name as keyof typeof dictionary]}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {dictionary[project.description as keyof typeof dictionary]}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-3">
        <div className="flex w-full flex-wrap gap-2">
          {project.stack.map((stack) => (
            <Badge
              key={stack}
              variant="outline"
              className="bg-cyan-soft text-cyan border-transparent font-mono text-xs font-medium"
              style={{
                backgroundColor: 'var(--cyan-soft)',
                color: '#0088a3',
              }}
            >
              {stack}
            </Badge>
          ))}
        </div>
        <div className="flex w-full justify-between text-sm">
          <div>
            {project.repo && (
              <Link href={project.repo} className="hover:text-primary">
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/logos/github_light.svg"
                    alt="GitHub"
                    height={18}
                    width={18}
                  />
                  {dictionary['code']}
                </div>
              </Link>
            )}
          </div>
          <div>
            {project.link && (
              <Link
                href={project.link}
                withIcon={true}
                icon={<ExternalLink className="h-4 w-4" />}
                className="hover:text-primary"
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
