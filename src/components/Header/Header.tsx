import React, { FC, useState, useEffect } from 'react'
import Logo from '../Logo'
import Link from 'next/link'
// import Button from '../UI/Button'
import { Button } from '@nextui-org/react'
import { link } from 'fs'

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={`w-full h-16 sticky top-0 z-50 flex justify-between items-center md:px-20  px-4 py-2 ${
        isScrolled ? 'bg-white md:border-b md:border-black' : 'bg-backgorund'
      }`}
    >
      <div>
        <Logo />
      </div>
      <Button
        as={Link}
        href="https://drive.google.com/file/d/1Ipyn640EG571TQQJCgY-OkqW-4fIvFpq/view?usp=drive_link"
        variant="solid"
        color="primary"
        target="_blank"
      >
        Download CV
      </Button>
    </header>
  )
}

export default Header
