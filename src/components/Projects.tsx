import React, { FC } from 'react'
import ProjectsCard from './cards/ProjectsCard'
import { Project } from '@/utils/types'

const projects: Project[] = [
  {
    name: 'Calculator',
    url: 'https://calculator-app-lesteban.vercel.app/',
    image: '/assets/images/projects/calculator.png',
    repo: 'https://github.com/LEstebanR/calculator-app',
    description: 'I developed a calculator using Tailwind and Next.js to enhance my skills in using Tailwind in React projects. This project demonstrates my ability to build a functional and aesthetically pleasing application, as well as my ability to learn new technologies and apply them in my projects.',
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
      }

    ]
  },
  {
    name: 'Bookmark landing',
    url: 'https://test-terapia-mia.vercel.app/',
    image: '/assets/images/projects/bookmark.png',
    repo: 'https://github.com/LEstebanR/testTerapiaMia',
    description: 'I completed a Frontend Mentor exercise by building a landing page using Next.js and Styled Components. This was a great opportunity to showcase my ability to use these technologies and create a functional and visually appealing landing page.',
    stack: [
      {
        name: 'NextJs',
        icon: '/assets/images/logos/nextjs-icon.svg',
      },
      {
        name: 'Styled-Components',
        icon: '/assets/images/logos/styled-components.png',
      },
    ]
  },
  {
    name: 'Poketrivia',
    url: 'https://poketrivia.vercel.app/',
    image: '/assets/images/projects/poketrivia.png',
    repo: 'https://github.com/LEstebanR/poketrivia',
    description: 'I developed a Pokemon guessing game using React-Query to consume data from the Pokemon API. This was a great opportunity to improve my skills in React and learn a new library, such as React-Query, to enhance the application performance.',
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
      }

    ]
  },
]

const Projects: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl p-4">
      <h2 className="text-4xl text-sky-500">Projects:</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectsCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
