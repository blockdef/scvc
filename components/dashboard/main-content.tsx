"use client"

import * as React from "react"
import UtilityBar from "@/components/dashboard/utility-bar"
import CategoryBoard from "@/components/dashboard/category-board"
import ScvcBoard from "@/components/dashboard/scvc-board"
import ChartViewCard from "./chart-views-card"

export default function SmartContractVulnerabilities() {

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-2">
      <div className="p-4">
        <UtilityBar />
      </div>
      <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-4 p-4">
        <CategoryBoard />
        <ChartViewCard />
      </div>
    </main>
  )
}
