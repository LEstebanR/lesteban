import React, { FC } from 'react'
import ExperienceCard from './cards/experience-card'
import { H2 } from './UI/typography'
import ExperienceTimeline from './experiece-timeline'

const jobs = [
  {
    position: 'Frontend Developer',
    company: 'Aleluya',
    logo: '/assets/images/logos/aleluya-logo.jpg',
    url: 'https://aleluya.com/',
    start: 'Jan 2025',
    end: 'Currently',
    detail:
      'Developed and maintained a payroll and human resources product, creating new features and fixing bugs. Worked with a multidisciplinary team, including designers and developers, to ensure the product met client requirements and expectations',
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
  {
    position: 'Frontend Developer (freelance)',
    company: 'Aleluya',
    logo: '/assets/images/logos/aleluya-logo.jpg',
    url: 'https://aleluya.com/',
    start: 'Aug 2024',
    end: 'Dec 2024',
    detail:
      'Fix bugs and develop new features for a payroll and human resources product. Work with a multidisciplinary team, including designers and developers, to ensure the product meets client requirements and expectations.',
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
  {
    position: 'Fullstack Developer',
    company: 'Devpeoplz',
    logo: '/assets/images/logos/devpeoplz-logo.png',
    url: 'https://devpeoplz.com/',
    start: 'Nov 2022',
    end: 'Jan 2024',
    detail:
      'Developed a recruitment portal as a fullstack developer at Devpeoplz to connect talented developers with the company clients. Led the project under the direct supervision of the CEO to deliver a high-quality product.',
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
    company: 'Nominapp',
    logo: '/assets/images/logos/nominapp-logo.jpg',
    url: 'https://aleluya.com/',
    start: 'Apr 2022',
    end: 'Nov 2022',
    detail:
      'Developed and maintained a payroll and human resources product, creating new features and fixing bugs. Worked with a multidisciplinary team, including designers and developers, to ensure the product met client requirements and expectations',
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
    <div className="flex w-full flex-col gap-4">
      <H2 gradient className="w-[200px]">
        Experience:
      </H2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {jobs.map((job) => (
          <ExperienceCard key={job.position} job={job} />
        ))}
      </div>
      <ExperienceTimeline jobs={jobs} />
    </div>
  )
}

export default Experience
