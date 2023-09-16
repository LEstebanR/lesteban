import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project, StackItem } from '@/utils/types'
import { FiGithub, FiLink } from 'react-icons/fi'
import { CardBody, CardDetail, H4 } from '../UI/Typography'

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
      <CardDetail>{tech.name}</CardDetail>
    </div>
  )
}

const ProjectsCard: FC<Props> = ({ project }) => {
  return (
    <div className="rounded-lg  shadow-md flex flex-col  p-2 gap-4 bg-white border border-s-secondary border-l-8 ">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3 flex flex-col gap-4 items-center">
          <H4>{project.name}</H4>
          <Image
            src={project.image}
            height={200}
            width={200}
            alt="project-logo"
          />
          <div className="flex text-3xl text-primary gap-4 w-full justify-center">
            <Link href={project.repo} target="_blank">
              <FiGithub />
            </Link>
            <Link href={project.url} target="_blank">
              <FiLink />
            </Link>
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col">
          <CardBody>{project.description}</CardBody>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <span className="w-1/3">
          <H4>Stack:</H4>
        </span>
        <div className="flex justify-between flex-wrap md:w-2/3">
          {project.stack.map((tech: StackItem) => (
            <StackItem key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
