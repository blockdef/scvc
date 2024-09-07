import Image from "next/image"
import { applications, scvcs } from "@/data/scvcs"
import Dashboard from "@/components/dashboard/dashboard"

export default function DashboardPage() {

  return (
    <>
      <div className=" flex-col md:flex">
        <Dashboard />
      </div>
    </>
  )
}
