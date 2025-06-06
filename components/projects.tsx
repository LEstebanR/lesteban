'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { ProjectCard } from '@/components/cards/project-card'
import { usePathname } from 'next/navigation'

const PROJECTS = [
  {
    name: 'oniricapp',
    description: 'oniricapp-description',
    stack: ['Next.js', 'Tailwind', 'Llama'],
    link: 'https://dream-interpreter-six.vercel.app/',
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
  {
    name: 'devpeoplz',
    description: 'devpeoplz-project-description',
    stack: ['Next.js', 'Tailwind', 'Supabase'],
    link: 'https://devpeoplz.com/',
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
