"use client"

import * as React from "react"
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

import UtilityBar from "./utility-bar"

const vulnerabilities = [
  {
    title: "Reentrancy",
    description:
      "Occurs when external contract calls are allowed to make new calls to the calling contract before the first call is finished.",
    severity: "High",
    details:
      "Reentrancy attacks happen when a function makes an external call to another untrusted contract before it resolves any effects. If the attacker can control the untrusted contract, they can make a recursive call back to the original function, repeating interactions that shouldn't have been repeated.",
    prevention:
      "Use the checks-effects-interactions pattern or a reentrancy guard.",
    reference:
      "https://consensys.github.io/smart-contract-best-practices/attacks/reentrancy/",
    publisher: "ConsenSys",
  },
  {
    title: "Integer Overflow/Underflow",
    description:
      "Happens when an arithmetic operation reaches the maximum or minimum size of the integer type.",
    severity: "Medium",
    details:
      "In Solidity versions prior to 0.8.0, when an integer exceeds its maximum value, it wraps around to the minimum value. Similarly, when it goes below its minimum value, it wraps around to the maximum value. This can lead to unexpected behavior and vulnerabilities.",
    prevention:
      "Use SafeMath library for versions before Solidity 0.8.0, or upgrade to Solidity 0.8.0+ which has built-in overflow checking.",
    reference: "https://github.com/ethereum/EIPs/issues/1878",
    publisher: "Ethereum Foundation",
  },
  {
    title: "Unchecked External Calls",
    description:
      "When the return value of an external call is not checked, leading to unexpected behavior.",
    severity: "High",
    details:
      "External calls to unknown contracts can fail or be manipulated to fail. If these calls are not checked, the contract will continue execution as if the call succeeded, potentially leading to serious vulnerabilities.",
    prevention:
      "Always check the return value of external calls. Use require() statements to ensure the call was successful.",
    reference: "https://swcregistry.io/docs/SWC-104",
    publisher: "Smart Contract Weakness Classification",
  },
  {
    title: "Access Control",
    description:
      "Improper implementation of access controls, allowing unauthorized users to execute critical functions.",
    severity: "Critical",
    details:
      "Without proper access controls, any user can execute sensitive functions in the contract. This can lead to unauthorized actions, fund theft, or complete takeover of the contract.",
    prevention:
      "Implement robust access control mechanisms. Use modifiers to restrict function access to authorized roles.",
    reference: "https://docs.openzeppelin.com/contracts/4.x/access-control",
    publisher: "OpenZeppelin",
  },
  {
    title: "Front-Running",
    description:
      "When a malicious user observes a transaction and quickly submits their own with higher gas fees to be processed first.",
    severity: "Medium",
    details:
      "In blockchain networks, miners have the ability to see transactions before they're confirmed and can even control their order to some extent. This allows them to place their own transactions ahead of others, potentially profiting from this advanced knowledge.",
    prevention:
      "Implement commit-reveal schemes or use a private mempool for sensitive transactions.",
    reference: "https://ethereum.org/en/developers/docs/mev/",
    publisher: "Ethereum.org",
  },
  {
    title: "Integer Overflow/Underflow",
    description:
      "Happens when an arithmetic operation reaches the maximum or minimum size of the integer type.",
    severity: "Medium",
    details:
      "In Solidity versions prior to 0.8.0, when an integer exceeds its maximum value, it wraps around to the minimum value. Similarly, when it goes below its minimum value, it wraps around to the maximum value. This can lead to unexpected behavior and vulnerabilities.",
    prevention:
      "Use SafeMath library for versions before Solidity 0.8.0, or upgrade to Solidity 0.8.0+ which has built-in overflow checking.",
    reference: "https://github.com/ethereum/EIPs/issues/1878",
    publisher: "Ethereum Foundation",
  },
  {
    title: "Unchecked External Calls",
    description:
      "When the return value of an external call is not checked, leading to unexpected behavior.",
    severity: "High",
    details:
      "External calls to unknown contracts can fail or be manipulated to fail. If these calls are not checked, the contract will continue execution as if the call succeeded, potentially leading to serious vulnerabilities.",
    prevention:
      "Always check the return value of external calls. Use require() statements to ensure the call was successful.",
    reference: "https://swcregistry.io/docs/SWC-104",
    publisher: "Smart Contract Weakness Classification",
  },
  {
    title: "Access Control",
    description:
      "Improper implementation of access controls, allowing unauthorized users to execute critical functions.",
    severity: "Critical",
    details:
      "Without proper access controls, any user can execute sensitive functions in the contract. This can lead to unauthorized actions, fund theft, or complete takeover of the contract.",
    prevention:
      "Implement robust access control mechanisms. Use modifiers to restrict function access to authorized roles.",
    reference: "https://docs.openzeppelin.com/contracts/4.x/access-control",
    publisher: "OpenZeppelin",
  },
  {
    title: "Integer Overflow/Underflow",
    description:
      "Happens when an arithmetic operation reaches the maximum or minimum size of the integer type.",
    severity: "Medium",
    details:
      "In Solidity versions prior to 0.8.0, when an integer exceeds its maximum value, it wraps around to the minimum value. Similarly, when it goes below its minimum value, it wraps around to the maximum value. This can lead to unexpected behavior and vulnerabilities.",
    prevention:
      "Use SafeMath library for versions before Solidity 0.8.0, or upgrade to Solidity 0.8.0+ which has built-in overflow checking.",
    reference: "https://github.com/ethereum/EIPs/issues/1878",
    publisher: "Ethereum Foundation",
  },
  {
    title: "Unchecked External Calls",
    description:
      "When the return value of an external call is not checked, leading to unexpected behavior.",
    severity: "High",
    details:
      "External calls to unknown contracts can fail or be manipulated to fail. If these calls are not checked, the contract will continue execution as if the call succeeded, potentially leading to serious vulnerabilities.",
    prevention:
      "Always check the return value of external calls. Use require() statements to ensure the call was successful.",
    reference: "https://swcregistry.io/docs/SWC-104",
    publisher: "Smart Contract Weakness Classification",
  },
  {
    title: "Access Control",
    description:
      "Improper implementation of access controls, allowing unauthorized users to execute critical functions.",
    severity: "Critical",
    details:
      "Without proper access controls, any user can execute sensitive functions in the contract. This can lead to unauthorized actions, fund theft, or complete takeover of the contract.",
    prevention:
      "Implement robust access control mechanisms. Use modifiers to restrict function access to authorized roles.",
    reference: "https://docs.openzeppelin.com/contracts/4.x/access-control",
    publisher: "OpenZeppelin",
  },
]

export default function SmartContractVulnerabilities() {
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

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-2">
      <div className="p-4">
        <UtilityBar />
      </div>
      <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-4 p-4">
        <Card className="w-full lg:w-1/2 lg:h-full overflow-auto">
          <CardHeader>
            <CardTitle className="text-lg font-semibold mb-2">
              The Smart Contract Vulnerability Classification
            </CardTitle>
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
          <CardContent className="p-0">
            <ScrollArea className="h-[300px] lg:h-screen w-full rounded-md">
              <div className="space-y-4 p-4">
                {filteredVulnerabilities.map((vuln, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-colors ${
                      selectedVuln.title === vuln.title ? "border-primary" : ""
                    }`}
                    onClick={() => setSelectedVuln(vuln)}
                  >
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{vuln.title}</CardTitle>
                        <Badge
                          variant={
                            vuln.severity === "Critical"
                              ? "destructive"
                              : vuln.severity === "High"
                              ? "default"
                              : vuln.severity === "Medium"
                              ? "secondary"
                              : "outline"
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

        <Card className="w-full lg:w-full lg:h-auto overflow-auto">
          <CardHeader>
            <CardTitle className="text-2xl">{selectedVuln.title}</CardTitle>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold italic">Reference:</span>
                <a
                  href={selectedVuln.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline break-all italic"
                >
                  {selectedVuln.reference.length > 30
                    ? `${selectedVuln.reference.substring(0, 30)}...`
                    : selectedVuln.reference}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold italic">Publisher:</span>
                <span className="text-sm italic">{selectedVuln.publisher}</span>
              </div>
            </div>
            <Separator className="my-2" />
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="mb-4">{selectedVuln.description}</p>
            <h3 className="text-lg font-semibold mb-2">Details</h3>
            <p className="mb-4">{selectedVuln.details}</p>
            <h3 className="text-lg font-semibold mb-2">Prevention</h3>
            <p>{selectedVuln.prevention}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
