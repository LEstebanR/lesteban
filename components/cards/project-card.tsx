'use client'

import { getClientDictionary } from '@/app/[lang]/dictionaries/client'
import { useLang } from '@/hooks/use-lang'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'

import { cn } from '@/lib/utils'

type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  repo?: string
}

const TONES = [
  'bg-primary text-primary-foreground',
  'bg-secondary text-secondary-foreground',
  'bg-pink text-pink-foreground',
  'bg-card text-card-foreground',
]

const SPRING = { stiffness: 220, damping: 16 }

export function ProjectCard({
  project,
  tone = 3,
}: {
  project: Project
  tone?: number
}) {
  const lang = useLang()
  const dictionary = getClientDictionary(lang)
  const reduce = useReducedMotion()
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const rotateX = useSpring(tiltX, SPRING)
  const rotateY = useSpring(tiltY, SPRING)

  const tilt = (event: React.PointerEvent<HTMLElement>) => {
    if (reduce) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / (rect.width || 1) - 0.5
    const y = (event.clientY - rect.top) / (rect.height || 1) - 0.5
    tiltY.set(x * 16)
    tiltX.set(-y * 16)
  }

  const resetTilt = () => {
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <motion.article
      onPointerMove={tilt}
      onPointerLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={cn(
        'toy flex h-full flex-col gap-5 rounded-xl p-7',
        TONES[tone % TONES.length]
      )}
    >
      <h3 className="font-heading text-4xl font-extrabold tracking-tight">
        {dictionary[project.name as keyof typeof dictionary]}
      </h3>
      <p className="flex-1 text-lg leading-relaxed opacity-90">
        {dictionary[project.description as keyof typeof dictionary]}
      </p>
      <ul className="flex flex-wrap gap-2">
        {project.stack.map((stack) => (
          <li
            key={stack}
            className="rounded-full border-2 border-current/30 px-3 py-0.5 text-xs font-bold"
          >
            {stack}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3 pt-2">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="toy toy-press bg-foreground text-background rounded-full px-5 py-2 text-sm font-bold"
          >
            {dictionary['live-demo']}
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="toy toy-press bg-card text-card-foreground rounded-full px-5 py-2 text-sm font-bold"
          >
            {dictionary['code']}
          </a>
        )}
      </div>
    </motion.article>
  )
}
