export type HeaderCard = {
  title: string
  description: string
  href: string
}

export const headerCardData: HeaderCard[] = [
  {
    title: "Report a New SCVC",
    description:
      "Submit a new Smart Contract Vulnerability Classification for analysis and categorization.",
    href: "/report-scvc",
  },
  {
    title: "Track Your Report",
    description:
      "Monitor the status of your submitted SCVC reports and view detailed updates.",
    href: "/track-report",
  },
  {
    title: "Contact Security Team",
    description:
      "Reach out to our security experts for any queries or assistance related to SCVCs.",
    href: "/contact-security",
  },
  {
    title: "View Recent Vulnerabilities",
    description:
      "Explore the latest smart contract vulnerabilities classified by our system.",
    href: "/recent-vulnerabilities",
  },
]
