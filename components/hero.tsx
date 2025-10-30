'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import Image from 'next/image'

import { useTheme } from 'next-themes'

import { Badge } from '@/components/ui/badge'
import { Link } from '@/components/ui/link'

interface HeroProps {
  lang: 'en' | 'es'
}

export function Hero({ lang }: HeroProps) {
  const dictionary = getClientDictionary(lang)
  const { theme } = useTheme()

  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-between py-4 md:py-8">
      <div className="from-primary to-primary/60 animate-float mx-auto h-32 w-32 rounded-full bg-gradient-to-br p-1">
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
      <h1 className="font-heading mb-6 text-center text-3xl font-bold text-balance md:mb-0 md:text-6xl">
        {dictionary['hello']}{' '}
        <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
          Luis Esteban
        </span>
      </h1>
      <p className="text-muted-foreground mb-6 text-xl text-pretty sm:text-2xl md:mb-0">
        {dictionary['software-developer']}
      </p>
      <p className="text-foreground/80 mx-auto mb-6 max-w-2xl text-lg text-pretty md:mb-0 md:text-xl">
        {dictionary['about-me-description-1']}{' '}
        <span className="text-primary font-bold">
          {dictionary['global-impact']}
        </span>{' '}
        {dictionary['about-me-description-2']}
      </p>
      <Badge
        variant="outline"
        className="border-primary bg-primary/10 dark:bg-primary/20 mb-2 rounded-full p-2 px-4 text-sm"
      >
        <span className="text-primary dark:text-primary/90 text-sm font-bold">
          {dictionary['indie-hacker-in-progress']}
        </span>
      </Badge>

      <div className="mb-6 flex flex-wrap justify-center gap-3 md:mb-0">
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
      <div className="mb-6 flex gap-4 md:mb-0">
        <Link href="https://github.com/LEstebanR" withIcon>
          <Image
            src={
              theme !== 'dark'
                ? '/logos/github_light.svg'
                : '/logos/github_dark.svg'
            }
            className="transition-transform duration-300 hover:scale-150"
            alt="Github"
            width={30}
            height={30}
          />
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
          <Image
            src={
              theme !== 'dark'
                ? '/logos/mail_light.svg'
                : '/logos/mail_dark.svg'
            }
            className="transition-transform duration-300 hover:scale-150"
            alt="Mail"
            width={33}
            height={33}
          />
        </Link>
      </div>
    </section>
  )
}
