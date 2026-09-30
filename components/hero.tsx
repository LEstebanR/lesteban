'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useHasMounted } from '@/hooks/use-has-mounted'

import { useRef } from 'react'

import Image from 'next/image'

import { useTheme } from 'next-themes'

import { DecodeMask } from '@/components/decode-mask'
import { NeuralField } from '@/components/neural-field'
import { ScrambleText } from '@/components/scramble-text'
import { Link } from '@/components/ui/link'
import { Skeleton } from '@/components/ui/skeleton'

interface HeroProps {
  lang: 'en' | 'es'
}

const STACK = ['React', 'Tailwind', 'Next.js', 'Node.js', 'Supabase']

export function Hero({ lang }: HeroProps) {
  const dictionary = getClientDictionary(lang)
  const { resolvedTheme } = useTheme()
  const mounted = useHasMounted()
  const isDark = resolvedTheme === 'dark'
  const coordsRef = useRef<HTMLSpanElement>(null)

  const trackPointer = (event: React.PointerEvent<HTMLElement>) => {
    const { top } = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - top}px`)
    const coords = coordsRef.current as HTMLSpanElement
    coords.textContent = `x ${String(Math.round(event.clientX)).padStart(4, '0')} · y ${String(Math.round(event.clientY - top)).padStart(4, '0')}`
  }

  return (
    <section
      onPointerMove={trackPointer}
      className="hero-zone relative isolate flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-12 py-16"
    >
      <div
        aria-hidden="true"
        className="console-grid pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      />
      <div
        aria-hidden="true"
        className="aurora-exit pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      >
        <div className="aurora absolute inset-0">
          <div className="aurora-blob aurora-a" />
          <div className="aurora-blob aurora-b" />
          <div className="aurora-blob aurora-c" />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="console-spot pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      />
      <NeuralField className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 h-full w-screen -translate-x-1/2" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-screen -translate-x-1/2 md:block"
      >
        <div className="reticle hud-frame">
          <span
            ref={coordsRef}
            className="text-primary absolute top-full left-full mt-1 ml-1 font-mono text-[10px] whitespace-nowrap"
          />
        </div>
      </div>

      <p className="seq text-muted-foreground flex items-center gap-2 font-mono text-xs">
        <span className="bg-primary status-dot inline-block size-1.5 rounded-full" />
        {dictionary['hero-status']}
      </p>

      <h1 className="font-heading">
        <span
          className="seq text-muted-foreground mb-3 block font-sans text-lg md:text-xl"
          style={{ '--d': 100 } as React.CSSProperties}
        >
          {dictionary['hello']}
        </span>
        <span className="scan-in block text-[clamp(3rem,11vw,8.5rem)] leading-[0.88] font-semibold tracking-tight uppercase">
          <ScrambleText text="Luis Esteban" duration={1300} />
          <span aria-hidden="true" className="scan-beam" />
        </span>
      </h1>

      <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-end">
        <div className="flex max-w-xl flex-col gap-6">
          <p
            className="seq text-primary font-heading text-xl font-medium md:text-2xl"
            style={{ '--d': 1000 } as React.CSSProperties}
          >
            {dictionary['hero-role']}
            <span aria-hidden="true" className="caret" />
          </p>
          <p
            className="seq text-foreground/80 text-lg leading-relaxed text-pretty"
            style={{ '--d': 1150 } as React.CSSProperties}
          >
            {dictionary['hero-lede']}
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Stack">
            {STACK.map((tech, index) => (
              <li
                key={tech}
                style={{ '--d': 1300 + index * 80 } as React.CSSProperties}
                className="seq border-border text-muted-foreground hover:border-primary hover:text-primary rounded-sm border px-2.5 py-1 font-mono text-xs transition-colors"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div
            className="seq flex items-center justify-center gap-5 md:justify-start"
            style={{ '--d': 1750 } as React.CSSProperties}
          >
            <Link
              href="https://github.com/LEstebanR"
              withIcon
              className="jitter"
            >
              {mounted ? (
                <Image
                  src={
                    isDark
                      ? '/logos/github_dark.svg'
                      : '/logos/github_light.svg'
                  }
                  alt="Github"
                  width={24}
                  height={24}
                />
              ) : (
                <Skeleton className="size-6 rounded-full" />
              )}
            </Link>
            <Link
              href="https://www.linkedin.com/in/lestebanr/"
              withIcon
              className="jitter"
            >
              <Image
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link href="mailto:leramirezca@gmail.com" className="jitter">
              {mounted ? (
                <Image
                  src={
                    isDark ? '/logos/mail_dark.svg' : '/logos/mail_light.svg'
                  }
                  alt="Mail"
                  width={26}
                  height={26}
                />
              ) : (
                <Skeleton className="size-6 rounded-full" />
              )}
            </Link>
          </div>
        </div>

        <figure
          data-scramble-host
          className="seq hud-frame border-border bg-card mx-auto w-full max-w-[220px] border p-3 md:mx-0 md:max-w-[280px]"
          style={{ '--d': 150 } as React.CSSProperties}
        >
          <div className="scan-in scanlines glitch-host relative aspect-square overflow-hidden">
            <DecodeMask />
            <span aria-hidden="true" className="scan-beam z-[4]" />
            <span aria-hidden="true" className="photo-scan" />
            <Image
              src="/profile_pic.jpeg"
              alt=""
              aria-hidden="true"
              width={560}
              height={560}
              className="glitch-layer absolute inset-0 z-[1] size-full object-cover"
            />
            <Image
              src="/profile_pic.jpeg"
              alt="Luis Esteban"
              width={560}
              height={560}
              className="size-full object-cover contrast-110 grayscale-[35%]"
              priority
            />
          </div>
          <figcaption className="text-muted-foreground mt-3 flex justify-between font-mono text-[11px]">
            <span>Colombia</span>
            <span>UTC−5</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
