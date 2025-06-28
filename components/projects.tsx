'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

import { usePathname } from 'next/navigation'

import { ProjectCard } from '@/components/cards/project-card'

const PROJECTS = [
  {
    name: 'roadmapcol',
    description: 'roadmapcol-description',
    stack: ['Next.js', 'Tailwind', 'Shadcn'],
    link: 'https://roadmapcol.com/',
    repo: 'https://github.com/LEstebanR/roadmapcol',
  },
  {
    name: 'oniricapp',
    description: 'oniricapp-description',
    stack: ['Next.js', 'Tailwind', 'Llama'],
    link: 'https://www.oniricapp.com/',
    repo: 'https://github.com/LEstebanR/dream_Interpreter',
  },
  {
    name: 'humedad-arena',
    description: 'humedad-arena-description',
    stack: ['React', 'Typescript', 'Tailwind'],
    link: 'https://humedad-arena.vercel.app/',
    repo: 'https://github.com/LEstebanR/humedad_arena',
  },

  {
    name: 'frontend-mentor-challenges',
    description: 'frontend-mentor-challenges-description',
    stack: ['React', 'Typescript', 'Tailwind'],
    link: 'https://frontend-mentor-challenges-lestebanr.vercel.app/',
    repo: 'https://github.com/LEstebanR/Frontend-mentor-challenges',
  },
]

export function Projects() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'
  const dictionary = getClientDictionary(lang)
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary text-2xl font-bold">
        {dictionary['projects']}
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
