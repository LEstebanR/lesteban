'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import Image from 'next/image'

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
    <section className="settle grid gap-10 pt-16 pb-6 md:grid-cols-12 md:gap-10 md:pt-28">
      <div className="flex items-center gap-4 md:col-span-3 md:flex-col md:items-start">
        <Image
          src="/profile_pic.jpeg"
          alt="Luis Esteban"
          width={176}
          height={176}
          className="size-16 rounded-full object-cover md:size-24"
          priority
        />
        <p className="text-muted-foreground text-sm leading-snug">
          {dictionary['software-developer']}
          <br />
          Colombia
        </p>
      </div>

      <div className="flex flex-col gap-10 md:col-span-9">
        <h1 className="font-heading text-[clamp(2.75rem,7vw,5.25rem)] leading-[1.02] font-normal tracking-[-0.02em] text-balance">
          {dictionary['hello']} <span>Luis Esteban</span>
        </h1>
        <p className="text-foreground/80 max-w-[36ch] font-serif text-[1.4rem] leading-[1.55] text-pretty md:text-[1.6rem]">
          {dictionary['about-me-description-1']} {dictionary['global-impact']}{' '}
          {dictionary['about-me-description-2']}
        </p>

        <dl className="border-border grid gap-x-8 gap-y-4 border-t pt-6 text-sm sm:grid-cols-3">
          <div className="flex flex-col gap-1">
            <dt className="text-muted-foreground">{dictionary['hero-now']}</dt>
            <dd>{dictionary['indie-hacker-in-progress']}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-muted-foreground">
              {dictionary['hero-stack']}
            </dt>
            <dd>
              <ul className="flex flex-wrap">
                {STACK.map((tech) => (
                  <li
                    key={tech}
                    className="after:mr-1 after:content-[','] last:after:content-none"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-muted-foreground">
              {dictionary['hero-elsewhere']}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-x-3">
                {SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ink-link"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
