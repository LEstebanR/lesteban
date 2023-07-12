import React, { FC } from 'react'
import TechnologyLogo from './cards/TechnologyLogo'
import Link from 'next/link'
import Image from 'next/image'
import Button from './UI/Button'
import { Body, H1, H3 } from './UI/Typography'

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
    <div className="flex flex-col items-center max-w-2xl gap-4 p-4 overflow-auto">
      <span>
        <H1>Luis Esteban Ramírez</H1>
        <H1 gradient>Frontend Developer</H1>
      </span>

      <Image
        src="/assets/images/photo.jpeg"
        width={200}
        height={200}
        alt="profile picture"
        className="rounded-full border-4 border-sky-400 shadow-2xl "
      />
      <Body>
        Frontend developer and Civil Engineer I&apos;m always looking to learn
        and improve in order to create effective and beautiful solutions. I love
        collaborating with teams and taking on new challenges. Let&apos;s talk
        and build something amazing together!
      </Body>
      <H3>I have experience with:</H3>
      <div className="flex flex-wrap justify-center sm:justify-between gap-2">
        {TechnologiesExperience.map((tech) => (
          <TechnologyLogo key={tech.layer} tech={tech} />
        ))}
      </div>
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
