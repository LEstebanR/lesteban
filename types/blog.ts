export interface BlogPost {
  slug: string
  url: string
  title: string
  short_title: string
  date: string
  description: string
  image: string
  /** CSS object-position for cropped covers, e.g. '50% 22%' (default: centre). */
  imagePosition?: string
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
  image_position?: string
  author?: string
  tags?: string[]
  updated_date?: string
}
