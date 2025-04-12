import "./styles/app.css";
import "./styles/animations.css";
import Header from "@components/ui/header";
import Footer from "@components/ui/footer";
import { AboutMe } from "@components/about-me";
import { Experience } from "@components/experience";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
        <main className="mt-24 md:w-3/6 flex flex-col gap-10 items-between px-4 md:px-0 mb-12 ">
          <AboutMe />
          <Experience />
          {/* <Projects />
          <Skills />
          <Contact /> */}
        </main>
        <Footer />
      </div>
  );
}

export default App;
