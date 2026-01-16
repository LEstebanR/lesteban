'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'
  return (
    <motion.div
      className="flex flex-col gap-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Hero lang={lang} />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </motion.div>
  )
}
