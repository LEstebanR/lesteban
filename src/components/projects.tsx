import { H1 } from "@components/ui/typography";
import { PROJECTS } from "@data/data";
import { ProjectCard } from "./cards/project-card";

export function Projects() {
    return (
        <div className="flex flex-col gap-4">
            <H1 color="primary">Projects</H1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    )
}

