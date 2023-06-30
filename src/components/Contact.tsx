import React, { FC, useState, useEffect } from 'react'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'

const ContactDesktop = () => {
  return (
    <div className="md:block hidden border-2 border-black rounded h-32 w-64 bg-white shadow hover:shadow-3xl hover:shadow-black">
      <div className="h-1/3 bg-secondary rounded-t border-b border-dashed border-black flex justify-center">
        <p className="p-1 px-4 text-bold w-3/6">Let&apos;s talk</p>
      </div>
      <svg width="1em" height="0">
        <linearGradient
          id="blue-gradient-desktop"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#0284c7" offset="0%" />
          <stop stopColor="#a7f3d0" offset="100%" />
        </linearGradient>
      </svg>
      <div className="h-2/3 flex justify-center items-center w-full">
        <ul className="flex gap-4 w-full justify-center">
          <li>
            <Link href="mailto:leramirezca@gmail.com">
              <AiOutlineMail
                className="h-8 w-8"
                style={{ fill: 'url(#blue-gradient-desktop)' }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/lestebanr/" target="_blank">
              <AiFillLinkedin
                className="h-8 w-8"
                style={{ fill: 'url(#blue-gradient-desktop)' }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/LEstebanR/lesteban" target="_blank">
              <AiFillGithub
                className="h-8 w-8"
                style={{ fill: 'url(#blue-gradient-desktop)' }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const ContactMobile = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
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
        <svg width="1em" height="1em">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#0284c7" offset="0%" />
            <stop stopColor="#a7f3d0" offset="100%" />
          </linearGradient>
        </svg>
        <ul className="flex gap-8 justify-center">
          <li>
            <Link href="mailto:leramirezca@gmail.com">
              <AiOutlineMail
                className="h-8 w-8"
                style={{ fill: 'url(#blue-gradient)' }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/lestebanr/" target="_blank">
              <AiFillLinkedin
                className="h-8 w-8"
                style={{ fill: 'url(#blue-gradient)' }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/LEstebanR/lesteban" target="_blank">
              <AiFillGithub
                className="h-8 w-8"
                style={{ fill: 'url(#blue-gradient)' }}
              />
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
