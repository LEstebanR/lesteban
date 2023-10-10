export interface StackItem {
  name: string
  icon: string
}

export interface Project {
  name: string
  url: string
  image: string
  repo: string
  stack: StackItem[]
  description: string
}

export interface Job {
  position: string
  logo: string
  company: string
  url: string
  start: string
  end: string
  detail: string
  stack: StackItem[]
}
