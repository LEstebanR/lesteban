'use client'

import { usePathname } from 'next/navigation'

import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'
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
