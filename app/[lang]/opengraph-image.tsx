import { getDictionary } from '@/app/[lang]/dictionaries'

import { ImageResponse } from 'next/og'

import {
  BrandOgImage,
  ogImageContentType,
  ogImageOptions,
  ogImageSize,
} from '@/components/og/brand-og-image'

export const size = ogImageSize
export const contentType = ogImageContentType
export const alt = 'Luis Esteban Ramirez — Software developer & indie hacker'

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const validLang = lang === 'es' ? 'es' : 'en'
  const dictionary = await getDictionary(validLang)

  return new ImageResponse(
    (
      <BrandOgImage
        eyebrow="lesteban.dev"
        status={dictionary['hero-status']}
        title="Luis Esteban"
        subtitle={dictionary['hero-role']}
      />
    ),
    ogImageOptions()
  )
}
