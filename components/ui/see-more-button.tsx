'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface SeeMoreButtonProps {
  children: React.ReactNode
  seeMoreCopy: React.ReactNode
  seeLessCopy: React.ReactNode
}

export function SeeMoreButton({
  children,
  seeMoreCopy,
  seeLessCopy,
}: SeeMoreButtonProps) {
  const [seeMore, setSeeMore] = useState(false)

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
        {seeMore ? (
          <>
            {seeLessCopy}
            <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            {seeMoreCopy}
            <ChevronDown className="h-4 w-4" />
          </>
        )}
      </Button>
    </>
  )
}
