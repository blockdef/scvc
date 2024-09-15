"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  additionalStyle?: boolean
}

export function ThemeToggle({ additionalStyle = false }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant={additionalStyle ? "link" : "link"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`w-full font-bold hover:bg-[#3333] md:w-auto mx-[0.1rem] dark:hover:bg-white hover:text-black ${
        additionalStyle ? "bg-accent" : ""
      } border-transparent`}
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
