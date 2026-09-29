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
    <section className="border-border mt-8 flex flex-col gap-6 border-t pt-10">
      <h2 className="font-heading text-2xl font-semibold tracking-tight">
        <span aria-hidden="true" className="text-primary mr-2">
          /
        </span>
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
