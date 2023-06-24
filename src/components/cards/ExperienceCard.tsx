import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Job, StackItem } from '@/utils/types'

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
      <p>{tech.name}</p>
    </div>
  )
}

const ExperienceCard: FC<props> = ({ job }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md flex p-2 gap-2 bg-white">
      <div className="w-1/3 flex flex-col gap-2">
        <p className="text-lg font-bold">{job.position}</p>
        <Link href={job.url} target="_blank">
          <p className="text-lg text-sky-400">{job.company}</p>
        </Link>
        <p>
          {job.start} - {job.end}
        </p>
      </div>
      <div className="w-2/3 flex flex-col">
        <p className="text-justify">{job.detail}</p>
        <p>Stack:</p>
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
