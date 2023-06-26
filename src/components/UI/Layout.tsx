import React, { useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'
import Contact from '../Contact'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <div className="h-16 flex items-center sticky top-0 z-50 ">
        <Header />
      </div>
      <div className="flex justify-center items-center md:items-start flex-col md:flex-row ">
        <div className="sticky top-16 md:h-96 flex flex items-end justify-center w-1/4">
          <Contact />
        </div>
        <main className="md:w-2/4 flex justify-center items-center top-32 scroll-y-hidden ">
          {children}
        </main>
        <div className="w-1/4 bg-white"></div>
      </div>
      <div className="h-16 flex items-center sticky bottom-0 z-50 bg-white">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
