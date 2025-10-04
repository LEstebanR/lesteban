import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import Image from 'next/image'

import { Github, Linkedin, Mail } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Link } from '@/components/ui/link'

interface HeroProps {
  lang: 'en' | 'es'
}

export function Hero({ lang }: HeroProps) {
  const dictionary = getClientDictionary(lang)

  return (
    <div className="flex flex-col items-center justify-between py-8 md:min-h-[calc(100vh-4rem)]">
      <div className="from-primary to-secondary animate-float mx-auto h-32 w-32 rounded-full bg-gradient-to-br p-1">
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
      <h1 className="font-heading mb-6 text-center text-4xl font-bold text-balance sm:text-5xl md:mb-0 lg:text-6xl">
        {dictionary['hello']}{' '}
        <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
          Luis Esteban
        </span>
      </h1>
      <p className="text-muted-foreground mb-6 text-xl text-balance sm:text-2xl md:mb-0">
        {dictionary['software-developer']}
      </p>
      <p className="text-foreground/80 mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-pretty md:mb-0">
        {dictionary['about-me-description-1']}{' '}
        <span className="font-bold">{dictionary['global-impact']}</span>{' '}
        {dictionary['about-me-description-2']}
      </p>
      <div className="mb-6 md:mb-0">
        <div className="bg-muted border-border inline-flex items-center gap-3 rounded-full border px-4 py-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
          <span className="text-muted-foreground text-sm font-medium">
            {dictionary['indie-hacker-in-progress']}
          </span>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-3 md:mb-0">
        {['React', 'Tailwind', 'Next.js', 'Node.js', 'Supabase'].map((tech) => (
          <Badge key={tech} variant="outline" className="rounded-full text-sm">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="mb-6 flex gap-2 md:mb-0">
        <Link href="https://github.com/LEstebanR" withIcon>
          <Github />
        </Link>
        <Link href="https://www.linkedin.com/in/lestebanr/" withIcon>
          <Linkedin />
        </Link>
        <Link href="mailto:leramirezca@gmail.com">
          <Mail />
        </Link>
      </div>
    </div>
  )
}
