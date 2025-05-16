import { AboutMe } from "@/app/components/about-me";
import { Experience } from "@/app/components/experience";
import { Projects } from "@/app/components/projects";
import { Skills } from "@/app/components/skills";
import { Contact } from "@/app/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
