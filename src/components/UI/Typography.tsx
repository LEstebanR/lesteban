import React from 'react'
import { Inter } from '@next/font/google'
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
}

interface LinkProps {
  children: React.ReactNode
  url: string
}

export const H1: React.FC<Props> = ({ children, gradient }) => (
  <h1
    className={` ${
      fontheader.className
    } md:text-6xl text-5xl  text-center font-bold text-typography subpixel-antialiased ${
      gradient && 'gradient-text'
    }`}
  >
    {children}
  </h1>
)

export const Body: React.FC<Props> = ({ children, gradient }) => (
  <p
    className={` ${
      fontbody.className
    } md:text-2xl text-xl  text-justify text-typography subpixel-antialiased ${
      gradient && 'gradient-text'
    }`}
  >
    {children}
  </p>
)

export const H2: React.FC<Props> = ({ children, gradient }) => (
  <h2
    className={` ${
      fontheader.className
    } md:text-4xl text-4xl font-bold text-typography subpixel-antialiased ${
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
    } text-3xl  text-center font-bold text-typography subpixel-antialiased ${
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
    } text-xl  font-bold text-typography subpixel-antialiased ${
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
    className={` ${fontbody.className} text-base  text-justify text-typography italic`}
  >
    {children}
  </p>
)

export const CardBody: React.FC<Props> = ({ children }) => (
  <p
    className={` ${fontbody.className} text-lg  text-justify text-typography subpixel-antialiased `}
  >
    {children}
  </p>
)
