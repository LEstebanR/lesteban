import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project, StackItem } from '@/utils/types'
import { FiGithub, FiLink } from 'react-icons/fi'
import { CardBody, H4 } from '../UI/typography'
import StackItemLogo from './stack-item'

interface Props {
  project: Project
}

const ProjectsCard: FC<Props> = ({ project }) => {
  return (
    <div className="flex  flex-col justify-around gap-4 rounded-lg  border border-l-8 border-black border-s-secondary  bg-light-card p-2  shadow-md dark:border-gray-200 dark:border-s-secondary dark:bg-dark-card">
      <div className="flex w-full flex-col items-center justify-around gap-1 ">
        <H4>{project.name}</H4>

        <Image
          src={project.image}
          height={1000}
          width={1000}
          alt="project-logo"
          className="m-1 w-full rounded-lg"
        />
        <div className="flex w-full flex-col items-start">
          <H4>Stack:</H4>
          <div className="flex w-full flex-wrap justify-center gap-2">
            {project.stack.map((tech: StackItem) => (
              <StackItemLogo key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
      <CardBody>{project.description}</CardBody>
      <div className="flex w-full justify-end gap-4 text-3xl text-primary">
        <Link href={project.repo} target="_blank">
          <FiGithub />
        </Link>
        <Link href={project.url} target="_blank">
          <FiLink />
        </Link>
      </div>
    </div>
  )
}

export default ProjectsCard
