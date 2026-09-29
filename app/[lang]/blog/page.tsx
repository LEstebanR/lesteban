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
    <div className="relative isolate flex min-h-[calc(100vh-8rem)] w-full flex-col gap-14 py-16">
      <div
        aria-hidden="true"
        className="ink drift bg-secondary absolute -top-10 right-0 -z-10 size-64 rounded-full md:size-96 dark:opacity-40"
      />
      <header className="flex flex-col gap-5">
        <h1 className="font-heading misregister text-[clamp(3.5rem,13vw,9rem)] leading-[0.85] font-black tracking-tight">
          {dictionary['blog']}
        </h1>
        <p className="max-w-xl text-lg font-medium">
          {dictionary['blog-description']}
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground py-16 text-center font-bold">
          {dictionary['no-posts']}
        </p>
      ) : (
        <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.url} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
