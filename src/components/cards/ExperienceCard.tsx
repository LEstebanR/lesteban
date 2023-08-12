import React, { FC } from 'react'
import Image from 'next/image'
import { Job, StackItem } from '@/utils/types'
import { CardBody, CardDetail, CustomLink, H4 } from '../UI/Typography'

interface props {
  job: Job
}

interface StackProps {
  tech: StackItem
}

const StackItem: FC<StackProps> = ({ tech }) => {
  return (
    <div className="flex flex-col items-center w-20 h-14">
      <Image src={tech.icon} alt="tech - logo" height={25} width={25} />
      <CardDetail>{tech.name}</CardDetail>
    </div>
  )
}

const ExperienceCard: FC<props> = ({ job }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md flex flex-col  p-4 gap-4 bg-white border border-s-primary border-l-8">
      <div className="md:flex">
        <div className="md:w-1/3 flex flex-col gap-2">
          <H4>{job.position}</H4>
          <CustomLink url={job.url}>{job.company}</CustomLink>
          <span className="mb-2">
            <CardDetail>
              {job.start} - {job.end}
            </CardDetail>
          </span>
        </div>
        <div className="md:w-2/3 flex flex-col">
          <CardBody>{job.detail}</CardBody>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <span className="w-1/3">
          <H4>Stack:</H4>
        </span>
        <div className="flex justify-between flex-wrap md:w-2/3">
          {job.stack.map((tech: StackItem) => (
            <StackItem key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
