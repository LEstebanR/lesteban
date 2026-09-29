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
        className="ink-link text-primary focus-visible:ring-ring flex w-fit cursor-pointer items-center gap-1 rounded-sm text-sm outline-none focus-visible:ring-2"
      >
        {label}
        <ChevronDown
          className={`size-3.5 transition-transform duration-300 ${seeMore ? 'rotate-180' : ''}`}
        />
      </button>
    </>
  )
}
