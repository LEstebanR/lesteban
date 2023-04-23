import React, { FC } from 'react'
import Image from 'next/image'

interface Props {
  tech: any
}

const TechnologyLogo: FC<Props> = ({ tech }) => {
  return (
    <div className="flex flex-col items-center w-40 h-50 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="w-100 flex items-center justify-center  w-full h-40 p-2 drop-shadow-xl">
        <Image src={tech.logo} width={100} height={100} alt="logo" />
      </div>
      <p>{tech.layer}</p>
    </div>
  )
}

export default TechnologyLogo
