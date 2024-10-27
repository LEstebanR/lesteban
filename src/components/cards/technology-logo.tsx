import React from 'react'
import Image from 'next/image'

import { CardDetail } from '../UI/typography'

interface Tech {
  logo: string
  layer: string
}

interface Props {
  tech: Tech
}

const TechnologyLogo: React.FC<Props> = ({ tech }) => {
  return (
    <div className="flex h-48 flex-col items-center  rounded-lg border border-black bg-light-card shadow-lg dark:border-gray-200 dark:bg-dark-card md:w-48 ">
      <div className="flex h-40  items-center justify-center p-2">
        <Image
          src={tech.logo}
          alt="company logo"
          height={100}
          width={100}
          className=" border-4 border-transparent"
        />
      </div>
      <CardDetail>{tech.layer}</CardDetail>
    </div>
  )
}

export default TechnologyLogo
