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
    } md:text-6xl text-5xl  text-center  ${
      gradient && 'gradient-text  dark:text-dark-text text-light-text '
    }`}
  >
    {children}
  </h1>
)

export const Body: React.FC<Props> = ({ children, gradient }) => (
  <p
    className={` ${
      fontbody.className
    } md:text-2xl text-xl   dark:text-dark-text text-light-text  subpixel-antialiased ${
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
    } md:text-4xl text-4xl font-bold  dark:text-dark-text text-light-text  ${
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
    } text-3xl  text-center font-bold  dark:text-dark-text text-light-text  text-blacksubpixel-antialiased ${
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
    } text-xl  font-bold  dark:text-dark-text text-light-text  subpixel-antialiased ${
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
    className={` ${fontbody.className} text-base  text-justify  dark:text-dark-text text-light-text   italic`}
  >
    {children}
  </p>
)

export const CardBody: React.FC<Props> = ({ children }) => (
  <p
    className={` ${fontbody.className} text-lg    dark:text-dark-text text-light-text text-blacksubpixel-antialiased `}
  >
    {children}
  </p>
)

export const NavLinks: React.FC<Props> = ({ children }) => (
  <p
    className={` ${fontbody.className} text-lg  text-justify  dark:text-dark-text text-light-text   subpixel-antialiased `}
  >
    {children}
  </p>
)
