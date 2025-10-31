export interface BlogPost {
  slug: string
  url: string
  title: string
  short_title: string
  date: string
  description: string
  image: string
  content?: string
  author?: string
  tags?: string[]
  readingTime?: number
  updatedDate?: string
}

export interface BlogPostMetadata {
  title: string
  url: string
  short_title: string
  date: string
  description: string
  image: string
  author?: string
  tags?: string[]
  updated_date?: string
}
