"use client"

import * as React from "react"
import { Search } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { InteractivePieChart } from "./charts/interactive-pie-chart"
import { LineChartLabel } from "./charts/line-chart-label"
import { RadarChartCircle } from "./charts/radar-chart-circle"

export default function ChartViewCard() {
  return (
    <div>
      <Card className="w-full lg:w-[40rem] lg:h-auto max-h-screen overflow-auto">
        <CardHeader>
          <CardTitle className="text-lg font-semibold mb-2">
            Smart Contract Vulnerability Analytics
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground mb-2">
            Visualize trends and patterns in smart contract vulnerabilities to
            enhance your understanding and improve security measures.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <InteractivePieChart />
          <RadarChartCircle />
          <LineChartLabel />
        </CardContent>
      </Card>
    </div>
  )
}
