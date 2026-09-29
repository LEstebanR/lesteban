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
      className="group bg-card focus-visible:ring-ring flex h-full flex-col overflow-hidden rounded-xl border outline-none focus-visible:ring-4"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t-2 border-dashed p-5">
        <span className="text-muted-foreground font-mono text-xs">
          {post.date}
        </span>
        <h3 className="font-heading group-hover:text-primary text-xl leading-snug font-extrabold transition-colors">
          {post.title}
        </h3>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-1">
            {post.tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="bg-accent text-accent-foreground rounded-full px-2.5 py-0.5 font-mono text-xs"
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
