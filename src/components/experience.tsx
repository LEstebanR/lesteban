import { H1 } from "@components/ui/typography";
import { Experience as ExperienceType } from "@types/main";
import { EXPERIENCE } from "@data/data";
import { ExperienceCard } from "@components/cards/experience-card";

export function Experience() {
  return <div className="flex flex-col gap-5 items-between ">
    <H1 color="primary">Experience</H1>
    {EXPERIENCE.map((job: ExperienceType) => (
      <ExperienceCard job={job} />
    ))}
  </div>;
}