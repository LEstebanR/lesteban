'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useHasMounted } from '@/hooks/use-has-mounted'
import { useLang } from '@/hooks/use-lang'

import Image from 'next/image'

import { useTheme } from 'next-themes'

import { ArrowUpRight } from 'lucide-react'

import { ScrambleText } from '@/components/scramble-text'
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
  const { resolvedTheme } = useTheme()
  const mounted = useHasMounted()
  return (
    <article
      data-scramble-host
      className="group boot hud-frame border-border bg-card/80 hover:bg-card flex h-full flex-col gap-5 border p-6 transition-colors"
    >
      <span aria-hidden="true" className="sweep-line" />
      <h3 className="font-heading text-2xl font-semibold tracking-tight">
        <ScrambleText
          text={dictionary[project.name as keyof typeof dictionary]}
          duration={500}
        />
      </h3>
      <p className="text-foreground/75 flex-1 leading-relaxed">
        {dictionary[project.description as keyof typeof dictionary]}
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        {project.stack.map((stack) => (
          <li key={stack} className="text-muted-foreground font-mono text-xs">
            {stack}
          </li>
        ))}
      </ul>
      <div className="border-border flex items-center justify-between border-t pt-4 text-sm">
        <div>
          {project.repo && mounted && (
            <Link href={project.repo}>
              <span className="flex items-center gap-2">
                <Image
                  src={
                    resolvedTheme === 'dark'
                      ? '/logos/github_dark.svg'
                      : '/logos/github_light.svg'
                  }
                  alt="GitHub"
                  height={16}
                  width={16}
                />
                {dictionary['code']}
              </span>
            </Link>
          )}
        </div>
        <div>
          {project.link && (
            <Link
              href={project.link}
              className="text-primary"
              withIcon={true}
              icon={<ArrowUpRight className="size-4" />}
            >
              {dictionary['live-demo']}
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
