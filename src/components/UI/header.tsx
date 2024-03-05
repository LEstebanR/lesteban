import React, { FC, Fragment } from 'react'
import Link from 'next/link'
import Button from '../UI/button'
import Logo from '../logo'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { NavLinks } from './typography'

interface HeaderProps {
  projectsRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
  experienceRef: React.RefObject<HTMLElement>
}

const Header: FC<HeaderProps> = ({ projectsRef, aboutRef, experienceRef }) => {
  const LINKS = [
    { name: 'About', href: '#about', ref: aboutRef },
    { name: 'Experience', href: '#experience', ref: experienceRef },
    { name: 'Projects', href: '#projects', ref: projectsRef },
  ]

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    const test = document.getElementById(ref.current?.id || '')
    const position = test ? test.getBoundingClientRect() : { top: 0, left: 0 }
    // scrolls to 20px above element
    window.scrollTo(position.left, position.top + window.scrollY - 65)
  }

  return (
    <header className="sticky top-0 z-50 mb-4 flex h-16 w-full  items-center justify-center border-b border-gray-500 bg-white opacity-100 saturate-100 dark:bg-dark md:opacity-80">
      <div className="flex w-11/12 items-center justify-between md:w-6/12">
        <div className="w-1/6">
          <Logo />
        </div>
        <ul className="hidden grow justify-center gap-4 md:flex">
          {LINKS.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => scrollToSection(link.ref)}
            >
              <NavLinks>{link.name}</NavLinks>
            </li>
          ))}
        </ul>
        <Link
          href="https://drive.google.com/file/d/1Ipyn640EG571TQQJCgY-OkqW-4fIvFpq/view?usp=drive_link"
          target="_blank"
          className=" hidden md:block"
        >
          <Button>Download CV</Button>
        </Link>
        <Menu
          as="div"
          className="relative inline-block  text-left  opacity-100 md:hidden"
        >
          <div>
            <Menu.Button className="flex w-full items-center justify-center rounded-md border-2  border-primary p-2 ">
              <Bars3Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <p className="hidden">Menu</p>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-3 w-36 origin-top-right rounded-md bg-white font-bold opacity-100  shadow-sm shadow-primary dark:bg-black">
              <div className="rounded-md border border-black p-1">
                {LINKS.map((link, index) => (
                  <Menu.Item key={index}>
                    <span
                      className="group flex w-full items-center rounded-md p-2 text-sm font-bold"
                      onClick={() => scrollToSection(link.ref)}
                    >
                      <NavLinks>{link.name}</NavLinks>
                    </span>
                  </Menu.Item>
                ))}
                <Menu.Item>
                  <Link
                    href="https://drive.google.com/file/d/1Ipyn640EG571TQQJCgY-OkqW-4fIvFpq/view?usp=drive_link"
                    target="_blank"
                  >
                    <Button className="w-full font-bold">Download CV</Button>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  )
}

export default Header
