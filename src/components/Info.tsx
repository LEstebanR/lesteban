import Link from 'next/link'
import React from 'react'
import Button from './UI/Button'

const Info: React.FC = () => {
  return (
    <Link
      href="https://drive.google.com/file/d/1F_cztsmV1wv22EPvgSwgS6_b-ve2j-Pv/view?usp=share_link"
      target="blank"
      className="hidden md:block"
    >
      <Button>Download CV</Button>
    </Link>
  )
}

export default Info
