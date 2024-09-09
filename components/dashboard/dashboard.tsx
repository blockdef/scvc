import Header from "@/components/dashboard/header"
import SmartContractVulnerabilities from "@/components/dashboard/main-content"
import Sidebar from "@/components/dashboard/sidebar-nav"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <SmartContractVulnerabilities />
      </div>
    </div>
  )
}
