import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { Calendar } from 'lucide-react'

import { SetBreadcrumb } from '@/components/set-breadcrumb'
import { Badge } from '@/components/ui/badge'

import { getAllPostUrls, getPostByUrl } from '@/lib/blog'

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

  return {
    title: `${post.title} | Blog`,
    description: post.description,
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
    url: `https://lestebanr.com/${lang}/blog/${post.url}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SetBreadcrumb path={name} title={post.short_title} />
      <div className="mt-8 flex flex-col gap-8">
        {/* Header */}
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-heading from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
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
          className="blog-content prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-h1:text-4xl prose-h1:font-bold prose-h1:text-primary prose-h2:text-3xl prose-h2:font-bold prose-h2:text-primary prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-bold prose-h3:text-primary prose-h3:mt-8 prose-h3:mb-3 prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:text-base prose-a:text-primary prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline prose-strong:text-foreground prose-strong:font-bold prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </div>
    </>
  )
}
