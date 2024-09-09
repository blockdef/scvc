import { compileMDX } from "next-mdx-remote/rsc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"

import CustomImage from "@/components/mdx/custom-image"
import Video from "@/components/mdx/video"

type Filetree = {
  tree: [
    {
      path: string
    }
  ]
}

export async function getVulnerabilityByName(
  fileName: string
): Promise<VulnerabilityPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/blockdef/scvc-data/main/${fileName}.mdx`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  )

  if (!res.ok) return undefined

  const rawMDX = await res.text()

  if (rawMDX === "404: Not Found") return undefined

  const { frontmatter, content } = await compileMDX<{
    title: string
    date: string
    slug: string[]
    headings: string[]
  }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          /* @ts-ignore */
          rehypeSlug,
          /* @ts-ignore */
          rehypeHighlight,
          [
            /* @ts-ignore */
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  })

  const id = fileName.replace(/\.mdx$/, "")

  const vulnerabilityObj: VulnerabilityPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      headings: frontmatter.headings,
    },
    content,
  }

  return vulnerabilityObj
}

export async function getVulnerabilityCodeByName(
  fileName: string
): Promise<VulnerabilityPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/blockdef/scvc-data/main/${fileName}.mdx`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  )

  if (!res.ok) return undefined

  const rawMDX = await res.text()

  if (rawMDX === "404: Not Found") return undefined

  const { frontmatter, content } = await compileMDX<{
    title: string
    date: string
    slug: string[]
  }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        /* @ts-ignore */
        rehypePlugins: [
          rehypeSlug,
          /* @ts-ignore */
          rehypeHighlight,
          [
            /* @ts-ignore */
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  })

  const id = fileName.replace(/\.mdx$/, "")

  const vulnerabilityObj: VulnerabilityPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
    },
    content,
  }

  return vulnerabilityObj
}

export async function getVulnerabilitiesMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/blockdef/scvc-data/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  )

  if (!res.ok) return undefined

  const repoFiletree: Filetree = await res.json()

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"))

  const vulnerabilities: Meta[] = []

  for (const file of filesArray) {
    const vulnerability = await getVulnerabilityByName(file)
    if (vulnerability) {
      const { meta } = vulnerability
      vulnerabilities.push(meta)
    }
  }

  return vulnerabilities.sort((a, b) => (a.date < b.date ? 1 : -1))
}
