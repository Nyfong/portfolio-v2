export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  challenge?: string
  solution?: string
  results?: string[]
  tech: string[]
  image: string
  images?: string[]
  github?: string
  demo?: string
  featured?: boolean
  date: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  readingTime?: string
  featuredImage?: string
  draft?: boolean
  content: string
}

export interface Frontmatter {
  title: string
  date: string
  summary: string
  tags: string[]
  readingTime?: string
  featuredImage?: string
  draft?: boolean
}
