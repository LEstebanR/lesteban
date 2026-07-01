import { ContactLink } from '@/components/cards/contact-card'
import { ExperienceType } from '@/components/cards/experience-card'

export type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  repo?: string
}

export type Skills = {
  frontend: string[]
  backend: string[]
  database: string[]
  programing_languages: string[]
}

export const EXPERIENCE: Record<string, ExperienceType> = {
  aleluya: {
    position: 'frontend-developer',
    company: 'Aleluya',
    description: 'aleluya-description',
    startDate: 'january-2025',
    endDate: 'current',
    stack: ['React', 'MUI', 'React-Query', 'Cypress'],
  },
  aleluya_freelance: {
    position: 'frontend-developer-freelance',
    company: 'Aleluya',
    description: 'aleluya-freelance-description',
    startDate: 'august-2024',
    endDate: 'december-2024',
    stack: ['React', 'MUI', 'React-Query', 'Cypress'],
  },
  devpeoplz: {
    position: 'fullstack-developer',
    company: 'DevPeoplz',
    description: 'devpeoplz-description',
    startDate: 'november-2022',
    endDate: 'january-2024',
    stack: ['Next.js', 'Typescript', 'Tailwind', 'Supabase'],
  },
  nominapp: {
    position: 'frontend-developer',
    company: 'Nominapp',
    description: 'nominapp-description',
    startDate: 'april-2022',
    endDate: 'november-2022',
    stack: ['React', 'MUI', 'React-Query', 'Cypress'],
  },
}

export const PROJECTS: Project[] = [
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
    name: 'conexory',
    description: 'conexory-description',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Neon'],
    link: 'https://conexory.com',
    repo: 'https://github.com/LEstebanR/conexory',
  },
  {
    name: 'humedad-arena',
    description: 'humedad-arena-description',
    stack: ['React', 'Typescript', 'Tailwind'],
    link: 'https://humedad-arena.vercel.app/',
    repo: 'https://github.com/LEstebanR/humedad_arena',
  },
]

export const SKILLS: Skills = {
  frontend: ['React', 'Next', 'Tailwind'],
  backend: ['Node.js', 'Supabase'],
  database: ['MongoDB', 'PostgresSQL'],
  programing_languages: ['Javascript', 'Typescript'],
}

export const CONTACT_LINKS_STATIC = [
  {
    label: 'github',
    href: 'https://github.com/LEstebanR',
    user: 'LEstebanR',
    lightIcon: '/logos/github_light.svg',
    darkIcon: '/logos/github_dark.svg',
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/lestebanr/',
    user: 'Luis Esteban',
    lightIcon: '/logos/linkedin.svg',
    darkIcon: '/logos/linkedin.svg',
  },
  {
    label: 'email',
    href: 'mailto:leramirezca@gmail.com',
    user: 'leramirezca@gmail.com',
    lightIcon: '/logos/mail_light.svg',
    darkIcon: '/logos/mail_dark.svg',
  },
  {
    label: 'location',
    href: '#',
    user: 'Colombia',
    lightIcon: '/logos/location_light.svg',
    darkIcon: '/logos/location_dark.svg',
  },
]

export function resolveContactLinks(isDark: boolean): ContactLink[] {
  return CONTACT_LINKS_STATIC.map(({ lightIcon, darkIcon, ...rest }) => ({
    ...rest,
    icon: isDark ? darkIcon : lightIcon,
    iconColor: '',
  }))
}
