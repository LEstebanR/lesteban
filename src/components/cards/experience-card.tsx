import React, { FC } from 'react'
import Image from 'next/image'
import { Job, StackItem } from '@/utils/types'
import { CardBody, CustomLink, ExperienceTime, H4 } from '../UI/typography'
import StackItemLogo from './stack-item'

interface props {
  job: Job
}

const ExperienceCard: FC<props> = ({ job }) => {
  return (
    <>
      <div className="flex  flex-col gap-4 rounded-lg  border border-l-8 border-black border-s-primary bg-light-card p-4 shadow-md dark:border-gray-200 dark:border-s-primary dark:bg-dark-card md:hidden">
        <div className="md:flex">
          <div className="flex items-center gap-2 ">
            <Image
              src={job.logo}
              alt="company logo"
              height={80}
              width={80}
              className="rounded-full border-4 border-primary"
            />
            <div className="flex flex-col gap-2 md:w-1/3">
              <H4>{job.position}</H4>
              <CustomLink url={job.url}>{job.company}</CustomLink>
              <span className="mb-2">
                <ExperienceTime>
                  {job.start} - {job.end}
                </ExperienceTime>
              </span>
            </div>
          </div>

          <div className="flex flex-col md:w-2/3 ">
            <CardBody>{job.detail}</CardBody>
          </div>
        </div>

        <div className="gap-2 md:flex md:items-center">
          <span className="w-1/3">
            <H4>Stack:</H4>
          </span>
          <div className="flex flex-wrap justify-between md:w-2/3">
            {job.stack.map((tech: StackItem) => (
              <StackItemLogo key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        <p className="hidden md:block">experience desktop</p>
      </div>
    </>
  )
}

export default ExperienceCard
