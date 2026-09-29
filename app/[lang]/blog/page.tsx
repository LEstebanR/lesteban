import { getDictionary } from '@/app/[lang]/dictionaries'

import type { Metadata } from 'next'

import { BlogCard } from '@/components/cards/blog-card'

import { getAllPosts } from '@/lib/blog'
import { getCanonicalUrl } from '@/lib/utils'

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
      languages: {
        [lang]: canonicalUrl,
        [alternateLang]: alternateUrl,
        'x-default': canonicalUrl,
      },
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
    <div className="flex min-h-[calc(100vh-8rem)] w-full flex-col gap-12 pt-16 pb-20 md:pt-24">
      <header className="grid gap-4 md:grid-cols-12 md:gap-10">
        <h1 className="font-heading text-6xl font-normal tracking-[-0.02em] md:col-span-3 md:text-7xl">
          {dictionary['blog']}
        </h1>
        <p className="text-foreground/75 max-w-[40ch] self-end font-serif text-xl leading-relaxed md:col-span-9">
          {dictionary['blog-description']}
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground border-border border-t py-16 text-center">
          {dictionary['no-posts']}
        </p>
      ) : (
        <div className="grid md:grid-cols-12 md:gap-10">
          <div className="divide-border border-border flex flex-col divide-y border-t md:col-span-9 md:col-start-4">
            {posts.map((post) => (
              <BlogCard key={post.url} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
