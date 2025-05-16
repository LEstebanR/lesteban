import { Body, H3 } from "@/app/components/typography";
import { Chip } from "@/app/components/chip";
import { Link } from "@/app/components/link";
import { ExternalLink, GithubIcon } from "lucide-react";

type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};
export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="shadow-primary/20 hover:shadow-primary/40 flex h-full flex-col justify-between gap-4 rounded-md border border-gray-200 p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-300">
      <H3>{project.name}</H3>
      <Body>{project.description}</Body>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((stack) => (
          <Chip key={stack} label={stack} />
        ))}
      </div>
      <div className="flex gap-8">
        {project.repo ? (
          <Link
            href={project.repo}
            withIcon={true}
            icon={<GithubIcon className="h-4 w-4" />}
          >
            Code
          </Link>
        ) : null}
        {project.link ? (
          <Link
            href={project.link}
            withIcon={true}
            icon={<ExternalLink className="h-4 w-4" />}
          >
            Live Demo
          </Link>
        ) : null}
      </div>
    </div>
  );
}
