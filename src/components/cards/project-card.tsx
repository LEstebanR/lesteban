import { Project } from "@types/main";
import { Body, H3 } from "@components/ui/typography";
import { Chip } from "@components/ui/chip";
import { Link } from "@components/ui/link";
import { ExternalLink , GithubIcon } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-col justify-between h-full gap-4 border p-4 rounded-md shadow-lg border-gray-200 shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 hover:border-gray-300">
            <H3>{project.name}</H3>
            <Body>{project.description}</Body>
            <div className="flex gap-2 flex-wrap">
                {project.stack.map((stack) => (
                    <Chip key={stack} label={stack} />
                ))}
            </div>
            <div className="flex gap-8">
                {project.repo ? (
                  <Link href={project.repo} withIcon={true} icon={<GithubIcon className="w-4 h-4" />}>Code</Link>
                ) : null}
                {project.link ? (
                  <Link href={project.link} withIcon={true} icon={<ExternalLink className="w-4 h-4" />}>Live Demo</Link>
                ) : null}
            </div>
        </div>
    )
}

