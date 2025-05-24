import { ExperienceCard } from "@/components/cards/experience-card";
import { SeeMoreButton } from "@/components/ui/see-more-button";
import { getDictionary } from "@/app/[lang]/dictionaries";

const EXPERIENCE = {
  aleluya: {
    position: "frontend-developer",
    company: "Aleluya",
    description: "aleluya-description",
    startDate: "january-2025",
    endDate: "current",
    stack: ["React", "MUI", "React-Query", "Cypress"],
  },
  aleluya_freelance: {
    position: "frontend-developer-freelance",
    company: "Aleluya",
    description: "aleluya-freelance-description",
    startDate: "august-2024",
    endDate: "december-2024",
    stack: ["React", "MUI", "React-Query", "Cypress"],
  },
  devpeoplz: {
    position: "fullstack-developer",
    company: "DevPeoplz",
    description: "devpeoplz-description",
    startDate: "november-2022",
    endDate: "january-2024",
    stack: ["Next.js", "Typescript", "Tailwind", "Supabase"],
  },
  nominapp: {
    position: "frontend-developer",
    company: "Nominapp",
    description: "nominapp-description",
    startDate: "april-2022",
    endDate: "november-2022",
    stack: ["React", "MUI", "React-Query", "Cypress"],
  },
};

export async function Experience({ lang }: { lang: "en" | "es" }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-5 items-betwee">
      <h1 className="text-primary text-2xl font-bold">
        {dictionary["experience"]}
      </h1>
      <ExperienceCard job={EXPERIENCE.aleluya} lang={lang} />
      <ExperienceCard job={EXPERIENCE.aleluya_freelance} lang={lang} />
      <SeeMoreButton
        lang={lang}
        seeMoreCopy={dictionary["see-more"]}
        seeLessCopy={dictionary["see-less"]}
      >
        <ExperienceCard job={EXPERIENCE.devpeoplz} lang={lang} />
        <ExperienceCard job={EXPERIENCE.nominapp} lang={lang} />
      </SeeMoreButton>
    </div>
  );
}
