'use client'

import { useLang } from '@/hooks/use-lang'

import Image from 'next/image'
import NextLink from 'next/link'

import { ScrambleText } from '@/components/scramble-text'

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
      data-scramble-host
      className="group hud-frame border-border bg-card focus-visible:ring-ring flex h-full flex-col border outline-none focus-visible:ring-2"
    >
      <span aria-hidden="true" className="sweep-line z-10" />
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover grayscale-[40%] transition duration-500 group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <time className="text-muted-foreground font-mono text-xs">
          {post.date}
        </time>
        <h3 className="font-heading group-hover:text-primary text-xl leading-snug font-semibold transition-colors">
          <ScrambleText text={post.title} duration={600} />
        </h3>
        <p className="text-foreground/70 line-clamp-2 text-sm leading-relaxed">
          {post.description}
        </p>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-x-3 pt-2">
            {post.tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="text-primary font-mono text-xs before:content-['#']"
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
