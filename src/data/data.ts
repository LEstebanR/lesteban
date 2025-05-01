import { Github, Linkedin, Mail, Map } from 'lucide-react'

export const HEADER_LINKS = [
  {
    label: 'Github',
    href: 'https://github.com/LEstebanR',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lestebanr/',
  },
  {
    label: 'Email',
    href: 'mailto:leramirezca@gmail.com',
  },
]

export const EXPERIENCE = [
  {
    position: 'frontend-developer',
    company: 'Aleluya',
    description: 'aleluya-description',
    startDate: 'january-2025',
    endDate: 'current',
    stack: ['React', 'MUI', 'React-Query', 'Cypress'],
  },
  {
    position: 'frontend-developer-freelance',
    company: 'Aleluya',
    description: 'aleluya-freelance-description',
    startDate: 'august-2024',
    endDate: 'december-2024',
    stack: ['React', 'MUI', 'React-Query', 'Cypress'],
  },
  {
    position: 'Full Stack Developer',
    company: 'DevPeoplz',
    description: 'devpeoplz-description',
    startDate: 'nov-2022',
    endDate: 'january-2024',
    stack: ['Next.js', 'Typescript', 'Tailwind', 'Supabase'],
  },
  {
    position: 'frontend-developer',
    company: 'Nominapp',
    description: 'aleluya-description',
    startDate: 'april-2022',
    endDate: 'nov-2022',
    stack: ['React', 'MUI', 'React-Query', 'Cypress'],
  },
]

export const PROJECTS = [
  {
    name: 'Humedad Arena',
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
    name: 'DevPeoplz',
    description: 'devpeoplz-project-description',
    stack: ['Next.js', 'Tailwind', 'Supabase'],
    link: 'https://devpeoplz.com/',
  },
  {
    name: 'Poketrivia',
    description: 'poketrivia-description',
    stack: ['React', 'React-Query', 'Vite'],
    link: 'https://poketrivia.vercel.app/',
    repo: 'https://github.com/LEstebanR/poketrivia',
  },
]

export const CONTACT_LINKS = [
  {
    label: 'Github',
    href: 'https://github.com/LEstebanR',
    user: 'LEstebanR',
    icon: Github,
    iconColor: 'text-gray-900',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lestebanr/',
    user: 'Luis Esteban',
    icon: Linkedin,
    iconColor: 'text-blue-600',
  },
  {
    label: 'Email',
    href: 'mailto:leramirezca@gmail.com',
    user: 'leramirezca@gmail.com',
    icon: Mail,
    iconColor: 'text-red-500',
  },
  {
    label: 'location',
    user: 'Medellín, Colombia',
    icon: Map,
    iconColor: 'text-green-500',
  },
]

export const SKILLS = {
  frontend: ['React', 'Next', 'Tailwind'],
  backend: ['Node.js', 'Supabase'],
  database: ['MongoDB', 'PostgresSQL'],
  programing_languages: ['Javascript', 'Typescript'],
}
