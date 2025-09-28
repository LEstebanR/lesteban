import { getClientDictionary } from '@/app/[lang]/dictionaries/client'

interface AboutMeProps {
  lang: 'en' | 'es'
}

export function AboutMe({ lang }: AboutMeProps) {
  const dictionary = getClientDictionary(lang)

  return (
    <div className="flex flex-col gap-4">
      <p>Foto</p>
      <p>{dictionary['hello']} Luis Esteban</p>
      <p>{dictionary['software-developer']}</p>
      <p>
        {dictionary['about-me-description-1']}{' '}
        <span className="font-bold">{dictionary['global-impact']}</span>{' '}
        {dictionary['about-me-description-2']}
      </p>
    </div>
  )
}
