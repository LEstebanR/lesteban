import { ImageResponse } from 'next/og'

import {
  BrandOgImage,
  ogImageContentType,
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

  if (post?.image) {
    return new ImageResponse(
      (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
          <img
            src={getPublicAssetDataUri(post.image)}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ),
      { ...size }
    )
  }

  return new ImageResponse(
    (
      <BrandOgImage
        eyebrow="lesteban.dev/blog"
        title={post?.title ?? 'Blog'}
        subtitle={post?.description}
      />
    ),
    { ...size }
  )
}
