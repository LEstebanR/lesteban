import React, { useRef } from 'react'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/Projects'
import Layout from '@/components/UI/layout'

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  return (
    <Layout
      projectsRef={projectsRef}
      aboutRef={aboutRef}
      experienceRef={experienceRef}
    >
      <div className="flex">
        <div className="overflow-y-hidden">
          <div className="flex flex-col items-center justify-center max-h-full  no-scrollbar">
            <div ref={aboutRef} id="about">
              <About />
            </div>
            <div ref={experienceRef} id="experience">
              <Experience />
            </div>
            <div ref={projectsRef} id="projects">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
