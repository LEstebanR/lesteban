'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from '@/components/ui/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import {
  Github,
  Languages,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from './button'
import { LanguageToggle } from './language-toggle'

export const HEADER_LINKS = [
  {
    icon: <Github />,
    href: 'https://github.com/LEstebanR',
    label: 'Github',
  },
  {
    icon: <Linkedin />,
    href: 'https://www.linkedin.com/in/lestebanr/',
    label: 'Linkedin',
  },
  {
    icon: <Mail />,
    href: 'mailto:leramirezca@gmail.com',
    label: 'Email',
  },
]

type HeaderLink = {
  icon: React.ReactNode
  href: string
  label: string
}
export function Header() {
  const { setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const lang = pathname.split('/')[1] as 'en' | 'es'
  const dictionary = getClientDictionary(lang)
  const setLang = (lang: 'en' | 'es') => {
    const newPathname = pathname.split('/')[1] === lang ? '/' : `/${lang}`
    router.push(newPathname)
  }
  if (isHome) return null

  return (
    <header className="bg-background fixed top-0 right-0 left-0 z-10 flex h-16 w-full items-center border-b-1 border-gray-100 py-1 dark:border-gray-700">
      <div className="flex w-full items-center justify-between">
        <div className="md:flex-1" />
        <div className="flex w-full items-center justify-between px-2 md:px-4 lg:w-3/6 lg:px-0 2xl:w-2/6">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold">Luis Esteban</h1>
            <h2 className="text-muted">{dictionary['software-developer']}</h2>
          </div>
          <div className="hidden w-1/2 flex-wrap items-center justify-end gap-2 px-1 md:flex md:px-0">
            {HEADER_LINKS.map((link: HeaderLink, index: number) => (
              <Link href={link.href} key={index}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer" asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background mt-2 w-screen rounded-t-none">
                <DropdownMenuGroup>
                  {HEADER_LINKS.map((link: HeaderLink, index: number) => (
                    <Link href={link.href} key={index}>
                      <DropdownMenuItem>
                        {link.icon}
                        {link.label}
                      </DropdownMenuItem>
                    </Link>
                  ))}
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
