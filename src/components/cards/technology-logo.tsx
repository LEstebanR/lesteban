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
    <div className="flex h-48 flex-col items-center  rounded-lg border border-black bg-light-card shadow-lg dark:border-gray-200 dark:bg-dark-card ">
      <div className="flex h-40 w-full items-center justify-center p-2">
        <Image src={tech.logo} width={100} height={100} alt="logo-tech" />
      </div>
      <CardDetail>{tech.layer}</CardDetail>
    </div>
  )
}

export default TechnologyLogo
