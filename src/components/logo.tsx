import React, { FC } from 'react'
import { Londrina_Outline } from "next/font/google"
import Link from 'next/link'

const font = Londrina_Outline({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const Logo: FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center border border-black dark:border-white h-12 w-12 rounded-lg shadow-primary shadow-md cursor-pointer bg-light dark:bg-dark">
        <span className="h-full w-full flex items-center justify-center text-3xl">
          <p className={font.className}>LE</p>
        </span>
      </div>
    </Link>
  )
}

export default Logo
