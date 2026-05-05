import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://lesteban.dev'

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const posts = await getAllPosts('en')

  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${BASE_URL}/en/blog/${p.url}</link>
      <guid>${BASE_URL}/en/blog/${p.url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.description)}</description>
    </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Luis Esteban — Blog</title>
    <link>${BASE_URL}/en/blog</link>
    <description>Articles on software development by Luis Esteban Ramirez.</description>
    <language>en</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
