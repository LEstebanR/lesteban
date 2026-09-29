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
      className="group focus-visible:ring-ring grid grid-cols-[1fr_6rem] gap-5 rounded-sm py-6 outline-none focus-visible:ring-2 sm:grid-cols-[1fr_9rem] sm:gap-8"
    >
      <div className="flex flex-col gap-2">
        <time className="text-muted-foreground text-sm tabular-nums">
          {post.date}
        </time>
        <h3 className="font-heading decoration-primary/40 text-2xl leading-snug font-medium underline-offset-[0.18em] group-hover:underline">
          {post.title}
        </h3>
        <p className="text-foreground/75 line-clamp-2 leading-relaxed">
          {post.description}
        </p>
        {post.tags && post.tags.length > 0 && (
          <ul className="text-muted-foreground flex flex-wrap text-sm">
            {post.tags.slice(0, 3).map((tag) => (
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
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="144px"
        />
      </div>
    </NextLink>
  )
}
