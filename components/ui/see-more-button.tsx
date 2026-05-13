'use client'

import { useState } from 'react'

import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'

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
        <div className="overflow-hidden">
          <div className="flex flex-col gap-5">{children}</div>
        </div>
      </div>
      <Button
        variant="outline"
        onClick={() => setSeeMore(!seeMore)}
        className="border-primary text-primary hover:bg-primary mx-auto w-fit cursor-pointer rounded-full hover:text-white"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${seeMore ? 'rotate-180' : ''}`}
        />
      </Button>
    </>
  )
}
