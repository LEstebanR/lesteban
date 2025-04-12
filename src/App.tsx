import "./styles/app.css";
import "./styles/animations.css";
import Header from "@components/ui/header";
import Footer from "@components/ui/footer";
import { AboutMe } from "@components/about-me";
import { Experience } from "@components/experience";
import { Projects } from "@components/projects"
import { Contact } from "@components/contact";
import { Skills } from "@components/skills"

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <Header />
            <main className="mt-24 lg:w-3/6 xl:w-2/6 flex flex-col gap-10 items-between px-4 lg:px-0 mb-12 ">
                <AboutMe />
                <Experience />
                <Projects />
                <Skills/>
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
