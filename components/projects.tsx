import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/cards/project-card";

export function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
