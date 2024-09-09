"use client"

import * as React from "react"
import { vulnerabilities } from "@/data/scvcs"
import { Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function CategoryBoard() {
  const [selectedVuln, setSelectedVuln] = React.useState(vulnerabilities[0])
  const [searchTerm, setSearchTerm] = React.useState("")

  const filteredVulnerabilities = vulnerabilities.filter(
    (vuln) =>
      vuln.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vuln.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vuln.severity.toLowerCase().includes(searchTerm.toLowerCase())
  )

  React.useEffect(() => {
    if (
      filteredVulnerabilities.length > 0 &&
      !filteredVulnerabilities.includes(selectedVuln)
    ) {
      setSelectedVuln(filteredVulnerabilities[0])
    }
  }, [searchTerm])

  const handleCardClick = (vuln: Vulnerability) => {
    setSelectedVuln(vuln)
    window.open(`scvc-dashboard/${vuln.slug}`, "_blank")
  }

  return (
    <div>
      <Card className="w-full lg:w-2xl max-w-2xl lg:h-auto max-h-screen overflow-auto">
        <CardHeader>
          <CardTitle className="text-lg font-semibold mb-2">
            SCVCs ({vulnerabilities.length})
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground mb-2">
            Explore the Smart Contract Vulnerability Classification (SCVC)
            system to identify, analyze, and mitigate potential security risks
            in blockchain-based applications.
          </CardDescription>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search a vulnerability..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0 border-t">
          <ScrollArea className="h-[300px] lg:h-auto w-full rounded-md">
            <div className="space-y-4 p-4">
              {filteredVulnerabilities.map((vuln, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-colors ${
                    selectedVuln.title === vuln.title ? "border-primary" : ""
                  }`}
                  onClick={() => handleCardClick(vuln)}
                >
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{vuln.title}</CardTitle>
                      <Badge
                        className={
                          vuln.severity === "Critical"
                            ? "bg-destructive text-destructive-foreground"
                            : vuln.severity === "High"
                            ? "bg-orange-500 text-white"
                            : vuln.severity === "Medium"
                            ? "bg-purple-500 text-white"
                            : vuln.severity === "Low"
                            ? "bg-blue-500 text-white"
                            : "bg-black text-white"
                        }
                      >
                        {vuln.severity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription>{vuln.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
