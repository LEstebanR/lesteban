'use client'

import { useLang } from '@/hooks/use-lang'

import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

import { SKILLS } from '@/lib/data'

const MARQUEE_ITEMS = [
  ...SKILLS.frontend,
  ...SKILLS.backend,
  ...SKILLS.database,
  ...SKILLS.programing_languages,
]

export default function Home() {
  const lang = useLang()
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <Hero lang={lang} />
      <Marquee items={MARQUEE_ITEMS} />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  )
}
