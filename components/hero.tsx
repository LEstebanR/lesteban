'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface HeroProps {
  lang: 'en' | 'es'
}

export function Hero({ lang }: HeroProps) {
  const dictionary = getClientDictionary(lang)

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Subtle glow effect */}
      <div
        className="pointer-events-none absolute top-12 left-20 h-64 w-64 opacity-50 blur-3xl md:left-40 md:h-80 md:w-80"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 184, 212, 0.35) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative">
        {/* Eyebrow */}
        <p className="text-primary mb-4 font-mono text-xs font-medium tracking-wider uppercase">
          {'// '}
          {lang === 'es'
            ? 'disponible para colaborar'
            : 'available to collaborate'}
        </p>

        {/* Main headline */}
        <h1 className="font-heading mb-3 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
          {dictionary['hello']}{' '}
          <span className="text-primary">Luis Esteban</span>
        </h1>

        {/* Role */}
        <p className="text-muted-foreground mb-6 text-xl font-medium md:text-2xl">
          {dictionary['software-developer']}
        </p>

        {/* Bio */}
        <p className="text-muted-foreground mb-8 max-w-xl text-base leading-relaxed md:text-lg">
          {dictionary['about-me-description-1']}{' '}
          <span className="text-primary font-semibold">
            {dictionary['global-impact']}
          </span>{' '}
          {dictionary['about-me-description-2']}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link href={`/${lang}#projects`} scroll={true}>
            <Button
              size="lg"
              className="shadow-primary/30 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold shadow-lg transition-all hover:scale-105"
            >
              {lang === 'es' ? 'Ver proyectos' : 'View projects'}
            </Button>
          </Link>
          <Link href={`/${lang}#contact`} scroll={true}>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-card text-foreground hover:border-primary/50 hover:bg-card/80 rounded-lg font-semibold transition-all"
            >
              {lang === 'es' ? 'Contactar' : 'Contact'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
