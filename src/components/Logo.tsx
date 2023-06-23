import React, { FC } from 'react'
import { Londrina_Outline } from '@next/font/google'

const font = Londrina_Outline({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const Logo: FC = () => {
  return (
    <div className="flex items-center justify-center border border-black h-12 w-12 rounded-lg shadow-blue-500/50 shadow-lg cursor-pointer">
      <span className="h-full w-full flex items-center justify-center text-3xl">
        <p className={font.className}>LE</p>
      </span>
    </div>
  )
}

export default Logo
