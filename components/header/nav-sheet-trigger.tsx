import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SidebarNav } from "@/components/header/sidebar-nav"

import { Icons } from "@/components/icons"

interface NavSheetTriggerProps {
  name: string,
  title: string,
  description: string,
  side: SheetSide,
  showIcon: boolean
}

const navItems = [
  {
    href: "/home",
    title: "Home"
  },
  {
    href: "/about",
    title: "About Us"
  },
  {
    href: "/services",
    title: "Services"
  },
  {
    href: "/contact",
    title: "Contact Us"
  },
  {
    href: "/blog",
    title: "Blog"
  },
  {
    href: "/faq",
    title: "FAQ"
  }
];


const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function NavSheetTrigger({ name, title, description, side, showIcon }: NavSheetTriggerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full font-bold bg-accent border-transparent hover:bg-[#3333] md:w-auto mx-[0.1rem]  dark:hover:bg-white hover:text-black">
          {showIcon && <Icons.arrowpluscircle className="size-3 mr-1" />}
          {name}
        </Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle className="font-bold">{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
        {side === 'left' ? (
          <div className="sidebar">
            {/* Include your sidebar component here */}
            <SidebarNav items={navItems} />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="bg-cards-header-grid p-6 rounded-md shadow-md flex flex-col justify-between h-48 cursor-pointer">
              <div className="flex flex-col justify-end h-full">
                <h3 className="flex items-center text-md font-bold text-white space-x-2">
                    <Icons.externalink className="size-4" />
                    <span>Report a New SCVC</span>
                  </h3>
                <p className="text-sm mt-2 text-white">Submit a new Smart Contract Vulnerability Classification for analysis and categorization.</p>
              </div>
            </div>
            <div className="bg-cards-header-grid p-6 rounded-md shadow-md flex flex-col justify-between h-48 cursor-pointer">
              <div className="flex flex-col justify-end h-full">
                  <h3 className="flex items-center text-md font-bold text-white space-x-2">
                    <Icons.externalink className="size-4" />
                    <span> Track Your Report</span>
                  </h3>
                <p className="text-sm mt-2 text-white">Monitor the status of your submitted SCVC reports and view detailed updates.</p>
              </div>
            </div>
            <div className="bg-cards-header-grid p-6 rounded-md shadow-md flex flex-col justify-between h-48 cursor-pointer">
              <div className="flex flex-col justify-end h-full">
                <h3 className="flex items-center text-md font-bold text-white space-x-2">
                  <Icons.externalink className="size-4" />
                  <span>Contact Security Team</span>
                </h3>
                <p className="text-sm mt-2 text-white">Reach out to our security experts for any queries or assistance related to SCVCs.</p>
              </div>
            </div>
            <div className="bg-cards-header-grid p-6 rounded-md shadow-md flex flex-col justify-between h-48 cursor-pointer">
              <div className="flex flex-col justify-end h-full">
                  <h3 className="flex items-center text-md font-bold text-white space-x-2">
                    <Icons.externalink className="size-4" />
                    <span>View Recent Vulnerabilities</span>
                  </h3>
                <p className="text-sm mt-2 text-white">Explore the latest smart contract vulnerabilities classified by our system.</p>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
