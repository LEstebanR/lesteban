import React, { useRef } from 'react'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experiece'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Projects from '@/components/Projects'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const handleAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleExperienceClick = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="flex flex-col items-center justify-center font-sans gap-8">
      <Header
        handleAboutClick={handleAboutClick}
        handleExperienceClick={handleExperienceClick}
        handleProjectsClick={handleProjectsClick}
        handleContactClick={handleContactClick}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
