import React, { useRef } from 'react'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experiece'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Projects from '@/components/Projects'
import Info from '@/components/Info'

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

  return (
    <main className="flex flex-col items-center justify-center font-sans h-screen">
      <div className="h-1/12 w-full">
        <Header
          handleAboutClick={handleAboutClick}
          handleExperienceClick={handleExperienceClick}
          handleProjectsClick={handleProjectsClick}
        />
      </div>
      <div className="flex flex-col md:flex-row w-screen overflow-y-hidden md:h-10/12">
        <Contact />
        <div className="md:w-6/12 flex flex-col items-center overflow-y-scroll no-scrollbar">
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
        </div>
        <div className="flex w-3/12 justify-center items-center">
          <Info />
        </div>
      </div>
      <div className="h-1/12 w-full">
        <Footer />
      </div>
    </main>
  )
}
