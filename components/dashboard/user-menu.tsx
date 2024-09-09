import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full bg-gradient-to-r from-green-300 via-green-500 to-green-800"
        ></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Contribute</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="/#" className="w-full">
            Settings
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/#" className="w-full">
            Support
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a
            href={process.env.NEXT_PUBLIC_BLOCKDEF_SITE || "#"}
            className="w-full"
          >
            Go to BLOCKDEF
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
