import React, { FC } from 'react'
import { Londrina_Outline } from 'next/font/google'
import Link from 'next/link'

const font = Londrina_Outline({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const Logo: FC = () => {
  return (
    <Link href="/">
      <div className="flex h-12  w-12 cursor-pointer items-center justify-center rounded-lg border border-black bg-light shadow-md shadow-primary dark:border-white dark:bg-dark">
        <span className="flex h-full w-full items-center justify-center text-3xl">
          <p className={font.className}>LE</p>
        </span>
      </div>
    </Link>
  )
}

export default Logo
