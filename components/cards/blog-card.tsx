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
      className="group focus-visible:ring-ring flex h-full flex-col gap-4 outline-none focus-visible:ring-4"
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="ink bg-primary absolute inset-0 translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
        />
        <div className="halftone relative aspect-[4/3] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <span className="text-primary text-sm font-bold">{post.date}</span>
      <h3 className="font-heading decoration-secondary text-2xl leading-tight font-black tracking-tight decoration-4 underline-offset-4 group-hover:underline">
        {post.title}
      </h3>
      {post.tags && post.tags.length > 0 && (
        <ul className="text-muted-foreground flex flex-wrap gap-x-2 text-sm font-medium">
          {post.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="after:text-primary after:ml-2 after:content-['/'] last:after:content-none"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </NextLink>
  )
}
