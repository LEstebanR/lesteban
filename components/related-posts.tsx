import { getDictionary } from '@/app/[lang]/dictionaries'

import { BlogCard } from '@/components/cards/blog-card'

import { getAllPosts } from '@/lib/blog'

interface RelatedPostsProps {
  currentUrl: string
  lang: 'en' | 'es'
}

export async function RelatedPosts({ currentUrl, lang }: RelatedPostsProps) {
  const [allPosts, dictionary] = await Promise.all([
    getAllPosts(lang),
    getDictionary(lang),
  ])

  const related = allPosts.filter((p) => p.url !== currentUrl).slice(0, 2)

  if (related.length < 2) return null

  return (
    <section className="flex flex-col gap-6">
      <div className="border-border via-border h-px w-full bg-gradient-to-r from-transparent to-transparent" />
      <h2 className="font-heading text-foreground text-2xl font-bold">
        {dictionary['related-posts']}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {related.map((post) => (
          <BlogCard key={post.url} post={post} />
        ))}
      </div>
    </section>
  )
}
