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
export const alt = 'Luis Esteban — Blog'

export default async function Image({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>
}) {
  const { lang } = await params
  const validLang = lang === 'es' ? 'es' : 'en'
  const dictionary = await getDictionary(validLang)

  return new ImageResponse(
    (
      <BrandOgImage
        eyebrow="lesteban.dev/blog"
        title={dictionary['blog']}
        subtitle={dictionary['blog-description']}
      />
    ),
    ogImageOptions()
  )
}
