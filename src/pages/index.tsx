import React, { useRef } from 'react'
import About from '@/components/about'
import Experience from '@/components/experience'
import Layout from '@/components/UI/layout'
import Projects from '@/components/projects'

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  console.log(projectsRef, aboutRef, experienceRef)
  return (
    <Layout
      projectsRef={projectsRef}
      aboutRef={aboutRef}
      experienceRef={experienceRef}
    >
      <div className="flex">
        <div className="overflow-y-hidden">
          <div className="flex max-h-full w-full flex-col items-center justify-center">
            <div ref={aboutRef} id="about">
              <About />
            </div>
            <div ref={experienceRef} id="experience" className="w-full">
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
