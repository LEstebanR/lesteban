import React, { FC } from 'react'
import ExperienceCard from './cards/experience-card'
import { H2 } from './UI/typography'

const jobs = [
  {
    position: 'Fullstack Developer',
    company: 'Devpeoplz',
    url: 'https://devpeoplz.com/',
    start: 'Nov 2022',
    end: 'Current job',
    detail:
      'Developed a recruitment portal as a fullstack developer at Devpeoplz to connect talented developers with the companys clients. Led the project independently under the direct supervision of the CEO to deliver a high-quality product.',
    stack: [
      {
        name: 'NextJs',
        icon: '/assets/images/logos/nextjs-icon.svg',
      },
      {
        name: 'Typescript',
        icon: '/assets/images/logos/typescript-icon-round.svg',
      },
      {
        name: 'Supabase',
        icon: '/assets/images/logos/supabase-icon.svg',
      },
      // {
      //   name: 'Styled Components',
      //   icon: '/assets/images/logos/styled-components.png',
      // },
    ],
  },
  {
    position: 'Frontend Developer',
    company: 'Aleluya',
    url: 'https://aleluya.com/',
    start: 'Apr 2022',
    end: 'Nov 2022',
    detail:
      'We developed and maintained a payroll and human resources product, creating new features and fixing bugs. I also worked collaboratively with a multidisciplinary team, including designers and backend developers, to ensure the product met client requirements and expectations',
    stack: [
      {
        name: 'React',
        icon: '/assets/images/logos/react.svg',
      },
      {
        name: 'MUI',
        icon: '/assets/images/logos/material-ui.svg',
      },
      {
        name: 'ReactQuery',
        icon: '/assets/images/logos/react-query-icon.svg',
      },
      {
        name: 'Cypress',
        icon: '/assets/images/logos/cypress-icon.svg',
      },
    ],
  },
]

const Experience: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <H2 gradient className="w-[200px]">
        Experience:
      </H2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <ExperienceCard key={job.position} job={job} />
        ))}
      </div>
    </div>
  )
}

export default Experience