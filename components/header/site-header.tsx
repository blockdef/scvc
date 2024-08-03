import Image from "next/image"
import { headerButtonsData } from "@/content/header/header-buttons"

import { Button } from "@/components/ui/button"
import { CommandMenuSearch } from "@/components/command-menu-search"
import { NavSheetTrigger } from "@/components/header/nav-sheet-trigger"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import darklogo from "../../public/logo-dark.svg"
import logo from "../../public/logo.svg"

export function SiteHeader() {
  return (
    <header className="flex flex-col md:flew-row justify-between items-center gap-2 py-4 px-4 md:flex-row sticky top-0">
      <div className="flex">
        <Button variant="link" className="-ml-2">
          <Image src={logo} alt="logo" className="hidden dark:block" />
          <Image src={darklogo} alt="logo" className="block dark:hidden" />
        </Button>
        <div className="ml-[0.25rem]">
          {headerButtonsData.map((config, index) => (
            <Button
              key={index}
              variant={config.variant}
              className={config.className}
            >
              {config.children}
            </Button>
          ))}
        </div>
        <NavSheetTrigger
          side="top"
          showIcon={true}
          name="SCVC"
          title="The Smart Contract Vulnerability Classifiction"
          description="The Smart Contract Vulnerability Classification is a comprehensive framework designed to identify, categorize, and assess vulnerabilities in smart contracts."
        />
        <NavSheetTrigger
          side="left"
          showIcon={true}
          name="Resources"
          title="Resources"
          description="The Resources module provides a comprehensive collection of tools, guides, and reference materials designed to assist in understanding and managing smart contract vulnerabilities."
        />
      </div>
      <div className="flex justify-end">
        <Button
          variant="outline"
          className="w-full font-bold bg-accent border-transparent hover:bg-[#3333] md:w-auto mx-[0.1rem] dark:hover:bg-white hover:text-black"
        >
          <Icons.gitHub className="size-4" />
        </Button>
        <Button
          variant="outline"
          className="w-full font-bold bg-accent border-transparent hover:bg-[#3333] md:w-auto mx-[0.1rem] dark:hover:bg-white hover:text-black"
        >
          <Icons.linkedin className="size-4" />
        </Button>
        <div>
          <ThemeToggle />
          <CommandMenuSearch />
        </div>
      </div>
    </header>
  )
}
