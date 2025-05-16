import { EXPERIENCE } from "@/app/utils/data";
import { H1 } from "@/app/components/typography";
import {
  ExperienceCard,
  ExperienceType,
} from "@/app/components/experience-card";

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
