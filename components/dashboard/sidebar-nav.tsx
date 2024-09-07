import {
  BugIcon,
  Code,
  HomeIcon,
  LayoutGridIcon,
  LineChartIcon,
  SettingsIcon,
} from "lucide-react"

import { TooltipProvider } from "@/components/ui/tooltip"
import SidebarLink from "@/components/dashboard/sidebar-link"

import { Separator } from "../ui/separator"

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <SidebarLink
            href={process.env.NEXT_PUBLIC_BLOCKDEF_SITE as string}
            icon={<BugIcon />}
            label="SCVC"
            primary
          />
          <Separator className="" />
          <SidebarLink href="#" icon={<HomeIcon />} label="Dashboard" active />
          <SidebarLink href="#" icon={<LayoutGridIcon />} label="Resources" />
          <SidebarLink href="#" icon={<Code />} label="Laboratory" />
          <SidebarLink href="#" icon={<LineChartIcon />} label="Analytics" />
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <SidebarLink href="#" icon={<SettingsIcon />} label="Settings" />
        </TooltipProvider>
      </nav>
    </aside>
  )
}
