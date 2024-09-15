export type ButtonConfig = {
  variant:
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined
  className: string
  children: string
  link: string
}
