import React, { FC } from 'react'
import TechnologyLogo from './cards/TechnologyLogo'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import { H1, H3, Body } from './UI/typography'

const About: FC = () => {
  const TechnologiesExperience = [
    {
      layer: 'React',
      logo: '/assets/images/logos/react.svg',
    },
    {
      layer: 'Next',
      logo: '/assets/images/logos/nextjs-icon.svg',
    },
    {
      layer: 'Typescript',
      logo: '/assets/images/logos/typescript-icon-round.svg',
    },
    {
      layer: 'Tailwind',
      logo: '/assets/images/logos/tailwindcss-icon.svg',
    },
    {
      layer: 'MaterialUI',
      logo: '/assets/images/logos/material-ui.svg',
    },
    {
      layer: 'Supabase',
      logo: '/assets/images/logos/supabase-icon.svg',
    },
  ]

  const Interesting = [
    {
      layer: 'Node',
      logo: '/assets/images/logos/nodejs-icon.svg',
    },
    {
      layer: 'Vue',
      logo: '/assets/images/logos/vue.svg',
    },
    {
      layer: 'Astro',
      logo: '/assets/images/logos/astro-icon.svg',
    },
    {
      layer: 'Remix',
      logo: '/assets/images/logos/remix-icon.svg',
    },
    {
      layer: 'Python',
      logo: '/assets/images/logos/python.svg',
    },
    {
      layer: 'Go',
      logo: '/assets/images/logos/go.svg',
    },
  ]
  return (
    <div className="flex flex-col items-center gap-4 my-4 ">
      <span>
        <H1>Luis Esteban Ramírez</H1>
        <H1 gradient className="font-extrabold ">
          Frontend Developer
        </H1>
      </span>

      <Image
        src="/assets/images/photo.jpeg"
        width={200}
        height={200}
        alt="profile picture"
        className="rounded-full border-4 border-primary shadow-2xl "
      />
      <Body>
        +1 Year of experience as a web developer. Teamwork is my favorite way to
        learn. Always looking to improve the quality of my code to make it more
        readable and maintainable. My dream is to work on products with global
        impact that positively change the lives of millions of people.
      </Body>
      <H3>I have experience with:</H3>
      <div className="grid grid-cols-2 xl:grid-cols-6 w-full gap-2">
        {TechnologiesExperience.map((tech) => (
          <TechnologyLogo key={tech.layer} tech={tech} />
        ))}
      </div>
      <div className="h-1/3 bg-secondary rounded-t border-b border-dashed border-black flex justify-center items-center"></div>
      <svg width="1em" height="0">
        <linearGradient
          id="blue-gradient-desktop"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#ff6d60  " offset="0%" />
          <stop stopColor="#f7d060" offset="100%" />
        </linearGradient>
      </svg>
      <div className="h-2/3 flex justify-center items-center w-full">
        <ul className="flex gap-4 w-full justify-center">
          <H3>Let's talk:</H3>

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
      <div></div>

      {/* <H3>I have special interest learning:</H3>
      <div className="flex flex-wrap justify-center sm:justify-between gap-2">
        {Interesting.map((tech) => (
          <TechnologyLogo key={tech.layer} tech={tech} />
        ))}
      </div> */}
    </div>
  )
}

export default About
