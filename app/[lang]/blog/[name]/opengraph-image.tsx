import { ImageResponse } from 'next/og'

import {
  BrandOgImage,
  ogImageContentType,
  ogImageOptions,
  ogImageSize,
} from '@/components/og/brand-og-image'

import { getPostByUrl } from '@/lib/blog'
import { getPublicAssetDataUri } from '@/lib/og'

export const size = ogImageSize
export const contentType = ogImageContentType
export const alt = 'Blog post cover'

export default async function Image({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es'; name: string }>
}) {
  const { lang, name } = await params
  const validLang = lang === 'es' ? 'es' : 'en'
  const post = await getPostByUrl(name, validLang)

  return new ImageResponse(
    (
      <BrandOgImage
        eyebrow="lesteban.dev/blog"
        title={post?.title ?? 'Blog'}
        subtitle={post?.description}
        image={post?.image ? getPublicAssetDataUri(post.image) : undefined}
      />
    ),
    ogImageOptions()
  )
}
