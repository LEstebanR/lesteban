import { getDictionary } from '@/app/[lang]/dictionaries'

import type { Metadata } from 'next'

import { BlogCard } from '@/components/cards/blog-card'
import { CornerWeb } from '@/components/corner-web'

import { getAllPosts } from '@/lib/blog'
import { getCanonicalUrl, getLanguageAlternates } from '@/lib/utils'

type PageParams = {
  params: Promise<{
    lang: 'en' | 'es'
  }>
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const canonicalPath = `/${lang}/blog`
  const canonicalUrl = getCanonicalUrl(canonicalPath)
  const alternateLang = lang === 'en' ? 'es' : 'en'
  const alternateUrl = getCanonicalUrl(`/${alternateLang}/blog`)

  const title = `${dictionary['blog']} | Luis Esteban`
  const description = dictionary['blog-description']

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates(lang, canonicalUrl, alternateUrl),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      locale: lang === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: lang === 'en' ? 'es_ES' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@lestebanr',
    },
  }
}

export default async function BlogPage({ params }: PageParams) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const posts = await getAllPosts(lang)

  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full flex-col gap-12 py-16">
      <header className="relative flex flex-col gap-4">
        <CornerWeb />
        <h1 className="font-heading text-[clamp(2.75rem,8vw,6rem)] leading-[0.9] font-semibold tracking-tight uppercase">
          {dictionary['blog']}
        </h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          {dictionary['blog-description']}
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="text-muted-foreground border-border flex h-64 items-center justify-center border border-dashed font-mono text-sm">
          <p>{dictionary['no-posts']}</p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.url} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
