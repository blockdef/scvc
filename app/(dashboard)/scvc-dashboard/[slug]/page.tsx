import React from "react"

import { getVulnerabilityByName } from "@/lib/mdx"

import "highlight.js/styles/panda-syntax-dark.css"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import ContentBar from "@/components/dashboard/content-bar"

async function fetchVulnerabilitiesDetails(params: string) {
  const data = await getVulnerabilityByName(`${params}`)

  return data
}

export default async function VulnerabilityDetails({
  params,
}: {
  params: { slug: string }
}) {
  const vulnerabilityContent = await fetchVulnerabilitiesDetails(
    params?.slug as string
  )

  return (
    <div className="flex w-full max-w-[23rem] sm:max-w-[37rem] md:max-w-[50rem] lg:max-w-[85rem] 2xl:max-w-[90rem] min-h-screen p-4 lg:px-6 overflow-x-hidden">
      <div className="w-full bg-background rounded-lg shadow-md p-4 lg:px-6">
        <div className="top-2 mb-2">
          <ContentBar />
        </div>
        <div className="py-4">
          <Separator />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold mb-4">
          {vulnerabilityContent?.meta.title}
        </h1>
        <div className="prose prose-sm sm:prose-base prose-gray dark:prose-invert max-w-full">
          <article>{vulnerabilityContent?.content}</article>
        </div>
      </div>
    </div>
  )
}
