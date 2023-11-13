import React, { FC } from 'react'
import ProjectsCard from './cards/projects-card'
import { Project } from '@/utils/types'
import { H2 } from './UI/typography'

const projects: Project[] = [
  {
    name: 'Devpeoplz',
    url: 'https://devpeoplz.com/',
    image: '/assets/images/projects/devpeoplz.png',
    repo: 'https://gitlab.com/devpeoplz2/devpeoplz',
    description:
      'Developed a recruitment portal as a fullstack developer at Devpeoplz to connect talented developers with the company clients. Led the project independently under the direct supervision of the CEO to deliver a high-quality product.',
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
    ],
  },
  {
    name: 'Space tourism',
    url: 'https://fm-space-tourism-iota.vercel.app/',
    image: '/assets/images/projects/space-tourism.jpg ',
    repo: 'https://github.com/LEstebanR/FM_Space_Tourism',
    description:
      'This application was created with NextJs, Typescript and tailwind mainly. The idea was to apply my knowledge in Tailwind which is a technology that I am looking to improve.',
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
        name: 'Tailwind',
        icon: '/assets/images/logos/tailwindcss-icon.svg',
      },
    ],
  },
  {
    name: 'Bookmark landing',
    url: 'https://test-terapia-mia.vercel.app/',
    image: '/assets/images/projects/bookmark.png',
    repo: 'https://github.com/LEstebanR/testTerapiaMia',
    description:
      'Landing page using Next.js and Styled Components. This was a great opportunity to showcase my ability to use these technologies and create a functional and visually appealing landing page.',
    stack: [
      {
        name: 'NextJs',
        icon: '/assets/images/logos/nextjs-icon.svg',
      },
      {
        name: 'Styled Components',
        icon: '/assets/images/logos/styled-components.png',
      },
    ],
  },
  {
    name: 'Poketrivia',
    url: 'https://poketrivia.vercel.app/',
    image: '/assets/images/projects/poketrivia.png',
    repo: 'https://github.com/LEstebanR/poketrivia',
    description:
      'Pokemon guessing game using React-Query to consume data from the Pokemon API. This was a great opportunity to improve my skills in React and learn a new library, such as React-Query, to enhance the application performance.',
    stack: [
      {
        name: 'React',
        icon: '/assets/images/logos/react.svg',
      },
      {
        name: 'React-query',
        icon: '/assets/images/logos/react-query-icon.svg',
      },
      {
        name: 'Vite',
        icon: '/assets/images/logos/vitejs.svg',
      },
    ],
  },
]

const Projects: FC = () => {
  return (
    <div className="my-4 flex w-full flex-col gap-4">
      <H2 gradient className="w-[200px]">
        Projects:
      </H2>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectsCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
