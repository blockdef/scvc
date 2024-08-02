import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.svg"
import { Icons } from "@/components/icons"
import { CommandMenu } from "@/components/command-menu"
import { NavSheetTrigger } from "@/components/header/nav-sheet-trigger"

export default function Component() {
  return (
    <div>
      <header className="flex flex-col md:flew-row justify-between items-center gap-2 py-4 px-4 md:flex-row sticky top-0">
        <div className="flex">
          <Button variant="link" className="-ml-2">
            <Image src={logo} alt="logo" className="" />
          </Button>
          <Button variant="outline" className="w-full font-bold bg-accent md:w-auto mx-[0.1rem] -ml-[7.5rem]">
            About
          </Button>
          <Button variant="outline" className="w-full font-bold bg-accent md:w-auto mx-[0.1rem]">
            Support
          </Button>
          <Button variant="outline" className="w-full font-bold bg-accent md:w-auto mx-[0.1rem]">
            Changelog
          </Button>
          <NavSheetTrigger side="top" name="SCVC" title="The Smart Contract Vulnerability Classifiction" description="The Smart Contract Vulnerability Classification is a comprehensive framework designed to identify, categorize, and assess vulnerabilities in smart contracts." />
          <NavSheetTrigger side="left" name="Resources" title="Resources" description="Resources" />
        </div>
        <div className="flex justify-end" >
          <Button variant="outline" className="bg-accent md:w-auto mx-[0.1rem]">
            <Icons.gitHub className="size-4"/>
          </Button>
          <Button variant="outline" className="bg-accent md:w-auto mx-[0.1rem]">
            <Icons.moon className="size-4"/>
          </Button>
          <CommandMenu>
            Documentation
          </CommandMenu>
        </div>
      </header>
      <section className="relative flex items-center justify-center py-2 md:py-2 lg:py-2">
        <div className="bg-body-grid rounded-xl bg-primary/80 p-60 pb-[28rem] shadow-lg max-w-[88rem] w-full relative">
          <div className="space-y-4 text-center pt-6">

          </div>

          <div className="absolute top-[8.5rem] left-4 transform -translate-y-3/4">
            <p className="text-sm font-extrabold text-white">By BLOCKDEF</p>
          </div>
          <div className="absolute top-[40.5rem] left-4 transform -translate-y-1/2">
            <p className="text-2xl font-bold text-white">The Smart Contract Vulnerability Classifiction</p>
          </div>


          <div className="absolute top-[36rem] right-4 transform -translate-y-1/2 max-w-72">
            <p className="text-sm font-normal text-white">The Smart Contract Vulnerability Classification is a comprehensive framework designed to identify, categorize, and assess vulnerabilities in smart contracts.</p>
          </div>
          <div className="absolute top-[40.5rem] right-[1.8rem] transform -translate-y-1/2 max-w-72">
            <Button variant="outline" className="w-full bg-white border-white hover:bg-accent/25 text-black md:w-auto mr-[0.5rem]">
              Contribute
            </Button>
            <Button variant="outline" className="w-full bg-accent/60 md:w-auto mx-[0.1rem]">
              Become a Member
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
