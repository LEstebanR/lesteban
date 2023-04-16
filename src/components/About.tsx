/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react'
import TechnologyLogo from './cards/TechnologyLogo'
import Link from 'next/link'
import Image from 'next/image'

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
    <div className="flex flex-col items-center max-w-2xl gap-4 p-4">
      <h2 className="text-4xl text-sky-500">Luis Esteban Ramírez</h2>
      <h3 className="text-3xl text-sky-400">Frontend Developer</h3>
      <Image
        src="/assets/images/photo.jpeg"
        width={200}
        height={200}
        alt="profile picture"
        className="rounded-full border-4 border-sky-400 shadow-2xl"
      />
      <p className="text-justify text-xl">
        I'm a passionate frontend developer with engineering skills who is
        always looking to learn and improve in order to create effective and
        beautiful solutions. I love collaborating in teams and taking on new
        challenges. Let's talk and build something amazing together!
      </p>
      <Link
        href="https://drive.google.com/file/d/1F_cztsmV1wv22EPvgSwgS6_b-ve2j-Pv/view?usp=share_link"
        target="blank"
      >
        <button className="rounded-md bg-sky-500 p-3 text-white shadow-2xl">
          Download CV
        </button>
      </Link>
      <h3 className="text-2xl">I have experience with:</h3>
      <div className="flex flex-wrap justify-between gap-4">
        {TechnologiesExperience.map((tech) => (
          <TechnologyLogo key={tech.layer} tech={tech} />
        ))}
      </div>
      <h3 className="text-2xl">I have special interest learning:</h3>
      <div className="flex flex-wrap justify-between gap-4">
        {Interesting.map((tech) => (
          <TechnologyLogo key={tech.layer} tech={tech} />
        ))}
      </div>
    </div>
  )
}

export default About
