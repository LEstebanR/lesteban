import React, { FC } from 'react'
import Image from 'next/image'
import { CardDetail } from '../UI/Typography'

interface Props {
  tech: any
}

const TechnologyLogo: FC<Props> = ({ tech }) => {
  return (
    <div className="flex flex-col justify-center relative z-0">
      <div className=" group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
          <div className="flex items-center flex-col">
            <div className="w-full flex items-center justify-center h-40 p-2">
              <Image src={tech.logo} width={100} height={100} alt="logo" />
            </div>
            <CardDetail>{tech.layer}</CardDetail>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyLogo
