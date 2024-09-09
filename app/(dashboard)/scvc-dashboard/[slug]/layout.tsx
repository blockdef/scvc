import React from "react"
import Sidebar from "@/components/dashboard/sidebar-nav"
import Header from "@/components/dashboard/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 px-10">
        <div className="p-4">
          <Header />
        </div>
        <div className="bg-background rounded-lg shadow-md p-6">{children}</div>
      </div>
    </div>
  )
}
