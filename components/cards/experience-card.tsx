import { Calendar, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type ExperienceType = {
  position: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  stack: string[];
};

export function ExperienceCard({ job }: { job: ExperienceType }) {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <h3 className="text-lg font-bold">{job.position}</h3>
      <div className="flex items-center gap-2">
        <h2 className="text-muted">{job.company}</h2>
        <Calendar className="text-muted ml-1 h-4 w-4" />
        <h2 className="text-muted">
          {job.startDate} - {job.endDate}
        </h2>
      </div>
      <p className="text-gray-900 dark:text-white">{job.description}</p>

      <div className="wrap flex items-center gap-2">
        <Code className="text-primary h-4 w-4" />
        {job.stack.map((stack) => (
          <Badge key={stack} variant="outline" className="bg-primary/10">
            {stack}
          </Badge>
        ))}
      </div>
    </div>
  );
}
