import React, { FC } from 'react'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import Link from 'next/link';

const Contact: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl p-4 text-6xl text-sky-400">
      <h2 className="text-4xl text-sky-500">Let&apos;s talk:</h2>
      <ul className='flex gap-4' >
        <li><Link href='https://www.linkedin.com/in/lestebanr/' target='_blank'><AiFillLinkedin/></Link></li>
        <li><Link href="https://github.com/LEstebanR" target='_blank'><AiFillGithub/></Link></li>
        <li><Link href='mailto:leramirezca@gmail.com'><AiOutlineMail/></Link></li>
      </ul>
    </div>
  )
}

export default Contact
