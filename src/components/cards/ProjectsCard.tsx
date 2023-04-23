import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project, StackItem } from "@/utils/types";
import { FiGithub, FiLink } from "react-icons/fi";

interface Props {
  project: Project
}

interface StackProps {
  tech: StackItem
}

const StackItem: FC<StackProps> = ({ tech }) => {
  return (
    <div className="flex flex-col items-center justify-end">
      <Image src={tech.icon} alt="tech - logo" height={25} width={25} />
      <p>{tech.name}</p>
    </div>
  )
}

const ProjectsCard: FC<Props> = ({ project }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md flex p-2 gap-2">
      <div className="w-1/3 flex flex-col gap-4">
        <p className="text-lg font-bold">{project.name}</p>
        <Image src={project.image} height={200} width={200} alt="project-logo"/>
        <div className="flex text-3xl text-sky-400 gap-4 w-full justify-center">
          <Link href={project.repo} target="_blank"><FiGithub/></Link>
          <Link href={project.repo} target="_blank"><FiLink/></Link>
        </div>
      </div>
      <div className="w-2/3 flex flex-col">
        <p className="text-justify">{project.description}</p>
        <p>Stack:</p>
        <div className="flex justify-around flex-wrap">
          {project.stack.map((tech: StackItem) => (
            <StackItem key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard