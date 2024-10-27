import React from 'react'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
  projectsRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
  experienceRef: React.RefObject<HTMLElement>
}

const Layout: React.FC<LayoutProps> = ({
  children,
  projectsRef,
  aboutRef,
  experienceRef,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-light  text-black dark:bg-dark dark:text-white">
      <Header
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
      />
      <div className="flex flex-col items-center  p-4 md:w-6/12">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
