'use client'

import { AboutMe } from '@/components/about-me'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
