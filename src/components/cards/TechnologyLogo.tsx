import React, { FC } from 'react'
import Image from 'next/image'

interface Props {
  tech: any
}

const TechnologyLogo: FC<Props> = ({ tech }) => {
  return (
    <div className="flex flex-col items-center w-40 h-50 rounded-lg shadow-md">
      <div className="w-full flex items-center justify-center h-40 p-2">
        <Image src={tech.logo} width={100} height={100} alt="logo" />
      </div>
      <p>{tech.layer}</p>
    </div>
  )
}

export default TechnologyLogo
