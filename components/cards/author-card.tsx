import { getDictionary } from '@/app/[lang]/dictionaries'

import Image from 'next/image'
import NextLink from 'next/link'

import { Github, Linkedin } from 'lucide-react'

interface AuthorCardProps {
  lang: 'en' | 'es'
}

export async function AuthorCard({ lang }: AuthorCardProps) {
  const dictionary = await getDictionary(lang)

  return (
    <aside className="border-border bg-secondary/10 flex flex-col gap-4 rounded-xl border p-6 sm:flex-row sm:items-start sm:gap-6">
      <div className="shrink-0">
        <Image
          src="/profile_pic.jpeg"
          alt="Luis Esteban Ramirez"
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-heading text-foreground text-lg font-bold">
            Luis Esteban Ramirez
          </p>
          <p className="text-muted-foreground text-sm">
            {dictionary['software-developer']}
          </p>
        </div>
        <p className="text-foreground/80 text-sm leading-relaxed">
          {dictionary['author-bio']}
        </p>
        <div className="flex gap-4 pt-1">
          <NextLink
            href="https://github.com/LEstebanR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </NextLink>
          <NextLink
            href="https://www.linkedin.com/in/lestebanr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </NextLink>
        </div>
      </div>
    </aside>
  )
}
