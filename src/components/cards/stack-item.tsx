import React, { FC } from 'react'
import { StackProps } from '@/utils/types'
import { CardDetail } from '../UI/typography'
import Image from 'next/image'

const StackItemLogo: FC<StackProps> = ({ tech }) => {
  return (
    <div className="flex  flex-col items-center ">
      <Image
        src={tech.icon}
        alt="tech - logo"
        height={100}
        width={100}
        className="h-12 w-12"
      />
      <CardDetail>{tech.name}</CardDetail>
    </div>
  )
}

export default StackItemLogo
