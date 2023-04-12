import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experiece'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import React from 'react'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
