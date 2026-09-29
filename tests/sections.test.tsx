import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, mock, test } from 'bun:test'

import React from 'react'

const state = {
  mounted: true,
  theme: 'light',
}

mock.module('next/navigation', () => ({
  usePathname: () => '/en',
}))

mock.module('next/link', () => ({
  default: ({
    href,
    children,
    target,
  }: {
    href: string
    children: React.ReactNode
    target?: string
  }) => React.createElement('a', { href, target }, children),
}))

mock.module('next/image', () => ({
  default: ({
    src,
    alt,
    fill: _fill,
    sizes: _sizes,
    priority: _priority,
    ...rest
  }: {
    src: string
    alt: string
    fill?: boolean
    sizes?: string
    priority?: boolean
    [key: string]: unknown
  }) => React.createElement('img', { src, alt, ...rest }),
}))

mock.module('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: state.theme }),
}))

mock.module('@/hooks/use-has-mounted', () => ({
  useHasMounted: () => state.mounted,
}))

const MOCK_DICT: Record<string, string> = {
  // Hero
  hello: 'Hello,',
  'software-developer': 'Software Developer',
  'about-me-description-1': 'I build products with',
  'global-impact': 'global impact',
  'about-me-description-2': 'for everyone.',
  'available-to-collaborate': 'available to collaborate',
  'view-projects': 'View projects',
  'contact-cta': 'Contact',
  contact: 'Contact',
  // Experience
  experience: 'Experience',
  'see-more': 'See more',
  'see-less': 'See less',
  'frontend-developer': 'Frontend Developer',
  'frontend-developer-freelance': 'Frontend Developer Freelance',
  'fullstack-developer': 'Fullstack Developer',
  'aleluya-description': 'Worked at Aleluya on payroll features',
  'aleluya-freelance-description': 'Freelance at Aleluya',
  'devpeoplz-description': 'Worked at DevPeoplz',
  'nominapp-description': 'Worked at Nominapp',
  'january-2025': 'January 2025',
  'august-2024': 'August 2024',
  'december-2024': 'December 2024',
  'november-2022': 'November 2022',
  'january-2024': 'January 2024',
  'april-2022': 'April 2022',
  current: 'Current',
  // Skills
  skills: 'Skills',
  'frontend-development': 'Frontend Development',
  'backend-development': 'Backend Development',
  database: 'Database',
  'programming-languages': 'Programming Languages',
  // Projects
  projects: 'Projects',
  roadmapcol: 'Roadmapcol',
  'roadmapcol-description': 'A platform for Colombia',
  conexory: 'Conexory',
  'conexory-description': 'Real estate SaaS platform',
  lesfin: 'LESFin',
  'lesfin-description': 'Personal finance tracker',
  'humedad-arena': 'Humedad Arena',
  'humedad-arena-description': 'Sand moisture sensor',
  code: 'Code',
  'live-demo': 'Live Demo',
  // Contact
  github: 'GitHub',
  linkedin: 'LinkedIn',
  email: 'Email',
  location: 'Location',
}

mock.module('@/app/[lang]/dictionaries/client', () => ({
  getClientDictionary: () => MOCK_DICT,
}))

afterEach(() => {
  cleanup()
  state.mounted = true
  state.theme = 'light'
})

const { Hero } = await import('@/components/hero')
const { Experience } = await import('@/components/experience')
const { Skills } = await import('@/components/skills')
const { Projects } = await import('@/components/projects')
const { Contact } = await import('@/components/contact')

// ─── Hero ─────────────────────────────────────────────────────────────────────

describe('Hero', () => {
  test('renders the name', () => {
    render(<Hero lang="en" />)
    expect(screen.getByText('Luis Esteban')).toBeDefined()
  })

  test('renders the role/job title', () => {
    render(<Hero lang="en" />)
    expect(screen.getByText('Software Developer')).toBeDefined()
  })

  test('renders the bio with global impact', () => {
    render(<Hero lang="en" />)
    expect(screen.getByText('global impact')).toBeDefined()
  })

  test('renders CTA buttons', () => {
    render(<Hero lang="en" />)
    const buttons = screen.getAllByRole('link')
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })
})

// ─── Experience ───────────────────────────────────────────────────────────────

describe('Experience', () => {
  test('renders visible experience entries', () => {
    render(<Experience />)
    expect(screen.getAllByText('Aleluya').length).toBeGreaterThanOrEqual(2)
  })

  test('renders the SeeMoreButton with item count', () => {
    render(<Experience />)
    expect(screen.getByText('See 2 more')).toBeDefined()
  })

  test('clicking SeeMoreButton toggles to see-less label', () => {
    render(<Experience />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('See less')).toBeDefined()
  })
})

// ─── Skills ───────────────────────────────────────────────────────────────────

describe('Skills', () => {
  test('renders the Skills heading', () => {
    render(<Skills />)
    expect(screen.getByText('Skills')).toBeDefined()
  })

  test('renders all 4 skill group headings', () => {
    render(<Skills />)
    expect(screen.getByText('Frontend Development')).toBeDefined()
    expect(screen.getByText('Backend Development')).toBeDefined()
    expect(screen.getByText('Database')).toBeDefined()
    expect(screen.getByText('Programming Languages')).toBeDefined()
  })

  test('renders frontend skill badges', () => {
    render(<Skills />)
    expect(screen.getByText('React')).toBeDefined()
    expect(screen.getByText('Next')).toBeDefined()
    expect(screen.getByText('Tailwind')).toBeDefined()
  })

  test('renders backend skill badges', () => {
    render(<Skills />)
    expect(screen.getByText('Node.js')).toBeDefined()
    expect(screen.getByText('Supabase')).toBeDefined()
  })

  test('renders programming language badges', () => {
    render(<Skills />)
    expect(screen.getByText('Javascript')).toBeDefined()
    expect(screen.getByText('Typescript')).toBeDefined()
  })
})

// ─── Projects ────────────────────────────────────────────────────────────────

describe('Projects', () => {
  test('renders the Projects section label', () => {
    render(<Projects />)
    expect(
      screen.getByText(
        (content) =>
          content.includes('Proyectos') || content.includes('Projects')
      )
    ).toBeDefined()
  })

  test('renders all project names', () => {
    render(<Projects />)
    expect(screen.getByText('Conexory')).toBeDefined()
    expect(screen.getByText('LESFin')).toBeDefined()
    expect(screen.getByText('Roadmapcol')).toBeDefined()
    expect(screen.getByText('Humedad Arena')).toBeDefined()
  })

  test('renders stack badges for each project', () => {
    render(<Projects />)
    expect(screen.getAllByText('Next.js').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Tailwind').length).toBeGreaterThanOrEqual(1)
  })
})

// ─── Contact ─────────────────────────────────────────────────────────────────

describe('Contact', () => {
  test('renders the Contact heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeDefined()
  })

  test('renders all 4 contact cards', () => {
    render(<Contact />)
    expect(screen.getByText('GitHub')).toBeDefined()
    expect(screen.getByText('LinkedIn')).toBeDefined()
    expect(screen.getByText('Email')).toBeDefined()
    expect(screen.getByText('Location')).toBeDefined()
  })
})
