import { ButtonConfig } from "@/types/button"

export const headerButtonsData: ButtonConfig[] = [
  {
    variant: "outline",
    className:
      "w-full font-bold bg-accent border-transparent hover:bg-[#3333] md:w-auto mx-[0.1rem] dark:hover:bg-white hover:text-black ",
    children: "About",
    link: `${process.env.NEXT_PUBLIC_DOCUMENTATION}/introduction`,
  },
  {
    variant: "outline",
    className:
      "w-full font-bold bg-accent border-transparent hover:bg-[#3333] md:w-auto mx-[0.1rem] dark:hover:bg-white hover:text-black",
    children: "Support",
    link: `${process.env.NEXT_PUBLIC_DOCUMENTATION}/support`,
  },
]
