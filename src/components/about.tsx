import React, { FC } from 'react'
import TechnologyLogo from './cards/technology-logo'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import { H1, H3, Body } from '@/components/UI/typography'

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

  return (
    <div className="my-4 flex flex-col items-center gap-4 ">
      <span>
        <H1>Luis Esteban Ramírez</H1>
        <H1 gradient className="font-extrabold ">
          Frontend <strong>Developer</strong>
        </H1>
      </span>

      <Image
        src="/assets/images/avatar.jpg"
        width={200}
        height={200}
        alt="profile picture"
        className="rounded-full border-8 border-double  border-primary"
      />
      <Body>
        2 Years of experience as a web developer. Teamwork is my favorite way to
        learn. Always looking to improve the quality of my code to make it more
        readable and maintainable. My dream is to work on products with global
        impact that positively change the lives of millions of people.
      </Body>
      <H3>I have experience with:</H3>
      <div className="grid w-full grid-cols-2 gap-2 xl:grid-cols-6">
        {TechnologiesExperience.map((tech) => (
          <TechnologyLogo key={tech.layer} tech={tech} />
        ))}
      </div>
      <div className="flex h-1/3 items-center justify-center rounded-t border-b border-dashed border-black bg-secondary"></div>
      <svg width="1em" height="0">
        <linearGradient
          id="blue-gradient-desktop"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#8ecddd  " offset="0%" />
          <stop stopColor="#d2de32" offset="100%" />
        </linearGradient>
      </svg>
      <div className="flex h-2/3 w-full items-center justify-center">
        <ul className="flex w-full justify-center gap-4">
          <H3>Let&apos;s talk:</H3>

          <li>
            <Link
              href="mailto:leramirezca@gmail.com"
              aria-label="Send an email to Esteban"
              target="_blank"
            >
              <AiOutlineMail
                className="h-8 w-8"
                style={{ fill: 'url(#blue-gradient-desktop)' }}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/lestebanr/"
              target="_blank"
              aria-label="Visit Esteban's LinkedIn profile"
            >
              <AiFillLinkedin
                className="h-8 w-8"
                style={{ fill: 'url(#blue-gradient-desktop)' }}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/LEstebanR/lesteban"
              target="_blank"
              aria-label="Visit Esteban's GitHub profile"
            >
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
