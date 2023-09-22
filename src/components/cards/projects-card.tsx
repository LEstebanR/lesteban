import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project, StackItem } from '@/utils/types'
import { FiGithub, FiLink } from 'react-icons/fi'
import { CardBody, CardDetail, H4 } from '../UI/typography'

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
    <div className="flex  flex-col gap-4 rounded-lg  border border-l-8 border-black border-s-secondary  bg-light-card p-2  shadow-md dark:border-gray-200 dark:border-s-secondary dark:bg-dark-card">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:w-1/3">
          <H4>{project.name}</H4>
          <Image
            src={project.image}
            height={200}
            width={200}
            alt="project-logo"
          />
          <div className="flex w-full justify-center gap-4 text-3xl text-primary">
            <Link href={project.repo} target="_blank">
              <FiGithub />
            </Link>
            <Link href={project.url} target="_blank">
              <FiLink />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:w-2/3">
          <CardBody>{project.description}</CardBody>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <span className="w-1/3">
          <H4>Stack:</H4>
        </span>
        <div className="flex flex-wrap justify-between md:w-2/3">
          {project.stack.map((tech: StackItem) => (
            <StackItem key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
