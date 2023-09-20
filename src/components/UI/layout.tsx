import React, { useRef } from 'react'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
  projectsRef: any
  aboutRef: any
  experienceRef: any
}

const Layout: React.FC<LayoutProps> = ({
  children,
  projectsRef,
  aboutRef,
  experienceRef,
}) => {
  return (
    <div className="flex flex-col items-center bg-light text-black dark:bg-dark dark:text-white gap-4">
      <Header
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
      />
      <div className="w-11/12 md:w-6/12 flex flex-col items-center">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
