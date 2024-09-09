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

type Vulnerability = {
  id: string
  title: string
  description: string
  severity: string
  details?: string
  prevention?: string
  reference?: string
  publisher: string
  content: string
  slug: string
  date: string
}
