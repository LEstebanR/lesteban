import React from 'react'
import { Raleway, Open_Sans } from 'next/font/google'
import Link from 'next/link'
import clsx from 'clsx'

const fontheader = Raleway({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-inter',
})

const fontbody = Open_Sans({
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
  className?: string
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

export const H3: React.FC<Props> = ({ children, gradient, className }) => (
  <h3
    className={` ${className} ${
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
    } text-xl  font-extrabold  text-primary subpixel-antialiased  ${
      gradient && 'gradient-text'
    }`}
  >
    {children}
  </h4>
)

export const CustomLink: React.FC<LinkProps> = ({
  children,
  url,
  className,
}) => (
  <Link href={url} target="_blank">
    <p
      className={clsx(
        fontbody.className,
        'text-xl  font-bold text-blue-600 underline decoration-2',
        className
      )}
    >
      {children}
    </p>
  </Link>
)

export const CardDetail: React.FC<Props> = ({ children }) => (
  <p className={` text-sm italic text-light-text   dark:text-dark-text`}>
    {children}
  </p>
)

export const CardBody: React.FC<Props> = ({ children, className }) => (
  <p
    className={clsx(
      fontbody.className,
      'text-lg text-light-text dark:text-dark-text',
      className
    )}
  >
    {children}
  </p>
)

export const NavLinks: React.FC<Props> = ({ children }) => (
  <p
    className={` ${fontbody.className} text-justify  text-lg  font-extrabold text-light-text   subpixel-antialiased dark:text-dark-text `}
  >
    {children}
  </p>
)

export const ExperienceTime: React.FC<Props> = ({ children, className }) => (
  <p
    className={` text-lg italic text-light-text   dark:text-dark-text ${className}`}
  >
    {children}
  </p>
)
