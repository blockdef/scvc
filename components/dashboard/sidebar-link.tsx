import Link from "next/link"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import React from "react"

interface SidebarLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  primary?: boolean
  active?: boolean
}

export default function SidebarLink({ href, icon, label, primary, active }: SidebarLinkProps) {
  const baseClasses = "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
  const activeClasses = active ? "bg-accent text-accent-foreground hover:text-foreground" : "text-muted-foreground hover:text-foreground"
  const primaryClasses = primary ? "rounded-full bg-primary text-lg font-semibold text-primary-foreground group" : activeClasses

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`${baseClasses} ${primaryClasses}`}
          prefetch={false}
        >
          {React.cloneElement(icon as React.ReactElement, {
            className: `h-5 w-5 ${primary ? 'transition-all group-hover:scale-110' : ''}`
          })}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}
