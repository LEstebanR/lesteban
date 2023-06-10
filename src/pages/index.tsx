import React, { useRef } from 'react'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experiece'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Projects from '@/components/Projects'
import Info from '@/components/Info'

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null)

  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex">
      <div className="overflow-y-hidden">
        <div className="flex flex-col items-center justify-center maxh-full overflow-y-scroll no-scrollbar">
          <div>
            <About />
          </div>
          <div>
            <Experience />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  )
}
