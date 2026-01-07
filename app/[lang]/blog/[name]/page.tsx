import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { Calendar } from 'lucide-react'

import { SetBreadcrumb } from '@/components/set-breadcrumb'
import { Badge } from '@/components/ui/badge'
import { ScrollProgress } from '@/components/ui/scroll-progress'

import { getAllPostUrls, getPostByUrl } from '@/lib/blog'
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
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
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
    url: `https://lesteban.dev/${lang}/blog/${post.url}`,
  }

  return (
    <>
      <ScrollProgress className="bg-primary fixed left-0 right-0 top-16 z-50" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SetBreadcrumb path={name} title={post.short_title} />
      <div className="mt-8 flex flex-col gap-8">
        {/* Header */}
        <header className="animate-fade-in-up flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-heading from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge
              variant="outline"
              className="border-primary bg-primary/10 dark:bg-primary/20 flex items-center gap-2 rounded-full px-3 py-1"
            >
              <Calendar className="text-primary h-3.5 w-3.5" />
              <span className="text-primary text-sm font-medium">
                {post.date}
              </span>
            </Badge>
          </div>

          <div className="border-border via-border h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        </header>
        {/* Content */}
        <article
          className="blog-content animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:both]"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </div>
    </>
  )
}
