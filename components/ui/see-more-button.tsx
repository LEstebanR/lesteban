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
        className={`grid transition-all duration-500 ease-in-out ${
          seeMore ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
      <button
        type="button"
        onClick={() => setSeeMore(!seeMore)}
        aria-expanded={seeMore}
        className="bg-secondary text-secondary-foreground focus-visible:ring-ring mt-4 flex w-fit rotate-1 cursor-pointer items-center gap-2 px-4 py-2 font-bold outline-none hover:-rotate-1 focus-visible:ring-4"
      >
        {label}
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${seeMore ? 'rotate-180' : ''}`}
        />
      </button>
    </>
  )
}
