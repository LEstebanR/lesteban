import React, { FC, useState, useEffect } from 'react'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'

const ContactMobile = () => {
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
    <div
      className={`md:hidden w-screen z-10 sticky pt-2 ${
        isScrolled ? 'bg-white border-b border-black' : 'bg-background'
      }`}
    >
      <div className="h-2/3 flex justify-center items-center z-10 sticky">
        <ul className="flex gap-8">
          <li>
            <Link href="mailto:leramirezca@gmail.com">
              <AiOutlineMail className="h-8 w-8 text-primary" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/lestebanr/" target="_blank">
              <AiFillLinkedin className="h-8 w-8 text-primary" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/LEstebanR/lesteban" target="_blank">
              <AiFillGithub className="h-8 w-8 text-primary" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const ContactDesktop = () => {
  return (
    <div className="md:block hidden border-2 border-black rounded-lg h-32 w-64 shadow-md shadow-black bg-white">
      <div className="h-1/3 bg-secondary rounded-t-lg">
        <p className="p-1 px-4 font-serif text-bold">Let&apos;s talk</p>
      </div>
      <div className="h-2/3 flex justify-center items-center">
        <ul className="flex gap-4">
          <li>
            <Link href="mailto:leramirezca@gmail.com">
              <AiOutlineMail className="h-8 w-8 text-primary" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/lestebanr/" target="_blank">
              <AiFillLinkedin className="h-8 w-8 text-primary" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/LEstebanR/lesteban" target="_blank">
              <AiFillGithub className="h-8 w-8 text-primary" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Contact: FC = () => {
  return (
    <div className="flex z-10 md:w-72  text-xl w-screen">
      <ContactMobile />
      <ContactDesktop />
    </div>
  )
}

export default Contact
