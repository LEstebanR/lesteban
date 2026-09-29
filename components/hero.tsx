'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import Image from 'next/image'

import { TrailMap } from '@/components/trail-map'

interface HeroProps {
  lang: 'en' | 'es'
}

const STACK = ['React', 'Tailwind', 'Next.js', 'Node.js', 'Supabase']

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/LEstebanR' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lestebanr/' },
  { label: 'Email', href: 'mailto:leramirezca@gmail.com' },
]

export function Hero({ lang }: HeroProps) {
  const dictionary = getClientDictionary(lang)

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col justify-center py-14">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 opacity-60 md:opacity-100">
        <TrailMap summitLabel={dictionary['current']} />
      </div>

      <div className="flex max-w-xl flex-col gap-6">
        <p className="text-muted-foreground font-mono text-xs">
          4.5709° N · 74.2973° W — Colombia
        </p>
        <div className="flex items-center gap-4">
          <Image
            src="/profile_pic.jpeg"
            alt="Luis Esteban"
            width={160}
            height={160}
            className="border-primary size-16 rounded-full border-[3px] object-cover md:size-20"
            priority
          />
          <p className="text-lg font-semibold">{dictionary['hello']}</p>
        </div>
        <h1 className="font-heading text-[clamp(3.25rem,10vw,7.5rem)] leading-[0.88] font-black tracking-[-0.03em]">
          Luis Esteban
        </h1>
        <p className="font-heading text-primary text-2xl font-extrabold">
          {dictionary['software-developer']}
        </p>
        <p className="bg-background/70 text-foreground/85 rounded-md text-lg leading-relaxed backdrop-blur-[2px]">
          {dictionary['about-me-description-1']} {dictionary['global-impact']}{' '}
          {dictionary['about-me-description-2']}
        </p>
        <p className="bg-secondary text-secondary-foreground w-fit rounded-md px-3 py-1.5 text-sm font-bold">
          {dictionary['indie-hacker-in-progress']}
        </p>
        <ul className="flex flex-wrap gap-2">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="border-foreground/30 bg-background/70 rounded-full border px-3 py-0.5 font-mono text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-5 font-semibold">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="trail-link"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
