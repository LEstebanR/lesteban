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
    <section className="border-border flex flex-col gap-2 border-t pt-10">
      <h2 className="text-muted-foreground text-sm">
        {dictionary['related-posts']}
      </h2>
      <div className="divide-border flex flex-col divide-y">
        {related.map((post) => (
          <BlogCard key={post.url} post={post} />
        ))}
      </div>
    </section>
  )
}
