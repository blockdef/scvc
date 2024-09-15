"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { headerButtonsData } from "@/content/header/header-buttons"
import { Button } from "@/components/ui/button"
import { CommandMenuSearch } from "@/components/command-menu-search"
import { MainButtons } from "@/components/header/main-buttons"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import darklogo from "../../public/logo-dark.svg"
import logo from "../../public/logo.svg"
import Link from "next/link"

export function SiteHeader() {
  const pathname = usePathname()
  const isRoot = pathname === "/"

  // Render nothing if not on root path
  if (!isRoot) return null

  return (
    <header className="hidden sm:flex flex-col md:flex-row justify-between items-center gap-2 py-4 px-4 sticky top-0">
      <div className="flex">
        <Button variant="link" className="-ml-2 md:-mr-[7.5rem]">
          <Image src={logo} alt="logo" className="hidden dark:block" />
          <Image src={darklogo} alt="logo" className="block dark:hidden" />
        </Button>
        <div>
          {headerButtonsData.map((config, index) => (
            <Link key={index} href={config.link || '#'} target="_blank" referrerPolicy="no-referrer">
              <Button
                variant={config.variant}
                className={config.className}
              >
                {config.children}
              </Button>
            </Link>
          ))}
        </div>
        <MainButtons
          href="/scvc-dashboard"
          showIcon={true}
          name="SCVC"
          title="The Smart Contract Vulnerability Classification"
          description="The Smart Contract Vulnerability Classification is a comprehensive framework designed to identify, categorize, and assess vulnerabilities in smart contracts."
        />
        <MainButtons
          href="https://blockdef.dev/articles"
          showIcon={true}
          name="Resources"
          title="Resources"
          description="The Resources module provides a comprehensive collection of tools, guides, and reference materials designed to assist in understanding and managing smart contract vulnerabilities."
        />
      </div>
      <div className="flex justify-end">
        <Link href={process.env.NEXT_PUBLIC_SCVC_GITHUB_REPO ?? '/'} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="w-full font-bold bg-accent border-transparent hover:bg-[#3333] md:w-auto mx-[0.1rem] dark:hover:bg-white hover:text-black"
          >
            <Icons.gitHub className="size-4" />
          </Button>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_BLOCKDEF_LINKEDIN ?? '/'} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="w-full font-bold bg-accent border-transparent hover:bg-[#3333] md:w-auto mx-[0.1rem] dark:hover:bg-white hover:text-black"
          >
            <Icons.linkedin className="size-4" />
          </Button>
        </Link>
        <div>
          <ThemeToggle additionalStyle={true} />
          <CommandMenuSearch />
        </div>
      </div>
    </header>
  )
}
