import './styles/app.css'
import './styles/animations.css'
import Header from '@components/ui/header'
import Footer from '@components/ui/footer'
import { AboutMe } from '@components/about-me'
import { Experience } from '@components/experience'
import { Projects } from '@components/projects'
import { Contact } from '@components/contact'
import { Skills } from '@components/skills'

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <main className="items-between mt-18 mb-12 flex flex-col gap-10 px-4 lg:w-3/6 lg:px-0 2xl:w-2/6">
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
