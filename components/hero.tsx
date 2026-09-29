'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { motion, useReducedMotion } from 'framer-motion'

import Image from 'next/image'

import { DragLetters } from '@/components/drag-letters'

interface HeroProps {
  lang: 'en' | 'es'
}

const STACK = ['React', 'Tailwind', 'Next.js', 'Node.js', 'Supabase']
const STICKER_TONES = [
  'bg-secondary text-secondary-foreground',
  'bg-pink text-pink-foreground',
  'bg-primary text-primary-foreground',
  'bg-card text-card-foreground',
]
const ROTATIONS = ['-4deg', '3deg', '-2deg', '5deg', '-3deg']

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/LEstebanR' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lestebanr/' },
  { label: 'Email', href: 'mailto:leramirezca@gmail.com' },
]

export function Hero({ lang }: HeroProps) {
  const dictionary = getClientDictionary(lang)
  const reduce = useReducedMotion()

  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-8 py-12">
      <div className="flex flex-wrap items-center gap-4">
        <span
          style={{ '--r': '-4deg' } as React.CSSProperties}
          className="sticker toy bg-pink text-pink-foreground rounded-full px-4 py-1.5 text-sm font-bold"
        >
          {dictionary['indie-hacker-in-progress']}
        </span>
        <p className="text-muted-foreground text-lg font-semibold">
          {dictionary['hello']}
        </p>
      </div>

      <h1 className="font-heading text-[clamp(2.75rem,13vw,11.5rem)] leading-[0.82] font-extrabold tracking-[-0.04em]">
        <span className="sr-only">Luis Esteban</span>
        <DragLetters text="Luis Esteban" />
      </h1>
      <p className="text-muted-foreground -mt-2 text-sm font-medium">
        {dictionary['hero-drag-hint']}
      </p>

      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div className="flex max-w-xl flex-col gap-6">
          <p className="font-heading text-primary text-3xl font-bold">
            {dictionary['software-developer']}
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed">
            {dictionary['about-me-description-1']} {dictionary['global-impact']}{' '}
            {dictionary['about-me-description-2']}
          </p>
          <ul className="flex flex-wrap gap-3">
            {STACK.map((tech, i) => (
              <li
                key={tech}
                style={{ '--r': ROTATIONS[i] } as React.CSSProperties}
                className={`sticker toy rounded-full px-3.5 py-1 text-sm font-bold ${STICKER_TONES[i % STICKER_TONES.length]}`}
              >
                {tech}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-3 pt-2">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="toy toy-press bg-foreground text-background inline-block rounded-full px-5 py-2 text-sm font-bold"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          whileHover={reduce ? undefined : { rotate: -4, scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 300, damping: 12 }}
          className="toy bg-secondary relative mx-auto size-56 overflow-hidden rounded-[42%_58%_52%_48%/48%_42%_58%_52%] md:size-72"
        >
          <Image
            src="/profile_pic.jpeg"
            alt="Luis Esteban"
            width={576}
            height={576}
            className="size-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
