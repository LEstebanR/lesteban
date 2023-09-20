import React, { FC, useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import Button from '../UI/button'
import Logo from '../logo'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { NavLinks } from './typography'

interface HeaderProps {
  projectsRef: any
  aboutRef: any
  experienceRef: any
}

const Header: FC<HeaderProps> = ({ projectsRef, aboutRef, experienceRef }) => {
  const LINKS = [
    { name: 'About', href: '#about', ref: aboutRef },
    { name: 'Experience', href: '#experience', ref: experienceRef },
    { name: 'Projects', href: '#projects', ref: projectsRef },
  ]

  const scrollToSection = (ref: any) => {
    const test = document.getElementById(ref.current.id)
    let position = test ? test.getBoundingClientRect() : { top: 0, left: 0 }
    // scrolls to 20px above element
    window.scrollTo(position.left, position.top + window.scrollY - 65)
  }

  return (
    <header className="w-full h-16 flex justify-center items-center sticky top-0 z-50  bg-white dark:bg-dark bg-opacity-80 filter saturate-180 blur-5 border-b border-gray-500 mb-4">
      <div className="w-11/12 md:w-6/12  flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <ul className="hidden md:flex gap-4">
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
          className="hidden md:block"
        >
          <Button>Download CV</Button>
        </Link>
        <Menu as="div" className="relative inline-block text-left md:hidden">
          <div>
            <Menu.Button className="flex w-full justify-center items-center rounded-md p-2  border-primary border-2 ">
              <Bars3Icon className="h-6 w-6 text-primary" aria-hidden="true" />
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
            <Menu.Items className="absolute right-0 mt-3 w-36 origin-top-right rounded-md bg-light dark:bg-dark shadow-sm  shadow-primary">
              <div className="px-1 py-1 border border-black rounded-md">
                {LINKS.map((link, index) => (
                  <Menu.Item key={index}>
                    <span
                      className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
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
                    <Button className="w-full">Download CV</Button>
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
