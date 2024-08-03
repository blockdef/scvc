export type ButtonConfig = {
  variant: "link" | "outline" | "default" | "destructive" | "secondary" | "ghost" | null | undefined; // You can add other variants as needed
  className: string;
  children: string;
};