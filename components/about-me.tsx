import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

interface AboutMeProps {
  lang: 'en' | 'es'
}

export function AboutMe({ lang }: AboutMeProps) {
  const dictionary = getClientDictionary(lang)

  return (
    <div className="items-between mt-4 flex flex-col gap-4">
      <h1 className="text-primary text-2xl font-bold">
        {dictionary['about-me']}
      </h1>
      <p>
        {dictionary['about-me-description-1']}{' '}
        <span className="text-secondary font-bold">
          React, Tailwind, Next.js, Node.js, and Supabase
        </span>{' '}
        {dictionary['about-me-description-2']}{' '}
        <span className="text-secondary font-bold">Indie Hacker</span>.
      </p>
    </div>
  )
}
