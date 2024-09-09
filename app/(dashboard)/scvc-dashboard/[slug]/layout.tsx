import React from "react"

import Sidebar from "@/components/dashboard/sidebar-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 px-10">
        <div className="bg-background rounded-lg shadow-md p-6">{children}</div>
      </div>
    </div>
  )
}
