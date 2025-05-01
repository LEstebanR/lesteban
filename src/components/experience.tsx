import { H1 } from "@components/ui/typography";
import { Experience as ExperienceType } from "@types/main";
import { EXPERIENCE } from "@data/data";
import { ExperienceCard } from "@components/cards/experience-card";
import { useTranslation } from "react-i18next";

export function Experience() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5 items-between ">
      <H1 color="primary">{t("experience")}</H1>
      {EXPERIENCE.map((job: ExperienceType) => (
        <ExperienceCard job={job} />
      ))}
    </div>
  );
}
