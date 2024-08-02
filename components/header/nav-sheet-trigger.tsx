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
        <Button variant="outline" className="w-full font-bold bg-accent md:w-auto mx-[0.1rem] hover:bg-white hover:text-black">
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
            <div className="bg-[hsl(215.3,19.3%,34.5%)] p-6 rounded-md shadow-md hover:bg-cyan-700 flex flex-col justify-between h-48">
              <div className="flex flex-col justify-end h-full">
                <h3 className="text-md font-bold text-white">Report a New SCVC</h3>
                <p className="text-sm mt-2 text-white">Submit a new Smart Contract Vulnerability Classification for analysis and categorization.</p>
              </div>
            </div>
            <div className="bg-[hsl(215.3,19.3%,34.5%)] p-6 rounded-md shadow-md hover:bg-cyan-700 flex flex-col justify-between h-48">
              <div className="flex flex-col justify-end h-full">
                <h3 className="text-md font-bold text-white">Track Your Report</h3>
                <p className="text-sm mt-2 text-white">Monitor the status of your submitted SCVC reports and view detailed updates.</p>
              </div>
            </div>
            <div className="bg-[hsl(215.3,19.3%,34.5%)] p-6 rounded-md shadow-md hover:bg-cyan-700 flex flex-col justify-between h-48">
              <div className="flex flex-col justify-end h-full">
                <h3 className="text-md font-bold text-white">Contact Security Team</h3>
                <p className="text-sm mt-2 text-white">Reach out to our security experts for any queries or assistance related to SCVCs.</p>
              </div>
            </div>
            <div className="bg-[hsl(215.3,19.3%,34.5%)] p-6 rounded-md shadow-md hover:bg-cyan-700 flex flex-col justify-between h-48">
              <div className="flex flex-col justify-end h-full">
                <h3 className="text-md font-bold text-white">View Recent Vulnerabilities</h3>
                <p className="text-sm mt-2 text-white">Explore the latest smart contract vulnerabilities classified by our system.</p>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
