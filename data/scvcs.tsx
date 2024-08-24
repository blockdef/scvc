export const scvcs = [
  {
    id: "a3b1c25d-4f56-45d8-a0f1-c5a3e9d80b21",
    name: "SCVC-01",
    email: "Integer Overflow",
    subject: "Smart Contract Vulnerability - 01",
    text: "Some relevant information about Integer Overflow vulnerability in Solidity. Integer Overflow occurs when an arithmetic operation exceeds the maximum value that can be stored in a variable, potentially leading to unexpected behavior and security issues.",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["solidity", "overflow", "important"],
  },
  {
    id: "b2e6f84a-ec41-49e2-bf8b-5fdbe251c7f4",
    name: "SCVC-02",
    email: "Reentrancy Attack",
    subject: "Smart Contract Vulnerability - 02",
    text: "Details regarding Reentrancy Attack, a common vulnerability where an attacker repeatedly calls a function before the first invocation is completed, leading to potential exploits such as draining funds from a contract.",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["solidity", "reentrancy", "important"],
  },
  {
    id: "c8d12e89-490b-4d4e-bb59-90d1a4a1ef09",
    name: "SCVC-03",
    email: "Uninitialized Storage Pointer",
    subject: "Smart Contract Vulnerability - 03",
    text: "Information on Uninitialized Storage Pointer vulnerability, which occurs when a storage pointer is used before being initialized, leading to unintended access to other storage variables or potential security breaches.",
    date: "2023-04-10T11:45:00",
    read: true,
    labels: ["solidity", "storage", "important"],
  },
  {
    id: "d1e0e21d-bb16-4b98-8c02-7d5f50a2b901",
    name: "SCVC-04",
    email: "Unchecked External Call",
    subject: "Smart Contract Vulnerability - 04",
    text: "Details on Unchecked External Call vulnerability, where external calls to other contracts are made without proper validation of the return value, leading to potential exploits or contract malfunctions.",
    date: "2023-03-25T13:15:00",
    read: false,
    labels: ["solidity", "external", "important"],
  },
  {
    id: "e9f8a7b3-194f-4f56-a7a2-c71f31d4c43b",
    name: "SCVC-05",
    email: "Denial of Service",
    subject: "Smart Contract Vulnerability - 05",
    text: "Information on Denial of Service attacks in smart contracts, where an attacker can prevent legitimate users from accessing or using the contract by exploiting various vulnerabilities.",
    date: "2023-03-10T15:00:00",
    read: false,
    labels: ["solidity", "dos", "important"],
  },
  {
    id: "f3d3b1a4-cf4e-4b21-b8d2-c45aefc1a378",
    name: "SCVC-06",
    email: "Arithmetic Error",
    subject: "Smart Contract Vulnerability - 06",
    text: "Details about Arithmetic Errors, which occur when arithmetic operations in a smart contract result in incorrect calculations, often due to integer overflows or underflows.",
    date: "2023-02-15T16:30:00",
    read: true,
    labels: ["solidity", "arithmetic", "important"],
  },
  {
    id: "g2e4c5a3-0e4d-4e3b-aac5-2a3bdef754f4",
    name: "SCVC-07",
    email: "Timestamp Dependency",
    subject: "Smart Contract Vulnerability - 07",
    text: "Information on Timestamp Dependency vulnerability, where smart contract behavior depends on the block timestamp, which can be manipulated by miners leading to unpredictable outcomes.",
    date: "2023-01-28T17:45:00",
    read: false,
    labels: ["solidity", "timestamp", "important"],
  },
  {
    id: "h3d5b4f2-c9a8-4a45-b6f7-9e4c123d7d60",
    name: "SCVC-08",
    email: "Default Visibility",
    subject: "Smart Contract Vulnerability - 08",
    text: "Details on Default Visibility vulnerabilities, where functions or state variables are inadvertently left with default visibility, exposing them to unintended access or modification.",
    date: "2022-12-20T18:30:00",
    read: true,
    labels: ["solidity", "visibility", "important"],
  },
  {
    id: "i4d2e5a9-8b47-45ea-81e6-7b1f0b4a3a8c",
    name: "SCVC-09",
    email: "Delegatecall Injection",
    subject: "Smart Contract Vulnerability - 09",
    text: "Information about Delegatecall Injection vulnerabilities, where an attacker can manipulate the delegatecall to execute malicious code or exploit the contract.",
    date: "2022-11-30T19:15:00",
    read: true,
    labels: ["solidity", "delegatecall", "important"],
  },
  {
    id: "j8e6f4c9-927f-4b92-94d8-5c8e2a5b1c7b",
    name: "SCVC-10",
    email: "Unrestricted Access",
    subject: "Smart Contract Vulnerability - 10",
    text: "Details on Unrestricted Access vulnerabilities, where certain functions or state variables are accessible without proper access controls, allowing unauthorized users to interact with the contract.",
    date: "2022-11-05T20:30:00",
    read: false,
    labels: ["solidity", "access", "important"],
  },
  {
    id: "k5d8e7c1-f73b-4b1e-b7f6-3f4b9e20f7a4",
    name: "SCVC-11",
    email: "DoS with (Unexpected) Revert",
    subject: "Smart Contract Vulnerability - 11",
    text: "Information on DoS (Denial of Service) attacks caused by unexpected revert statements in smart contracts, which can prevent legitimate transactions from being processed.",
    date: "2022-10-22T09:30:00",
    read: false,
    labels: ["solidity", "dos", "important"],
  },
  {
    id: "l6e8f4b1-3d2f-42a3-94c9-6d8b5f2c8a3e",
    name: "SCVC-12",
    email: "Self-Destruct",
    subject: "Smart Contract Vulnerability - 12",
    text: "Details on Self-Destruct vulnerability, where a smart contract can be destroyed or rendered non-functional using the selfdestruct function, potentially leading to loss of contract data and functionality.",
    date: "2022-10-10T10:45:00",
    read: true,
    labels: ["solidity", "selfdestruct", "important"],
  },
  {
    id: "m7e9d2f4-64a6-4b4e-ae1e-b6a4c5d3a6f7",
    name: "SCVC-13",
    email: "Front Running",
    subject: "Smart Contract Vulnerability - 13",
    text: "Information about Front Running attacks, where an attacker can exploit transaction ordering to gain an advantage, such as gaining priority on transaction execution.",
    date: "2022-09-20T12:00:00",
    read: false,
    labels: ["solidity", "front-running", "important"],
  },
  {
    id: "n8d7f3c5-15c4-4c1a-8e3b-d7b2e4f9c3a1",
    name: "SCVC-14",
    email: "Unvalidated Contract Interaction",
    subject: "Smart Contract Vulnerability - 14",
    text: "Details on Unvalidated Contract Interaction vulnerabilities, where interactions with other contracts are performed without proper validation, leading to potential exploits or unexpected behavior.",
    date: "2022-09-10T13:15:00",
    read: true,
    labels: ["solidity", "interaction", "important"],
  },
  {
    id: "o9e6f4b2-9e5b-47f3-83a5-1d8b7f9c2c6a",
    name: "SCVC-15",
    email: "Gas Limit and Loops",
    subject: "Smart Contract Vulnerability - 15",
    text: "Information about Gas Limit and Loops issues,     where excessive gas consumption in loops can lead to failures in contract execution or unintended behavior.",
    date: "2022-08-25T15:30:00",
    read: false,
    labels: ["solidity", "gas", "important"],
  },
  {
    id: "p0d1e2f3-4b6c-4f7d-bf1b-a5c8d2e4f9a0",
    name: "SCVC-16",
    email: "Contract Inheritance",
    subject: "Smart Contract Vulnerability - 16",
    text: "Details on Contract Inheritance vulnerabilities, where issues in contract inheritance can lead to unexpected behavior or security risks due to improper usage of inherited functions and state.",
    date: "2022-08-10T16:00:00",
    read: true,
    labels: ["solidity", "inheritance", "important"],
  },
  {
    id: "q1e2d3f4-6a7b-4c8e-9d10-2e3f4a5b6c78",
    name: "SCVC-17",
    email: "Integer Underflow",
    subject: "Smart Contract Vulnerability - 17",
    text: "Information about Integer Underflow vulnerabilities, where arithmetic operations result in a value below the minimum value that can be represented, potentially leading to unexpected contract behavior.",
    date: "2022-07-30T17:45:00",
    read: false,
    labels: ["solidity", "underflow", "important"],
  },
  {
    id: "r1a2b3c4-5d6e-7f8g-9h10-i2j3k4l5m6n7",
    name: "SCVC-18",
    email: "Integer Overflow",
    subject: "Smart Contract Vulnerability - 01",
    text: "Some relevant information about Integer Overflow vulnerability in Solidity. Integer Overflow occurs when an arithmetic operation exceeds the maximum value that can be stored in a variable, potentially leading to unexpected behavior and security issues.",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["solidity", "overflow", "important"],
  },
  {
    id: "s2b3c4d5-6e7f-8g9h-1i2j-3k4l5m6n7o8p",
    name: "SCVC-19",
    email: "Reentrancy Attack",
    subject: "Smart Contract Vulnerability - 02",
    text: "Details regarding Reentrancy Attack, a common vulnerability where an attacker repeatedly calls a function before the first invocation is completed, leading to potential exploits such as draining funds from a contract.",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["solidity", "reentrancy", "important"],
  },
  {
    id: "t3c4d5e6-7f8g-9h10-i2j-3k4l5m6n7o8q",
    name: "SCVC-20",
    email: "Uninitialized Storage Pointer",
    subject: "Smart Contract Vulnerability - 03",
    text: "Information on Uninitialized Storage Pointer vulnerability, which occurs when a storage pointer is used before being initialized, leading to unintended access to other storage variables or potential security breaches.",
    date: "2023-04-10T11:45:00",
    read: true,
    labels: ["solidity", "storage", "important"],
  },
  {
    id: "u4d5e6f7-8g9h-10i2-j3k4-l5m6n7o8p9q0",
    name: "SCVC-21",
    email: "Unchecked External Call",
    subject: "Smart Contract Vulnerability - 04",
    text: "Details on Unchecked External Call vulnerability, where external calls to other contracts are made without proper validation of the return value, leading to potential exploits or contract malfunctions.",
    date: "2023-03-25T13:15:00",
    read: false,
    labels: ["solidity", "external", "important"],
  },
  {
    id: "v5e6f7g8-9h10-i2j3-k4l5-m6n7o8p9q0r1",
    name: "SCVC-22",
    email: "Denial of Service",
    subject: "Smart Contract Vulnerability - 05",
    text: "Information on Denial of Service attacks in smart contracts, where an attacker can prevent legitimate users from accessing or using the contract by exploiting various vulnerabilities.",
    date: "2023-03-10T15:00:00",
    read: false,
    labels: ["solidity", "dos", "important"],
  },
  {
    id: "w6f7g8h9-10i2-j3k4-l5m6-n7o8p9q0r1s2",
    name: "SCVC-23",
    email: "Arithmetic Error",
    subject: "Smart Contract Vulnerability - 06",
    text: "Details about Arithmetic Errors, which occur when arithmetic operations in a smart contract result in incorrect calculations, often due to integer overflows or underflows.",
    date: "2023-02-15T16:30:00",
    read: true,
    labels: ["solidity", "arithmetic", "important"],
  },
  {
    id: "x7g8h9i0-1j2k-3l4m-n5o6-p7q8r9s0t1u2",
    name: "SCVC-24",
    email: "Timestamp Dependency",
    subject: "Smart Contract Vulnerability - 07",
    text: "Information on Timestamp Dependency vulnerability, where smart contract behavior depends on the block timestamp, which can be manipulated by miners leading to unpredictable outcomes.",
    date: "2023-01-28T17:45:00",
    read: false,
    labels: ["solidity", "timestamp", "important"],
  },
  {
    id: "y8h9i0j1-2k3l-4m5n-o6p7-q8r9s0t1u2v3",
    name: "SCVC-25",
    email: "Default Visibility",
    subject: "Smart Contract Vulnerability - 08",
    text: "Details on Default Visibility vulnerabilities, where functions or state variables are inadvertently left with default visibility, exposing them to unintended access or modification.",
    date: "2022-12-20T18:30:00",
    read: true,
    labels: ["solidity", "visibility", "important"],
  },
  {
    id: "z9i0j1k2-3l4m-5n6o-p7q8-r9s0t1u2v3w4",
    name: "SCVC-26",
    email: "Delegatecall Injection",
    subject: "Smart Contract Vulnerability - 09",
    text: "Information about Delegatecall Injection vulnerabilities, where an attacker can manipulate the delegatecall to execute malicious code or exploit the contract.",
    date: "2022-11-30T19:15:00",
    read: true,
    labels: ["solidity", "delegatecall", "important"],
  },
  {
    id: "a0j1k2l3-4m5n-6o7p-q8r9-s0t1u2v3w4x",
    name: "SCVC-27",
    email: "Unrestricted Access",
    subject: "Smart Contract Vulnerability - 10",
    text: "Details on Unrestricted Access vulnerabilities, where certain functions or state variables are accessible without proper access controls, allowing unauthorized users to interact with the contract.",
    date: "2022-11-05T20:30:00",
    read: false,
    labels: ["solidity", "access", "important"],
  },
  {
    id: "b1k2l3m4-5n6o-7p8q-r9s0-t1u2v3w4x5y6",
    name: "SCVC-28",
    email: "DoS with (Unexpected) Revert",
    subject: "Smart Contract Vulnerability - 11",
    text: "Information on DoS (Denial of Service) attacks caused by unexpected revert statements in smart contracts, which can prevent legitimate transactions from being processed.",
    date: "2022-10-22T09:30:00",
    read: false,
    labels: ["solidity", "dos", "important"],
  },
  {
    id: "c2l3m4n5-6o7p-8q9r-s0t1-u2v3w4x5y6z",
    name: "SCVC-29",
    email: "Self-Destruct",
    subject: "Smart Contract Vulnerability - 12",
    text: "Details on Self-Destruct vulnerability, where a smart contract can be destroyed or rendered non-functional using the selfdestruct function, potentially leading to loss of contract data and functionality.",
    date: "2022-10-10T10:45:00",
    read: true,
    labels: ["solidity", "selfdestruct", "important"],
  },
  {
    id: "d3m4n5o6-7p8q-9r0s-t1u2-v3w4x5y6z7a",
    name: "SCVC-30",
    email: "Front Running",
    subject: "Smart Contract Vulnerability - 13",
    text: "Information about Front Running attacks, where an attacker can exploit transaction ordering to gain an advantage, such as gaining priority on transaction execution.",
    date: "2022-09-20T12:00:00",
    read: false,
    labels: ["solidity", "front-running", "important"],
  },
]

export type SCVCS = (typeof scvcs)[number]

export const applications = [
  {
    label: "BLOCKDEF",
    url: "https://blockdef.dev",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>BLOCKDEF</title>
        <path d="M12 2L2 7v11l10 5 10-5V7L12 2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Documentation",
    url: "https://blockdef.mintlify.app/introduction",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Documentation</title>
        <path
          d="M21 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM7 3h14v18H7V3zm2 2h10v2H9V5zm0 4h10v2H9V9zm0 4h10v2H9v-2zm0 4h10v2H9v-2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Kratos",
    url: "https://kratos-sentinel.vercel.app",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Kratos</title>
        <path d="M12 2L2 7v11l10 5 10-5V7L12 2z" fill="currentColor" />
      </svg>
    ),
  },
]

export type Account = (typeof applications)[number]

export const contacts = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
  },
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
  },
  {
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
  },
  {
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
  },
  {
    name: "Lucas Brown",
    email: "lucas.brown@example.com",
  },
  {
    name: "Sophia Smith",
    email: "sophia.smith@example.com",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
  },
  {
    name: "Isabella Jackson",
    email: "isabella.jackson@example.com",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@example.com",
  },
  {
    name: "Mason Lee",
    email: "mason.lee@example.com",
  },
  {
    name: "Layla Harris",
    email: "layla.harris@example.com",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
  },
  {
    name: "Ella White",
    email: "ella.white@example.com",
  },
  {
    name: "James Thomas",
    email: "james.thomas@example.com",
  },
  {
    name: "Harper Lewis",
    email: "harper.lewis@example.com",
  },
  {
    name: "Benjamin Moore",
    email: "benjamin.moore@example.com",
  },
  {
    name: "Aria Hall",
    email: "aria.hall@example.com",
  },
  {
    name: "Henry Turner",
    email: "henry.turner@example.com",
  },
  {
    name: "Scarlett Adams",
    email: "scarlett.adams@example.com",
  },
]

export type Contact = (typeof contacts)[number]
