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
  Github,
  Home,
  Languages,
  Linkedin,
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
  { icon: <Github />, href: 'https://github.com/LEstebanR', label: 'Github' },
  {
    icon: <Linkedin />,
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
    <header className="bg-background fixed top-0 right-0 left-0 z-10 flex h-16 w-full items-center border-b-1 border-gray-100 py-1 dark:border-gray-700">
      <div className="flex w-full items-center justify-between">
        <div className="md:flex-1" />
        <div className="flex w-full items-center justify-between px-2 md:px-4 lg:w-3/6 lg:px-0 2xl:w-2/6">
          <Link href={`/${currentLang}`} target="_self">
            <h1 className="font-heading text-primary text-xl font-bold">
              Luis Esteban
            </h1>
          </Link>
          {isHome ? (
            <div className="hidden w-1/2 flex-wrap items-center justify-end gap-2 px-1 md:flex md:px-0">
              <NextLink
                href={`/${currentLang}/blog`}
                className="hover:text-primary hover:animate-underline-link flex items-center gap-1.5 decoration-2 underline-offset-4 transition-all duration-300 hover:underline"
              >
                <BookOpen className="h-4 w-4" />
                Blog
              </NextLink>
            </div>
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
