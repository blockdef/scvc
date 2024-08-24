"use client"

import * as React from "react"
import { type SCVCS } from "@/data/scvcs"
import {
  Bug,
  Code,
  Contact,
  Hammer,
  HelpCircle,
  PencilIcon,
  Search,
  Settings,
  TrainIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useVulnerability } from "@/hooks/use-vulnerability"
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Nav } from "@/components/dashboard/nav/dashboard-navbar"
import { ApplicationSwitcher } from "@/components/dashboard/vulnerabilities/application-switcher"
import { VulnerabilityList } from "@/components/dashboard/vulnerabilities/vulnerability-list"
import { VulnerabilityDisplay } from "@/components/dashboard/vulnerabilities/vulnerabilty-display"

interface VulnerabilityProps {
  applications: {
    label: string
    url: string
    icon: React.ReactNode
  }[]
  scvcs: SCVCS[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Vulnerability({
  applications,
  scvcs,
  defaultLayout = [15, 30, 48],
  defaultCollapsed = false,
  navCollapsedSize,
}: VulnerabilityProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [scvc] = useVulnerability()

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`
        }}
        className="max-h-[1200px] overflow-scroll items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div className="flex flex-col h-full">
            {/* Top Nav Section */}
            <div className="flex-none">
              <div
                className={cn(
                  "flex h-[52px] items-center justify-center",
                  isCollapsed ? "h-[52px]" : "px-2"
                )}
              >
                <ApplicationSwitcher
                  isCollapsed={isCollapsed}
                  applications={applications}
                />
              </div>
              <Separator className="mt-1" />
              <Nav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: "Vulnerabilities",
                    label: "128",
                    icon: Code,
                    variant: "default",
                  },
                  {
                    title: "Tutorials",
                    label: "",
                    icon: PencilIcon,
                    variant: "ghost",
                  },
                  {
                    title: "Bug Bounties",
                    label: "",
                    icon: Bug,
                    variant: "ghost",
                  },
                  {
                    title: "Courses",
                    label: "",
                    icon: TrainIcon,
                    variant: "ghost",
                  },
                  {
                    title: "Tools",
                    label: "",
                    icon: Hammer,
                    variant: "ghost",
                  },
                ]}
              />
            </div>
            {/* Spacer */}
            <div className="flex-1"></div>{" "}
            {/* This will push the bottom nav to the bottom */}
            {/* Bottom Nav Section */}
            <div className="flex-none">
              <Nav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: "Contribute",
                    label: "",
                    icon: HelpCircle,
                    variant: "ghost",
                  },
                  {
                    title: "Contact",
                    label: "",
                    icon: Contact,
                    variant: "ghost",
                  },
                  {
                    title: "Settings",
                    label: "",
                    icon: Settings,
                    variant: "ghost",
                  },
                ]}
              />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={30}
          className="h-screen overflow-scroll items-stretch"
        >
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold"></h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Full List
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  New
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent
              value="all"
              className="h-[80vh] overflow-scroll items-stretch"
            >
              <VulnerabilityList items={scvcs} />
            </TabsContent>
            <TabsContent
              value="unread"
              className="h-[80vh] overflow-scroll items-stretch"
            >
              <VulnerabilityList items={scvcs.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <VulnerabilityDisplay
            scvc={scvcs.find((item) => item.id === scvc.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
