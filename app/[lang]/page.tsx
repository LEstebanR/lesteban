'use client'

import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

import { useLang } from '@/hooks/use-lang'

export default function Home() {
  const lang = useLang()
  return (
    <div className="flex flex-col gap-12">
      <Hero lang={lang} />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
