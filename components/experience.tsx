import { EXPERIENCE } from "@/lib/data";
import { ExperienceCard } from "@/components/cards/experience-card";
import { SeeMoreButton } from "@/components/ui/see-more-button";

export function Experience() {
  return (
    <div className="flex flex-col gap-5 items-betwee">
      <h1 className="text-primary text-2xl font-bold">Experience</h1>
      <ExperienceCard job={EXPERIENCE.aleluya} />
      <ExperienceCard job={EXPERIENCE.aleluya_freelance} />
      <SeeMoreButton>
        <ExperienceCard job={EXPERIENCE.devpeoplz} />
        <ExperienceCard job={EXPERIENCE.nominapp} />
      </SeeMoreButton>
    </div>
  );
}
