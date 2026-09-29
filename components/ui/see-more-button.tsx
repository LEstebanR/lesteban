'use client'

import { useState } from 'react'

import { ChevronDown } from 'lucide-react'

interface SeeMoreButtonProps {
  children: React.ReactNode
  seeMoreCopy: string
  seeLessCopy: string
  count?: number
}

function withCount(copy: string, count: number): string {
  const idx = copy.lastIndexOf(' ')
  if (idx === -1) return `${copy} ${count}`
  return `${copy.slice(0, idx)} ${count}${copy.slice(idx)}`
}

export function SeeMoreButton({
  children,
  seeMoreCopy,
  seeLessCopy,
  count,
}: SeeMoreButtonProps) {
  const [seeMore, setSeeMore] = useState(false)

  const label = seeMore
    ? seeLessCopy
    : count !== undefined
      ? withCount(seeMoreCopy, count)
      : seeMoreCopy

  return (
    <>
      <div
        className={`-m-2 grid transition-all duration-500 ease-in-out ${
          seeMore ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
      <button
        type="button"
        onClick={() => setSeeMore(!seeMore)}
        aria-expanded={seeMore}
        className="toy toy-press bg-secondary text-secondary-foreground focus-visible:ring-ring flex w-fit cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-sm font-bold outline-none focus-visible:ring-4"
      >
        {label}
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${seeMore ? 'rotate-180' : ''}`}
        />
      </button>
    </>
  )
}
