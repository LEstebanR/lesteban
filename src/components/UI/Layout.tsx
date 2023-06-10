import React, { useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="h-16 flex items-center  sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center">
        <main>{children}</main>
      </div>
      <div className="h-16 flex items-center sticky bottom-0 z-50 bg-white">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
