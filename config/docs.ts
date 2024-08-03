import { MainNavItem, SidebarNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Vulnerabilities",
      href: "/vulnerabilities",
    },
    {
      title: "Guides",
      href: "/guides",
    },
    {
      title: "Tools",
      href: "/tools",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "FAQs",
      href: "/faqs",
    },
  ],
  sidebarNav: [
    {
      title: "Overview",
      items: [
        {
          title: "Introduction",
          href: "/home",
          items: [],
        },
        {
          title: "Smart Contract Basics",
          href: "/home/smart-contract-basics",
          items: [],
        },
        {
          title: "Security Principles",
          href: "/home/security-principles",
          items: [],
        },
      ],
    },
    {
      title: "Vulnerabilities",
      items: [
        {
          title: "Reentrancy",
          href: "/vulnerabilities/reentrancy",
          items: [],
        },
        {
          title: "Integer Overflow/Underflow",
          href: "/vulnerabilities/integer-overflow-underflow",
          items: [],
        },
        {
          title: "Unchecked Call Return Value",
          href: "/vulnerabilities/unchecked-call-return-value",
          items: [],
        },
        {
          title: "Denial of Service",
          href: "/vulnerabilities/denial-of-service",
          items: [],
        },
        {
          title: "Front-Running",
          href: "/vulnerabilities/front-running",
          items: [],
        },
        {
          title: "Timestamp Dependence",
          href: "/vulnerabilities/timestamp-dependence",
          items: [],
        },
        {
          title: "Delegatecall Injection",
          href: "/vulnerabilities/delegatecall-injection",
          items: [],
        },
        {
          title: "Access Control",
          href: "/vulnerabilities/access-control",
          items: [],
        },
        {
          title: "Other Vulnerabilities",
          href: "/vulnerabilities/other",
          items: [],
        },
      ],
    },
    {
      title: "Guides",
      items: [
        {
          title: "Writing Secure Contracts",
          href: "/guides/writing-secure-contracts",
          items: [],
        },
        {
          title: "Testing and Auditing",
          href: "/guides/testing-and-auditing",
          items: [],
        },
        {
          title: "Best Practices",
          href: "/guides/best-practices",
          items: [],
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          title: "Static Analysis Tools",
          href: "/tools/static-analysis",
          items: [],
        },
        {
          title: "Dynamic Analysis Tools",
          href: "/tools/dynamic-analysis",
          items: [],
        },
        {
          title: "Fuzz Testing Tools",
          href: "/tools/fuzz-testing",
          items: [],
        },
        {
          title: "Formal Verification Tools",
          href: "/tools/formal-verification",
          items: [],
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          title: "Whitepapers",
          href: "/resources/whitepapers",
          items: [],
        },
        {
          title: "Case Studies",
          href: "/resources/case-studies",
          items: [],
        },
        {
          title: "External References",
          href: "/resources/external-references",
          items: [],
        },
      ],
    },
  ],
}
