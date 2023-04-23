import Image from 'next/image'
import React, { FC } from 'react'

const Logo: FC = () => {
  return (
    <p className='cursor-pointer text-xl text-sky-400'>{'<LEsteban/>'}</p>
    // <Image
    //   src="/assets/images/logo.png"
    //   width={120}
    //   height={100}
    //   alt="logo"
    //   className="cursor-pointer"
    // />
  )
}

export default Logo
