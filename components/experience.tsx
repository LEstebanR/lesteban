import { EXPERIENCE } from "@/lib/data";
import { H1 } from "@/components/ui/typography";
import {
  ExperienceCard,
  ExperienceType,
} from "@/components/cards/experience-card";

export function Experience() {
  return (
    <div className="flex flex-col gap-5 items-between ">
      <H1 color="primary">Experience</H1>
      {EXPERIENCE.map((job: ExperienceType, index: number) => (
        <ExperienceCard key={index} job={job} />
      ))}
    </div>
  );
}
