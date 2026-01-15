'use client'

import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

type BlogPost = {
  url: string
  title: string
  short_title: string
  date: string
  description: string
  image: string
}

export function BlogCard({ post }: { post: BlogPost }) {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'

  return (
    <NextLink href={`/${lang}/blog/${post.url}`}>
      <Card className="border-secondary group flex h-full w-full cursor-pointer flex-col gap-0 overflow-hidden border-2 p-0 transition-all duration-300 hover:shadow-lg">
        <div className="relative block h-64 w-full overflow-hidden lg:h-56">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="w-full flex-1 px-0">
          <CardTitle className="group-hover:text-primary flex w-full items-start justify-between gap-2 px-6 py-4 transition-colors">
            <span className="text-lg font-bold">{post.title}</span>
          </CardTitle>
        </CardHeader>
      </Card>
    </NextLink>
  )
}
