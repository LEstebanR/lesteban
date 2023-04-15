import Image from 'next/image'
import React, { FC } from 'react'

const Logo: FC = () => {
  return <Image src="/assets/images/logo.png" width={120} height={100} />
}

export default Logo
