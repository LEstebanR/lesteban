import React, { FC } from 'react'
import Image from 'next/image'
import { CardDetail } from '../UI/Typography'

interface Props {
  tech: any
}

const TechnologyLogo: FC<Props> = ({ tech }) => {
  return (
    <div className="shadow-lg flex flex-col items-center w-40 h-50 rounded-lg bg-white border border-gray-200  ">
      <div className="w-full flex items-center justify-center h-40 p-2">
        <Image src={tech.logo} width={100} height={100} alt="logo" />
      </div>
      <CardDetail>{tech.layer}</CardDetail>
    </div>
  )
}

export default TechnologyLogo
