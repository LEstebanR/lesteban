import { H1, H3 } from "./ui/typography";
import { SKILLS } from "@data/data";
import { Layout, Server, Database, Code } from "lucide-react";
import { Chip } from "./ui/chip";

function Skill({skill, icon, skills}: { skill: string, icon: React.ReactNode, skills: string[]}){
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {icon}
        <H3>{skill}</H3>
      </div>
      <div className="flex flex-wrap gap-2">
        {
          skills.map(skill => {
            return <Chip label={skill} key={skill}/>
          })
        }
      </div>
    </div>
  )
}

export function Skills(){
  return <div className="flex flex-col gap-4">
    <H1 color="primary">Skills</H1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Skill skill="Frontend Development" icon={<Layout className="h-5 w-5 text-blue-500 animate-bounce [animation-duration:2s]" />} skills={SKILLS.frontend}/>
      <Skill skill="Backend Development" icon={<Server className="h-5 w-5 text-green-500 animate-bounce [animation-duration:2s]" />} skills={SKILLS.backend}/>
      <Skill skill="Database" icon={<Database className="h-5 w-5 text-orange-500 animate-bounce [animation-duration:2s]" />} skills={SKILLS.database}/>
      <Skill skill="Programing language" icon={<Code className="h-5 w-5 text-red-500 animate-bounce [animation-duration:2s]" />} skills={SKILLS.programing_languages}/>

    </div>
  </div>
}