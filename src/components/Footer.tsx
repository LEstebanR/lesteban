import React from 'react'
import Link from 'next/link'
import { GoHeart, GoMarkGithub } from 'react-icons/go'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="p-4 z-10 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 ">
        <Link href="https://github.com/LEstebanR/lesteban" target="_blank">
          <GoMarkGithub className="h-6 w-6 text-primary" />
        </Link>
        <div className="mx-2 h-[30px] w-[0.5px] rotate-[20deg] transform bg-primary"></div>
        <div className="flex items-center gap-x-1 text-xs sm:text-base">
          <span className="text-slate-400">Made with</span>
          <GoHeart className="h-4 w-4 text-red-500" />
          <span className="text-slate-400">by</span>
          <Link
            className="font-medium text-primary underline decoration-dashed decoration-0 underline-offset-4"
            href="https://github.com/LEstebanR"
            target="_blank"
          >
            LEStebanR
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
