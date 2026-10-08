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

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string }
}) {
  const { lang } = await params
  const validLang = lang === 'es' ? 'es' : 'en'
  const dictionary = await getDictionary(validLang)
  const alt =
    validLang === 'es'
      ? `Luis Esteban Ramírez — ${dictionary['hero-role']}`
      : `Luis Esteban Ramirez — ${dictionary['hero-role']}`

  return [
    {
      id: validLang,
      alt,
      size: ogImageSize,
      contentType: ogImageContentType,
    },
  ]
}

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
