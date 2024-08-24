type Headings = string[]

type Meta = {
  id: string
  title: string
  date: string
  slug?: string
  headings?: Headings
}

type VulnerabilityPost = {
  meta: Meta
  content: ReactElement<any, string | JSXElementConstructor<any>>
}
