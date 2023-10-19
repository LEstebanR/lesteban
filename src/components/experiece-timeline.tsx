import clsx from 'clsx'
import React, { FC, useState } from 'react'
import Image from 'next/image'
import { Body, CardBody, CustomLink, ExperienceTime } from './UI/typography'
import StackItemLogo from './cards/stack-item'

type Props = {
  jobs: Job[]
}

type Job = {
  company: string
  logo: string
  position: string
  start: string
  end: string
  detail: string
  stack: any
  url: string
}

const ExperienceTimeline: FC<Props> = ({ jobs }) => {
  const [active, setActive] = useState(0)
  return (
    <div className="hidden min-h-[300px] w-full  grid-cols-3  md:grid">
      <div className="col-span-1 ">
        <ul role="list" className="flex h-full flex-col justify-between">
          {jobs.map((job, index) => (
            <li key={index} onMouseOver={() => setActive(index)}>
              <div className="relative pb-8">
                {index !== jobs.length - 1 ? (
                  <span
                    className="absolute left-7 top-14 -ml-px h-full w-0.5 bg-primary"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={clsx(
                        'flex  items-center justify-center rounded-full ring-8 ring-white'
                      )}
                    >
                      <Image
                        src={job.logo}
                        alt="company logo"
                        height={100}
                        width={100}
                        className="h-14 w-14 rounded-full border-2 border-primary object-cover"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p
                        className={clsx(
                          'px-2 text-xl',
                          active === index
                            ? 'bg-secondary italic  text-gray-800'
                            : 'text-gray-500'
                        )}
                      >
                        {job.position}{' '}
                      </p>

                      <CustomLink url={job.url} className="px-2">
                        {job.company}
                      </CustomLink>
                      <ExperienceTime
                        className={clsx(
                          'px-2',
                          active === index ? ' text-gray-800 ' : 'text-gray-500'
                        )}
                      >
                        {job.start} - {job.end}{' '}
                      </ExperienceTime>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 flex items-center justify-end ">
        <div className="flex h-full w-9/12 flex-col gap-2 border-4 border-dotted border-secondary p-4">
          <CardBody>{jobs[active].detail}</CardBody>
          <p>Stack:</p>
          <div className=" flex flex-wrap justify-center gap-4">
            {jobs[active].stack.map((tech: any) => (
              <StackItemLogo key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceTimeline
