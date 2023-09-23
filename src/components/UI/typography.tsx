import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const fontheader = Inter({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-inter',
})

const fontbody = Inter({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
  variable: '--font-inter',
})

interface Props {
  children: React.ReactNode
  gradient?: boolean
  className?: string
}

interface LinkProps {
  children: React.ReactNode
  url: string
}

export const H1: React.FC<Props> = ({ children, gradient, className }) => (
  <h1
    className={`${className} ${
      fontheader.className
    } text-center text-5xl  md:text-6xl  ${
      gradient && 'gradient-text  text-light-text dark:text-dark-text '
    }`}
  >
    {children}
  </h1>
)

export const Body: React.FC<Props> = ({ children, gradient }) => (
  <p
    className={` ${
      fontbody.className
    } text-xl text-light-text   subpixel-antialiased dark:text-dark-text  md:text-2xl ${
      gradient && 'gradient-text'
    }`}
  >
    {children}
  </p>
)

export const H2: React.FC<Props> = ({ children, gradient, className }) => (
  <h2
    className={`${className} ${
      fontheader.className
    } text-4xl font-bold text-light-text  dark:text-dark-text md:text-4xl  ${
      gradient && 'gradient-text'
    }`}
  >
    {children}
  </h2>
)

export const H3: React.FC<Props> = ({ children, gradient }) => (
  <h3
    className={` ${
      fontheader.className
    } text-center text-3xl  font-bold text-light-text  dark:text-dark-text ${
      gradient && 'gradient-text'
    }`}
  >
    {children}
  </h3>
)

export const H4: React.FC<Props> = ({ children, gradient }) => (
  <h4
    className={` ${
      fontheader.className
    } text-xl  font-bold  text-light-text subpixel-antialiased  dark:text-dark-text ${
      gradient && 'gradient-text'
    }`}
  >
    {children}
  </h4>
)

export const CustomLink: React.FC<LinkProps> = ({ children, url }) => (
  <Link href={url} target="_blank">
    <p
      className={` ${fontbody.className} text-xl  font-bold text-primary underline decoration-2 `}
    >
      {children}
    </p>
  </Link>
)

export const CardDetail: React.FC<Props> = ({ children }) => (
  <p
    className={` ${fontbody.className} text-justify  text-base  italic text-light-text   dark:text-dark-text`}
  >
    {children}
  </p>
)

export const CardBody: React.FC<Props> = ({ children }) => (
  <p
    className={` ${fontbody.className} text-lg text-light-text dark:text-dark-text `}
  >
    {children}
  </p>
)

export const NavLinks: React.FC<Props> = ({ children }) => (
  <p
    className={` ${fontbody.className} text-justify  text-lg  text-light-text subpixel-antialiased   dark:text-dark-text `}
  >
    {children}
  </p>
)
