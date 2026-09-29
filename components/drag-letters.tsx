'use client'

import { motion, useReducedMotion } from 'framer-motion'

/** Each letter can be flung around and springs back home. */
export function DragLetters({ text }: { text: string }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  return (
    <span aria-hidden="true" className="flex flex-wrap gap-x-[0.25em]">
      {words.map((word, w) => (
        <span key={`${word}-${w}`} className="inline-flex">
          {word.split('').map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              className="inline-block cursor-grab touch-none select-none active:cursor-grabbing"
              drag={!reduce}
              dragSnapToOrigin
              dragElastic={0.7}
              dragTransition={{ bounceStiffness: 320, bounceDamping: 12 }}
              whileHover={
                reduce ? undefined : { y: -10, rotate: i % 2 ? 6 : -6 }
              }
              whileTap={reduce ? undefined : { scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 14 }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}
