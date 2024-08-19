"use client"

import * as React from "react"

import darklogo from "@/public/logo-dark.svg";
import logo from "@/public/logo.svg";

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
interface ApplicationSwitcherProps {
  isCollapsed: boolean
  applications: {
    label: string
    url: string
    icon: React.ReactNode
  }[]
}

export function ApplicationSwitcher({
  isCollapsed,
}: ApplicationSwitcherProps) {

  return (
      <div className="w-full font-bold text-xl py-2 ml-2">
        <Image src={logo} alt="logo" className={cn("ml-2 hidden", isCollapsed && "block h-20 w-20 max-w-[200%]")} />
        <div className={cn("flex items-center justify-between ml-0", isCollapsed && "hidden")}>
          <p className="text-white">SCVC</p>
          <span className="flex items-center">
            <Icons.externalink className="size-5 mt-1 ml-2" />
          </span>
        </div>
      </div>
  )
}
