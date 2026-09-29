'use client'

import { useLang } from '@/hooks/use-lang'

import Image from 'next/image'
import NextLink from 'next/link'

type BlogPost = {
  url: string
  title: string
  short_title: string
  date: string
  description: string
  image: string
  tags?: string[]
}

export function BlogCard({ post }: { post: BlogPost }) {
  const lang = useLang()

  return (
    <NextLink
      href={`/${lang}/blog/${post.url}`}
      className="toy toy-press bg-card focus-visible:ring-ring flex h-full flex-col overflow-hidden rounded-xl outline-none focus-visible:ring-4"
    >
      <div className="border-border relative aspect-[16/10] w-full overflow-hidden border-b-2">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-muted-foreground text-sm font-bold">
          {post.date}
        </span>
        <h3 className="font-heading text-2xl leading-tight font-extrabold">
          {post.title}
        </h3>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {post.tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-0.5 text-xs font-bold"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </NextLink>
  )
}
