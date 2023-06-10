import React, { FC } from 'react'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import Logo from '../Logo'
import Link from 'next/link'
import Button from '../UI/Button'

const Header: FC = () => {
  return (
    <header className="w-full h-12 sticky top-0 z-50 flex justify-between items-center md:px-20 px-4">
      <div>
        <Logo />
      </div>
      <Link
        href="https://drive.google.com/file/d/1F_cztsmV1wv22EPvgSwgS6_b-ve2j-Pv/view?usp=share_link"
        target="blank"
      >
        <Button>Download CV</Button>
      </Link>
    </header>
  )
}

export default Header
