'use client'

import { useLang } from '@/hooks/use-lang'

import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  const lang = useLang()
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <Hero lang={lang} />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
