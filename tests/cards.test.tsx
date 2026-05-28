import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, mock, test } from 'bun:test'

import React from 'react'

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
    ...rest
  }: {
    src: string
    alt: string
    fill?: boolean
    sizes?: string
    [key: string]: unknown
  }) => React.createElement('img', { src, alt, ...rest }),
}))

mock.module('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}))

mock.module('@/hooks/use-has-mounted', () => ({
  useHasMounted: () => true,
}))

const MOCK_DICT: Record<string, string> = {
  roadmapcol: 'Roadmapcol',
  'roadmapcol-description': 'A roadmap for Colombia',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  email: 'Email',
  location: 'Location',
  'frontend-developer': 'Frontend Developer',
  'frontend-developer-freelance': 'Frontend Developer Freelance',
  'aleluya-description': 'Worked at Aleluya on payroll features',
  'aleluya-freelance-description': 'Freelance at Aleluya',
  'january-2025': 'January 2025',
  'august-2024': 'August 2024',
  'december-2024': 'December 2024',
  current: 'Current',
  code: 'Code',
  'live-demo': 'Live Demo',
}

mock.module('@/app/[lang]/dictionaries/client', () => ({
  getClientDictionary: () => MOCK_DICT,
}))

afterEach(() => cleanup())

const { BlogCard } = await import('@/components/cards/blog-card')
const { ProjectCard } = await import('@/components/cards/project-card')
const { ContactCard } = await import('@/components/cards/contact-card')
const { ExperienceCard } = await import('@/components/cards/experience-card')
const { CardAction } = await import('@/components/ui/card')

// ─── BlogCard ────────────────────────────────────────────────────────────────

describe('BlogCard', () => {
  const post = {
    url: 'my-post',
    title: 'My First Post',
    short_title: 'First Post',
    date: '2025-01-01',
    description: 'A great post',
    image: '/images/post.jpg',
  }

  test('renders the post title', () => {
    render(<BlogCard post={post} />)
    expect(screen.getByText('My First Post')).toBeDefined()
  })

  test('link points to /{lang}/blog/{url}', () => {
    render(<BlogCard post={post} />)
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toBe('/en/blog/my-post')
  })

  test('image has correct alt text', () => {
    render(<BlogCard post={post} />)
    const img = screen.getByAltText('My First Post')
    expect(img).toBeDefined()
  })

  test('renders tag badges when tags are present', () => {
    render(<BlogCard post={{ ...post, tags: ['react', 'nextjs'] }} />)
    expect(screen.getByText('react')).toBeDefined()
    expect(screen.getByText('nextjs')).toBeDefined()
  })
})

// ─── ProjectCard ─────────────────────────────────────────────────────────────

describe('ProjectCard', () => {
  const project = {
    name: 'roadmapcol',
    description: 'roadmapcol-description',
    stack: ['Next.js', 'Tailwind'],
    link: 'https://roadmapcol.com',
    repo: 'https://github.com/LEstebanR/roadmapcol',
  }

  test('renders the translated project name', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText('Roadmapcol')).toBeDefined()
  })

  test('renders all stack badges', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText('Next.js')).toBeDefined()
    expect(screen.getByText('Tailwind')).toBeDefined()
  })

  test('shows repo link when repo is defined', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText('Code')).toBeDefined()
  })

  test('shows live demo link when link is defined', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText('Live Demo')).toBeDefined()
  })

  test('does not show repo link when repo is undefined', () => {
    render(<ProjectCard project={{ ...project, repo: undefined }} />)
    expect(screen.queryByText('Code')).toBeNull()
  })

  test('does not show live demo link when link is undefined', () => {
    render(<ProjectCard project={{ ...project, link: undefined }} />)
    expect(screen.queryByText('Live Demo')).toBeNull()
  })
})

// ─── ContactCard ─────────────────────────────────────────────────────────────

describe('ContactCard', () => {
  const githubLink = {
    label: 'github',
    href: 'https://github.com/LEstebanR',
    user: 'LEstebanR',
    icon: '/logos/github_light.svg',
    iconColor: '',
  }

  const locationLink = {
    label: 'location',
    href: '#',
    user: 'Colombia',
    icon: '/logos/location_light.svg',
    iconColor: '',
  }

  test('renders the translated label', () => {
    render(<ContactCard link={githubLink} />)
    expect(screen.getByText('GitHub')).toBeDefined()
  })

  test('renders the user handle', () => {
    render(<ContactCard link={githubLink} />)
    expect(screen.getByText('LEstebanR')).toBeDefined()
  })

  test('external link has correct href', () => {
    render(<ContactCard link={githubLink} />)
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toBe('https://github.com/LEstebanR')
  })

  test('external link opens in _blank', () => {
    render(<ContactCard link={githubLink} />)
    const link = screen.getByRole('link')
    expect(link.getAttribute('target')).toBe('_blank')
  })

  test('location link with href="#" opens in _self', () => {
    render(<ContactCard link={locationLink} />)
    const link = screen.getByRole('link')
    expect(link.getAttribute('target')).toBe('_self')
  })
})

// ─── ExperienceCard ──────────────────────────────────────────────────────────

describe('ExperienceCard', () => {
  const job = {
    position: 'frontend-developer',
    company: 'Aleluya',
    description: 'aleluya-description',
    startDate: 'january-2025',
    endDate: 'current',
    stack: ['React', 'MUI', 'Cypress'],
  }

  test('renders the translated position', () => {
    render(<ExperienceCard job={job} />)
    expect(screen.getByText('Frontend Developer')).toBeDefined()
  })

  test('renders the company name', () => {
    render(<ExperienceCard job={job} />)
    expect(screen.getByText('Aleluya')).toBeDefined()
  })

  test('renders all stack badges', () => {
    render(<ExperienceCard job={job} />)
    expect(screen.getByText('React')).toBeDefined()
    expect(screen.getByText('MUI')).toBeDefined()
    expect(screen.getByText('Cypress')).toBeDefined()
  })
})

// ─── CardAction ───────────────────────────────────────────────────────────────

describe('CardAction', () => {
  test('renders children', () => {
    render(<CardAction>Edit</CardAction>)
    expect(screen.getByText('Edit')).toBeDefined()
  })

  test('merges extra className', () => {
    render(<CardAction className="extra" data-testid="ca" />)
    expect(screen.getByTestId('ca').className).toContain('extra')
  })
})
