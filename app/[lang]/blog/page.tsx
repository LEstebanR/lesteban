import { getDictionary } from '@/app/[lang]/dictionaries'

import type { Metadata } from 'next'

import { BlogCard } from '@/components/cards/blog-card'

import { getAllPosts } from '@/lib/blog'

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
  return {
    title: dictionary['blog'],
  }
}

export default async function BlogPage({ params }: PageParams) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const posts = await getAllPosts(lang)

  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full flex-col gap-8 px-2 md:mx-0 md:px-0">
      <div className="my-4 flex justify-center">
        <h1 className="font-heading text-primary text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          {dictionary['blog']}
        </h1>
      </div>

      {posts.length === 0 ? (
        <div className="text-muted-foreground flex h-64 items-center justify-center">
          <p>{dictionary['no-posts']}</p>
        </div>
      ) : (
        <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.url} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
