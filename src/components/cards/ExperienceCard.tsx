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
    <div className="flex flex-col items-center">
      <Image src={tech.icon} alt="tech - logo" height={25} width={25} />
      <CardDetail>{tech.name}</CardDetail>
    </div>
  )
}

const ExperienceCard: FC<props> = ({ job }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md flex p-2 gap-2 bg-white">
      <div className="w-1/3 flex flex-col gap-2">
        <H4>{job.position}</H4>
        <CustomLink url={job.url}>{job.company}</CustomLink>
        <CardDetail>
          {job.start} - {job.end}
        </CardDetail>
      </div>
      <div className="w-2/3 flex flex-col">
        <CardBody>{job.detail}</CardBody>
        <H4>Stack:</H4>
        <div className="flex justify-around flex-wrap">
          {job.stack.map((tech: StackItem) => (
            <StackItem key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
