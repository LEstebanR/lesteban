import React, { FC } from 'react'
import Link from 'next/link'
import { AiFillGithub } from "react-icons/ai";

const Footer: FC = () => {
  return (
    <>
      <footer className='flex items-center h-xl w-full justify-between p-2 text-xl'>
        <hr style={{ width: '100%' }} />
        <p>Made by LEstebanR 2023</p>
        <Link href="https://github.com/LEstebanR/lesteban" target='_blank' className='text-4xl'><AiFillGithub/></Link>
      </footer>
    </>
  )
}


export default Footer
