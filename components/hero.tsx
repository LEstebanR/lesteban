'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import Image from 'next/image'

import { useTheme } from 'next-themes'

import { useHasMounted } from '@/hooks/use-has-mounted'

import { Badge } from '@/components/ui/badge'
import { Link } from '@/components/ui/link'

interface HeroProps {
  lang: 'en' | 'es'
}

export function Hero({ lang }: HeroProps) {
  const dictionary = getClientDictionary(lang)
  const { resolvedTheme } = useTheme()
  const mounted = useHasMounted()

  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-between px-2 py-4 md:px-0 md:py-8">
      <div className="from-primary to-primary/60 animate-float animate-fade-in-scale mx-auto h-32 w-32 rounded-full bg-gradient-to-br p-1 [animation-fill-mode:both]">
        <div className="bg-background flex h-full w-full items-center justify-center rounded-full">
          <Image
            src="/profile_pic.jpeg"
            alt="Luis Esteban"
            width={700}
            height={700}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <h1 className="font-heading animate-fade-in-up mb-6 text-center text-3xl font-bold text-balance md:mb-0 md:text-6xl [animation-delay:100ms] [animation-fill-mode:both]">
        {dictionary['hello']}{' '}
        <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
          Luis Esteban
        </span>
      </h1>
      <p className="text-muted-foreground animate-fade-in-up mb-6 text-xl text-pretty sm:text-2xl md:mb-0 [animation-delay:200ms] [animation-fill-mode:both]">
        {dictionary['software-developer']}
      </p>
      <p className="text-foreground/80 animate-fade-in-up mx-auto mb-6 text-lg text-pretty md:mb-0 md:text-xl [animation-delay:300ms] [animation-fill-mode:both]">
        {dictionary['about-me-description-1']}{' '}
        <span className="text-primary font-bold">
          {dictionary['global-impact']}
        </span>{' '}
        {dictionary['about-me-description-2']}
      </p>
      <Badge
        variant="outline"
        className="border-primary bg-primary/10 dark:bg-primary/20 animate-fade-in-scale mb-2 rounded-full p-2 px-3 text-sm [animation-delay:400ms] [animation-fill-mode:both]"
      >
        <span className="text-primary dark:text-primary/90 text-sm font-bold">
          {dictionary['indie-hacker-in-progress']}
        </span>
      </Badge>

      <div className="animate-fade-in-up mb-6 flex flex-wrap justify-center gap-3 md:mb-0 [animation-delay:500ms] [animation-fill-mode:both]">
        {['React', 'Tailwind', 'Next.js', 'Node.js', 'Supabase'].map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="bg-secondary/10 dark:bg-secondary/30 text-secondary dark:text-secondary-foreground border-secondary rounded-full text-sm"
          >
            {tech}
          </Badge>
        ))}
      </div>
      <div className="animate-fade-in-up mb-6 flex gap-4 md:mb-0 [animation-delay:600ms] [animation-fill-mode:both]">
        <Link href="https://github.com/LEstebanR" withIcon>
          {mounted && (
            <Image
              src={
                resolvedTheme === 'dark'
                  ? '/logos/github_dark.svg'
                  : '/logos/github_light.svg'
              }
              className="transition-transform duration-300 hover:scale-150"
              alt="Github"
              width={30}
              height={30}
            />
          )}
        </Link>
        <Link href="https://www.linkedin.com/in/lestebanr/" withIcon>
          <Image
            src={'/logos/linkedin.svg'}
            className="transition-transform duration-300 hover:scale-150"
            alt="LinkedIn"
            width={30}
            height={30}
          />
        </Link>
        <Link href="mailto:leramirezca@gmail.com">
          {mounted && (
            <Image
              src={
                resolvedTheme === 'dark'
                  ? '/logos/mail_dark.svg'
                  : '/logos/mail_light.svg'
              }
              className="transition-transform duration-300 hover:scale-150"
              alt="Mail"
              width={33}
              height={33}
            />
          )}
        </Link>
      </div>
    </section>
  )
}
