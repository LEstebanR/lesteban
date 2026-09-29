import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { Calendar } from 'lucide-react'

import { RelatedPosts } from '@/components/related-posts'
import { SetBreadcrumb } from '@/components/set-breadcrumb'
import { Badge } from '@/components/ui/badge'
import { ScrollProgress } from '@/components/ui/scroll-progress'

import { getAllPostUrls, getPostByUrl } from '@/lib/blog'
import { BASE_URL, TWITTER_HANDLE } from '@/lib/constants'
import { getCanonicalUrl } from '@/lib/utils'

type PageParams = {
  params: Promise<{
    lang: 'en' | 'es'
    name: string
  }>
}

export async function generateStaticParams() {
  const enUrls = await getAllPostUrls('en')
  const esUrls = await getAllPostUrls('es')

  return [
    ...enUrls.map((url) => ({ lang: 'en', name: url })),
    ...esUrls.map((url) => ({ lang: 'es', name: url })),
  ]
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { name, lang } = await params
  const post = await getPostByUrl(name, lang)

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  const canonicalPath = `/${lang}/blog/${name}`
  const canonicalUrl = getCanonicalUrl(canonicalPath)

  // Check if alternate language version exists
  const alternateLang = lang === 'en' ? 'es' : 'en'
  const alternatePost = await getPostByUrl(name, alternateLang)
  const alternateUrl = alternatePost
    ? getCanonicalUrl(`/${alternateLang}/blog/${name}`)
    : undefined

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
      ...(alternateUrl && {
        languages: {
          [lang]: canonicalUrl,
          [alternateLang]: alternateUrl,
          'x-default': canonicalUrl,
        },
      }),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      type: 'article',
      locale: lang === 'en' ? 'en_US' : 'es_ES',
      ...(alternateUrl && {
        alternateLocale: lang === 'en' ? 'es_ES' : 'en_US',
      }),
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: TWITTER_HANDLE,
    },
  }
}

export default async function BlogPostPage({ params }: PageParams) {
  const { name, lang } = await params
  const post = await getPostByUrl(name, lang)

  if (!post) {
    notFound()
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Luis Esteban Ramirez',
    },
    publisher: {
      '@type': 'Person',
      name: 'Luis Esteban Ramirez',
    },
    keywords: post.tags?.join(', '),
    inLanguage: lang,
    url: `${BASE_URL}/${lang}/blog/${post.url}`,
  }

  return (
    <>
      <ScrollProgress className="bg-foreground/70 fixed top-16 right-0 left-0 z-50 h-px" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SetBreadcrumb path={name} title={post.short_title} />
      <div className="mx-auto flex w-full max-w-[65ch] flex-col gap-12 pt-16 pb-20 md:pt-24">
        <header className="flex flex-col gap-6">
          <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <Badge
              variant="outline"
              className="text-muted-foreground gap-1.5 rounded-sm border-none px-0 text-sm font-normal tabular-nums"
              data-testid="date-badge"
            >
              <Calendar className="size-3.5" />
              {post.date}
            </Badge>
            {post.tags && post.tags.length > 0 && (
              <ul className="flex flex-wrap">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="after:mr-1 after:content-[','] last:after:content-none"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-[-0.02em] text-balance">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-foreground/70 font-serif text-[1.35rem] leading-relaxed text-pretty italic">
              {post.description}
            </p>
          )}
        </header>
        <article
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
        <RelatedPosts currentUrl={post.url} lang={lang} />
      </div>
    </>
  )
}
