import { H1, H3 } from "@/components/ui/typography";
import { SKILLS } from "@/lib/data";
import { Layout, Server, Database, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Skill({
  skill,
  icon,
  skills,
}: {
  skill: string;
  icon: React.ReactNode;
  skills: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {icon}
        <H3>{skill}</H3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          return (
            <Badge key={skill} variant="outline" className="bg-primary/10">
              {skill}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <H1 color="primary">Skills</H1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Skill
          skill="Frontend Development"
          icon={
            <Layout className="h-5 w-5 animate-bounce text-blue-500 [animation-duration:1s]" />
          }
          skills={SKILLS.frontend}
        />
        <Skill
          skill="Backend Development"
          icon={
            <Server className="h-5 w-5 animate-bounce text-green-500 [animation-duration:1s]" />
          }
          skills={SKILLS.backend}
        />
        <Skill
          skill="Database"
          icon={
            <Database className="h-5 w-5 animate-bounce text-orange-500 [animation-duration:1s]" />
          }
          skills={SKILLS.database}
        />
        <Skill
          skill="Programing Languages"
          icon={
            <Code className="h-5 w-5 animate-bounce text-red-500 [animation-duration:1s]" />
          }
          skills={SKILLS.programing_languages}
        />
      </div>
    </div>
  );
}
