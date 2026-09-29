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
    <section className="relative isolate grid min-h-[calc(100svh-4rem)] items-center gap-12 py-12 md:grid-cols-12">
      {/* Overprinted ink shapes */}
      <div
        aria-hidden="true"
        className="parallax pointer-events-none absolute inset-0 -z-10"
        style={{ '--p-from': '0px', '--p-to': '-120px' } as React.CSSProperties}
      >
        <div
          className="ink drift bg-secondary absolute top-[10%] -right-[4%] size-[min(58vw,460px)] rounded-full dark:opacity-80"
          style={{ '--dur': '18s' } as React.CSSProperties}
        />
        <div
          className="ink drift bg-teal absolute bottom-[4%] left-[38%] h-[min(34vw,300px)] w-[min(34vw,300px)] [clip-path:polygon(50%_0,100%_100%,0_100%)]"
          style={
            {
              '--dur': '22s',
              '--dx': '-20px',
              '--dr': '-10deg',
            } as React.CSSProperties
          }
        />
      </div>

      <div className="relative z-10 flex flex-col gap-7 md:col-span-7">
        <p className="text-lg font-medium">{dictionary['hello']}</p>
        <h1 className="font-heading misregister w-min text-[clamp(3.25rem,11vw,8.5rem)] leading-[0.86] font-black tracking-tight">
          Luis Esteban
        </h1>
        <p className="font-heading text-teal text-xl font-bold md:text-2xl">
          {dictionary['software-developer']}
        </p>
        <p className="text-foreground/85 max-w-lg text-lg leading-relaxed">
          {dictionary['about-me-description-1']} {dictionary['global-impact']}{' '}
          {dictionary['about-me-description-2']}
        </p>
        <span className="bg-primary text-primary-foreground w-fit -rotate-2 px-3 py-1.5 font-bold">
          {dictionary['indie-hacker-in-progress']}
        </span>
        <ul className="text-muted-foreground flex flex-wrap gap-x-2 font-medium">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="after:text-primary after:ml-2 after:content-['/'] last:after:content-none"
            >
              {tech}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-5 font-bold">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="decoration-primary underline decoration-2 underline-offset-4 hover:decoration-4"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto w-full max-w-[340px] md:col-span-5">
        <div
          aria-hidden="true"
          className="ink bg-teal absolute inset-0 translate-x-3 translate-y-3 rounded-t-full"
        />
        <div className="halftone relative aspect-[3/4] overflow-hidden rounded-t-full">
          <Image
            src="/profile_pic.jpeg"
            alt="Luis Esteban"
            width={680}
            height={680}
            className="size-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
