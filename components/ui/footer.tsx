'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { motion } from 'framer-motion'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Heart } from 'lucide-react'

export function Footer() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'
  const dictionary = getClientDictionary(lang)

  return (
    <footer className="my-4 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2"
      >
        <div className="rotate-20deg mx-2 h-[30px] w-[0.5px]"></div>
        <div className="flex items-center gap-x-2 text-xs sm:text-base">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500"
          >
            {dictionary['made-with' as keyof typeof dictionary]}
          </motion.span>
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-500"
          >
            {dictionary['by' as keyof typeof dictionary]}
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://lesteban.dev"
              target="_self"
              className="hover:text-primary hover:underline hover:underline-offset-4 hover:transition-all hover:duration-300"
            >
              LEstebanR
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
