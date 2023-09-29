import React, { FC } from 'react'
import Image from 'next/image'
import { Job, StackItem } from '@/utils/types'
import { CardBody, CardDetail, CustomLink, H4 } from '../UI/typography'

interface props {
  job: Job
}

interface StackProps {
  tech: StackItem
}

const StackItem: FC<StackProps> = ({ tech }) => {
  return (
    <div className="flex h-14 w-20 flex-col items-center">
      <Image src={tech.icon} alt="tech - logo" height={25} width={25} />
      <CardDetail>{tech.name}</CardDetail>
    </div>
  )
}

const ExperienceCard: FC<props> = ({ job }) => {
  return (
    <div className="flex  flex-col gap-4 rounded-lg  border border-l-8 border-black border-s-primary bg-light-card p-4 shadow-md dark:border-gray-200 dark:border-s-primary dark:bg-dark-card entrance-animation">
      <div className="md:flex">
        <div className="flex flex-col gap-2 md:w-1/3">
          <H4>{job.position}</H4>
          <CustomLink url={job.url}>{job.company}</CustomLink>
          <span className="mb-2">
            <CardDetail>
              {job.start} - {job.end}
            </CardDetail>
          </span>
        </div>
        <div className="flex flex-col md:w-2/3">
          <CardBody>{job.detail}</CardBody>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <span className="w-1/3">
          <H4>Stack:</H4>
        </span>
        <div className="flex flex-wrap justify-between md:w-2/3">
          {job.stack.map((tech: StackItem) => (
            <StackItem key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
