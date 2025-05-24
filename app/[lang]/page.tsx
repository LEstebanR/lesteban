import { AboutMe } from "@/components/about-me";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default async function Home({
  params,
}: {
  params: { lang: "en" | "es" };
}) {
  const { lang } = await params;
  return (
    <div className="flex flex-col gap-12">
      <AboutMe lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}
