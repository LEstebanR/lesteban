import { H1, H3 } from "@/app/components/typography";
import { SKILLS } from "@/app/utils/data";
import { Layout, Server, Database, Code } from "lucide-react";
import { Chip } from "@/app/components/chip";
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
          return <Chip label={skill} key={skill} />;
        })}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <H1 color="primary">Skills</H1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Skill
          skill="Frontend Development"
          icon={
            <Layout className="h-5 w-5 animate-bounce text-blue-500 [animation-duration:2s]" />
          }
          skills={SKILLS.frontend}
        />
        <Skill
          skill="Backend Development"
          icon={
            <Server className="h-5 w-5 animate-bounce text-green-500 [animation-duration:2s]" />
          }
          skills={SKILLS.backend}
        />
        <Skill
          skill="Database"
          icon={
            <Database className="h-5 w-5 animate-bounce text-orange-500 [animation-duration:2s]" />
          }
          skills={SKILLS.database}
        />
        <Skill
          skill="Programing Languages"
          icon={
            <Code className="h-5 w-5 animate-bounce text-red-500 [animation-duration:2s]" />
          }
          skills={SKILLS.programing_languages}
        />
      </div>
    </div>
  );
}
