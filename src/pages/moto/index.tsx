import React, { useRef } from 'react'
import Layout from '@/components/UI/layout'
import { H1, H3 } from '@/components/UI/typography'
import Image from 'next/image'
import { MOTODATA, PHOTOS } from '@/utils/motoData'
import { PhoneIcon as WhatsappIcon } from 'lucide-react'

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  return (
    <Layout
      projectsRef={projectsRef}
      aboutRef={aboutRef}
      experienceRef={experienceRef}
    >
      <H1 gradient className="font-extrabold ">
        Moto en venta
      </H1>
      <Image
        src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Motorcycle"
        width={800}
        height={600}
        className="w-full rounded-lg"
      />
      <div className="w-full rounded-lg border border-gray-500 p-4">
        <H3>Detalles de la moto</H3>
        <ul className="list-inside list-disc box-decoration-clone">
          {Object.entries(MOTODATA).map(([key, value]) => (
            <li key={key}>
              <strong>{key}: </strong>
              {value}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center">
          <a
            href="https://wa.me/573016334177"
            target="_blank"
            rel="noopener noreferrer"
            className="m-auto mt-4 inline-flex items-center rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600 "
          >
            <WhatsappIcon className="mr-2" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>

      <H3>
        Yo he sido el único dueño, <strong>precio 3&apos;000.000</strong>
      </H3>
      <div className="grid w-full items-center justify-center gap-1  rounded-lg border border-gray-500 p-4 md:grid-cols-3">
        {PHOTOS.map((photo, index) => (
          <Image
            key={index}
            src={photo}
            alt="Motorcycle"
            width={250}
            height={250}
            className="rounded-md "
          />
        ))}
      </div>
    </Layout>
  )
}
