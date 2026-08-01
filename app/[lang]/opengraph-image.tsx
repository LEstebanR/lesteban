import { ImageResponse } from 'next/og'

import {
  BrandOgImage,
  ogImageContentType,
  ogImageSize,
} from '@/components/og/brand-og-image'

export const size = ogImageSize
export const contentType = ogImageContentType
export const alt = 'Luis Esteban Ramirez — Software Developer'

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const validLang = lang === 'es' ? 'es' : 'en'

  return new ImageResponse(
    (
      <BrandOgImage
        eyebrow="lesteban.dev"
        title="Luis Esteban Ramirez"
        subtitle={
          validLang === 'es'
            ? 'Desarrollador de Software'
            : 'Software Developer'
        }
      />
    ),
    { ...size }
  )
}
