import React from 'react'
import { Inter } from '@next/font/google'

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
