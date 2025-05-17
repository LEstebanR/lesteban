import { Link } from "@/components/ui/link";
import { ExternalLink, GithubIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-primary flex h-full flex-col">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p>{project.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-center">
        <div className="flex flex-wrap gap-2 mt-2 ">
          {project.stack.map((stack) => (
            <Badge
              key={stack}
              variant="outline"
              className="bg-primary/10 dark:bg-primary/40"
            >
              {stack}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between w-full">
          <div>
            {project.repo && (
              <Link
                href={project.repo}
                withIcon={true}
                icon={<GithubIcon className="h-4 w-4" />}
              >
                Code
              </Link>
            )}
          </div>
          <div>
            {project.link && (
              <Link
                href={project.link}
                withIcon={true}
                icon={<ExternalLink className="h-4 w-4" />}
              >
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
