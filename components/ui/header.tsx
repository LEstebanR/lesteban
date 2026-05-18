'use client'

import { Button } from './button'
import { LanguageToggle } from './language-toggle'
import { Link } from './link'

import React from 'react'

import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useTheme } from 'next-themes'

import {
  BookOpen,
  ChevronRight,
  Home,
  Languages,
  Mail,
  Menu,
  Moon,
  Sun,
} from 'lucide-react'

import { useBreadcrumb } from '@/components/breadcrumb-provider'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
// Removed custom Link; using NextLink for internal navigation
import { ThemeToggle } from '@/components/ui/theme-toggle'

// Mobile-only links (preserved previous links)
const MOBILE_LINKS: { icon: React.ReactNode; href: string; label: string }[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    href: 'https://github.com/LEstebanR',
    label: 'Github',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: 'https://www.linkedin.com/in/lestebanr/',
    label: 'Linkedin',
  },
  { icon: <Mail />, href: 'mailto:leramirezca@gmail.com', label: 'Email' },
]

// HeaderLink type removed; no longer mapping links
export function Header() {
  const { setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const { customBreadcrumbs } = useBreadcrumb()
  const segments = pathname.split('/').filter(Boolean)
  const currentLang =
    segments[0] === 'en' || segments[0] === 'es'
      ? (segments[0] as 'en' | 'es')
      : 'en'
  const pathWithoutLang =
    segments[0] === 'en' || segments[0] === 'es' ? segments.slice(1) : segments
  const isHome = pathWithoutLang.length === 0
  const setLang = (lang: 'en' | 'es') => {
    const pathAfterLang =
      pathWithoutLang.length > 0 ? `/${pathWithoutLang.join('/')}` : ''
    const newPathname = `/${lang}${pathAfterLang}`
    router.push(newPathname)
  }

  return (
    <header
      aria-label={currentLang === 'es' ? 'Encabezado del sitio' : 'Site header'}
      className="bg-background fixed top-0 right-0 left-0 z-10 flex h-16 w-full items-center border-b border-border py-1"
    >
      <div className="flex w-full items-center justify-between">
        <div className="md:flex-1" />
        <div className="flex w-full items-center justify-between px-2 md:px-4 lg:w-3/6 lg:px-0 2xl:w-2/6">
          <Link href={`/${currentLang}`} target="_self">
            <h1 className="font-heading text-primary text-xl font-bold">
              Luis Esteban
            </h1>
          </Link>
          {isHome ? (
            <nav
              aria-label={currentLang === 'es' ? 'Navegación principal' : 'Main navigation'}
              className="hidden w-1/2 flex-wrap items-center justify-end gap-2 px-1 md:flex md:px-0"
            >
              <NextLink
                href={`/${currentLang}/blog`}
                className="hover:text-primary hover:animate-underline-link flex items-center gap-1.5 decoration-2 underline-offset-4 transition-all duration-300 hover:underline"
              >
                <BookOpen className="h-4 w-4" />
                Blog
              </NextLink>
            </nav>
          ) : (
            <div className="hidden w-1/2 items-center justify-end px-1 md:flex md:px-0">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <NextLink href={`/${currentLang}`}>
                        {currentLang === 'es' ? 'Inicio' : 'Home'}
                      </NextLink>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {pathWithoutLang.length > 0 && <BreadcrumbSeparator />}
                  {pathWithoutLang.map((seg, idx) => {
                    const href =
                      `/${currentLang}/` +
                      pathWithoutLang.slice(0, idx + 1).join('/')
                    // Check if there's a custom breadcrumb title for this segment
                    const customTitle = customBreadcrumbs[seg]
                    const label =
                      customTitle ||
                      seg
                        .replace(/[-_]/g, ' ')
                        .replace(/\b\w/g, (m) => m.toUpperCase())
                    const isLast = idx === pathWithoutLang.length - 1
                    return (
                      <React.Fragment key={href}>
                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage>{label}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink asChild>
                              <NextLink href={href}>{label}</NextLink>
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                      </React.Fragment>
                    )
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          )}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer" asChild>
                <Button variant="outline" size="icon" aria-label="Menu">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background mt-2 w-screen rounded-t-none">
                <DropdownMenuGroup>
                  <>
                    {/* Breadcrumbs first (only when not on home) */}
                    {!isHome && (
                      <>
                        <DropdownMenuItem asChild>
                          <NextLink
                            href={`/${currentLang}`}
                            className="flex items-center gap-2"
                          >
                            <Home className="h-4 w-4" />
                            {currentLang === 'es' ? 'Inicio' : 'Home'}
                          </NextLink>
                        </DropdownMenuItem>
                        {pathWithoutLang.map((seg, idx) => {
                          const href =
                            `/${currentLang}/` +
                            pathWithoutLang.slice(0, idx + 1).join('/')
                          // Check if there's a custom breadcrumb title for this segment
                          const customTitle = customBreadcrumbs[seg]
                          const label =
                            customTitle ||
                            seg
                              .replace(/[-_]/g, ' ')
                              .replace(/\b\w/g, (m) => m.toUpperCase())
                          const isLast = idx === pathWithoutLang.length - 1
                          return (
                            <DropdownMenuItem
                              key={href}
                              asChild
                              disabled={isLast}
                            >
                              {isLast ? (
                                <span className="flex items-center gap-2">
                                  <ChevronRight className="h-4 w-4" />
                                  {label}
                                </span>
                              ) : (
                                <NextLink
                                  href={href}
                                  className="flex items-center gap-2"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                  {label}
                                </NextLink>
                              )}
                            </DropdownMenuItem>
                          )
                        })}
                        <DropdownMenuSeparator />
                      </>
                    )}
                    {/* Blog only on home */}
                    {isHome && (
                      <DropdownMenuItem asChild>
                        <NextLink
                          href={`/${currentLang}/blog`}
                          className="flex items-center gap-2"
                        >
                          <BookOpen className="h-4 w-4" />
                          Blog
                        </NextLink>
                      </DropdownMenuItem>
                    )}
                    {/* External links always */}
                    {MOBILE_LINKS.map((link) => (
                      <DropdownMenuItem key={link.label} asChild>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2"
                        >
                          {link.icon}
                          {link.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun />
                  Light
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setLang('en')}>
                  <Languages />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang('es')}>
                  <Languages />
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="hidden flex-1 justify-end md:flex">
          <div className="flex items-center gap-2 pr-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
