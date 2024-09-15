import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"

interface NavSheetTriggerProps {
  name: string
  title: string
  description: string
  showIcon: boolean
  href: string
}

export function MainButtons({
  name,
  showIcon = true,
  href,
}: NavSheetTriggerProps) {
  return (
    <Link href={href} target="_blank" referrerPolicy="no-referrer">
      <Button
        variant="outline"
        className="w-full font-bold bg-accent border-transparent hover:bg-[#3333] md:w-auto mx-[0.1rem]  dark:hover:bg-white hover:text-black"
      >
        {showIcon && <Icons.arrowpluscircle className="size-3 mr-1" />}
        {name}
      </Button>
    </Link>
  )
}
