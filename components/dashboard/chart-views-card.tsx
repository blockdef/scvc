"use client"

import * as React from "react"
import { ArrowRightCircleIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import BadgeEffect from "@/components/dashboard/badge-effect"

import { InteractivePieChart } from "./charts/interactive-pie-chart"
import { LineChartLabel } from "./charts/line-chart-label"
import { RadarChartCircle } from "./charts/radar-chart-circle"

export default function ChartViewCard() {
  return (
    <div>
      <Card className="w-full lg:w-[40rem] lg:h-auto max-h-screen overflow-auto">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-lg font-semibold mt-2">
              Smart Contract Vulnerability Analytics
            </CardTitle>
            <BadgeEffect text="Live" />
          </div>
          <CardDescription className="text-sm text-muted-foreground mb-2">
            Visualize trends and patterns in smart contract vulnerabilities to
            enhance your understanding and improve security measures
          </CardDescription>
          <p className="text-sm italic text-muted-foreground">
            <ArrowRightCircleIcon className="inline size-4 ml-1 mr-1" />
            See more:{" "}
            <a
              href={process.env.NEXT_PUBLIC_BLOCKDEF_SITE ?? "/"}
              className="text-blue-500 hover:underline"
            >
              blockdef.dev
            </a>
          </p>
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
