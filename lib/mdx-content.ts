import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from "rehype-highlight";

import { compileMDX } from "next-mdx-remote/rsc";
import Video from "@/components/mdx/video";
import CustomImage from "@/components/mdx/custom-image";

type Filetree = {
  tree: [
    {
      path: string;
    },
  ];
};

export async function getVulnerabilityByName(
  fileName: string,
): Promise<VulnerabilityPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/blockdef/scvc-data/main/${fileName}`,
    {
      headers: {
        mode: 'no-cors',
        cache: 'default',
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    slug: string[];
    headings: string[];
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
  });

  const id = fileName.replace(/\.mdx$/, "");

  const vulnerabilityPostObj: VulnerabilityPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      headings: frontmatter.headings,
    },
    content,
  };

  return vulnerabilityPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/blockdef/scvc-data/git/trees/main?recursive=1",
    {
      headers: {
        mode: 'no-cors',
        cache: 'default',
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getVulnerabilityByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
