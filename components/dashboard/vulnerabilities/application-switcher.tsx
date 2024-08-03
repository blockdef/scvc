"use client"

import * as React from "react"

import darklogo from "@/public/logo-dark.svg";
import logo from "@/public/logo.svg";

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Icons } from "@/components/icons";
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
      <span className={cn("ml-2 hidden", isCollapsed && "block")}><Icons.circle className="size-6" /></span>
      <p className={cn("ml-2", isCollapsed && "hidden")}>BLOCKDEF</p>
    </div>
  )
}
