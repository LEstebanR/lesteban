import { H3, Subtitle, Body } from "@/app/components/typography";
import { Calendar, Code } from "lucide-react";
import { Chip } from "@/app/components/chip";

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
      <H3>{job.position}</H3>
      <div className="flex items-center gap-2">
        <Subtitle>{job.company}</Subtitle>
        <Calendar className="text-muted ml-1 h-4 w-4" />
        <Subtitle>
          {job.startDate} - {job.endDate}
        </Subtitle>
      </div>
      <Body>{job.description}</Body>

      <div className="wrap flex items-center gap-2">
        <Code className="text-primary h-4 w-4" />
        {job.stack.map((stack) => (
          <Chip key={stack} label={stack} />
        ))}
      </div>
    </div>
  );
}
