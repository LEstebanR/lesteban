import { Calendar, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getDictionary } from "@/app/[lang]/dictionaries";

export type ExperienceType = {
  position: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  stack: string[];
};

export async function ExperienceCard({
  job,
  lang,
}: {
  job: ExperienceType;
  lang: "en" | "es";
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="mb-4 flex flex-col gap-2">
      <h3 className="text-lg font-bold">
        {dictionary[job.position as keyof typeof dictionary]}
      </h3>
      <div className="flex items-center gap-2">
        <h2 className="text-muted">{job.company}</h2>
        <Calendar className="text-muted ml-1 h-4 w-4" />
        <h2 className="text-muted">
          {dictionary[job.startDate as keyof typeof dictionary]} -{" "}
          {dictionary[job.endDate as keyof typeof dictionary]}
        </h2>
      </div>
      <p>{dictionary[job.description as keyof typeof dictionary]}</p>

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
