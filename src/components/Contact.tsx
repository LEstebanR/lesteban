import React, { FC } from 'react'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'

const ContactMobile = () => {
  return (
    <div className="md:hidden w-full">
      <div className="h-2/3 flex justify-center items-center">
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
            <Link href="#" target="_blank">
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
    <div className="md:block hidden border-2 border-black rounded-lg h-32 w-64 shadow-md shadow-black">
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
            <Link href="#" target="_blank">
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
    <div className="flex  md:w-3/12 p-4 text-xl justify-center items-center">
      <ContactMobile />
      <ContactDesktop />
    </div>
  )
}

export default Contact
