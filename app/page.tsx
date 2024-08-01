/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ohtta8YepbA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.svg"
import { Icons } from "@/components/icons"
import { CommandMenu } from "@/components/command-menu"

export default function Component() {
  return (
    <div>
      <header className="flex flex-col md:flew-row justify-between items-center gap-2 py-4 px-8 md:flex-row sticky top-0">
        <div className="flex">
          <Button variant="link" className="-ml-2">
            <Image src={logo} alt="logo" className="" />
          </Button>
          <Button variant="outline" className="w-full font-bold bg-accent md:w-auto mx-[0.1rem] -ml-[7.5rem]">
            About
          </Button>
          <Button variant="outline" className="w-full font-bold bg-accent md:w-auto mx-[0.1rem]">
            SCVC
          </Button>
          <Button variant="outline" className="w-full font-bold bg-accent md:w-auto mx-[0.1rem]">
            Support
          </Button>
          <Button variant="outline" className="w-full font-bold bg-accent md:w-auto mx-[0.1rem]">
            Changelog
          </Button>
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
  <div className="bg-body-grid rounded-xl bg-primary/80 p-60 pb-[28rem] shadow-lg max-w-[86rem] w-full relative">
    <div className="space-y-4 text-center pt-6">

    </div>


    <div className="absolute top-[41.5rem] left-4 transform -translate-y-1/2">
      <p className="text-xl font-bold text-white">The Smart Contract Vulnerability Classifiction</p>
    </div>
    <div className="absolute top-80 left-4 transform -translate-y-3/4">
      <p className="text-sm font-extrabold text-white">BLOCKDEF</p>
    </div>

    <div className="absolute top-[36rem] right-4 transform -translate-y-1/2 max-w-72">
      <p className="text-sm font-normal text-white">The Smart Contract Vulnerability Classification is a comprehensive framework designed to identify, categorize, and assess vulnerabilities in smart contracts.</p>
    </div>
    <div className="absolute top-[41rem] right-[2.3rem] transform -translate-y-1/2 max-w-72">
      <Button variant="outline" className="w-full bg-accent md:w-auto mx-[0.1rem]">
        Contribute
      </Button>
      <Button variant="outline" className="w-full bg-accent md:w-auto mx-[0.1rem]">
        Become a Member
      </Button>
    </div>
  </div>
</section>
    </div>
  )
}
