export const scvcs = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "SCVC-01",
    email: "Integer Overflow",
    subject: "Smart Contract Vulnerability - 01",
    text: "Some relevant information about Integer Overflow vulnerability in Solidity. Integer Overflow occurs when an arithmetic operation exceeds the maximum value that can be stored in a variable, potentially leading to unexpected behavior and security issues.",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["solidity", "overflow", "important"],
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "SCVC-02",
    email: "Reentrancy Attack",
    subject: "Smart Contract Vulnerability - 02",
    text: "Details regarding Reentrancy Attack, a common vulnerability where an attacker repeatedly calls a function before the first invocation is completed, leading to potential exploits such as draining funds from a contract.",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["solidity", "reentrancy", "important"],
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    name: "SCVC-03",
    email: "Uninitialized Storage Pointer",
    subject: "Smart Contract Vulnerability - 03",
    text: "Information on Uninitialized Storage Pointer vulnerability, which occurs when a storage pointer is used before being initialized, leading to unintended access to other storage variables or potential security breaches.",
    date: "2023-04-10T11:45:00",
    read: true,
    labels: ["solidity", "storage", "important"],
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    name: "SCVC-04",
    email: "Unchecked External Call",
    subject: "Smart Contract Vulnerability - 04",
    text: "Details on Unchecked External Call vulnerability, where external calls to other contracts are made without proper validation of the return value, leading to potential exploits or contract malfunctions.",
    date: "2023-03-25T13:15:00",
    read: false,
    labels: ["solidity", "external", "important"],
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    name: "SCVC-05",
    email: "Denial of Service",
    subject: "Smart Contract Vulnerability - 05",
    text: "Information on Denial of Service attacks in smart contracts, where an attacker can prevent legitimate users from accessing or using the contract by exploiting various vulnerabilities.",
    date: "2023-03-10T15:00:00",
    read: false,
    labels: ["solidity", "dos", "important"],
  },
  {
    id: "1f0f2c02-e299-40de-9b1d-86ef9e42126b",
    name: "SCVC-06",
    email: "Arithmetic Error",
    subject: "Smart Contract Vulnerability - 06",
    text: "Details about Arithmetic Errors, which occur when arithmetic operations in a smart contract result in incorrect calculations, often due to integer overflows or underflows.",
    date: "2023-02-15T16:30:00",
    read: true,
    labels: ["solidity", "arithmetic", "important"],
  },
  {
    id: "17c0a96d-4415-42b1-8b4f-764efab57f66",
    name: "SCVC-07",
    email: "Timestamp Dependency",
    subject: "Smart Contract Vulnerability - 07",
    text: "Information on Timestamp Dependency vulnerability, where smart contract behavior depends on the block timestamp, which can be manipulated by miners leading to unpredictable outcomes.",
    date: "2023-01-28T17:45:00",
    read: false,
    labels: ["solidity", "timestamp", "important"],
  },
  {
    id: "2f0130cb-39fc-44c4-bb3c-0a4337edaaab",
    name: "SCVC-08",
    email: "Default Visibility",
    subject: "Smart Contract Vulnerability - 08",
    text: "Details on Default Visibility vulnerabilities, where functions or state variables are inadvertently left with default visibility, exposing them to unintended access or modification.",
    date: "2022-12-20T18:30:00",
    read: true,
    labels: ["solidity", "visibility", "important"],
  },
  {
    id: "de305d54-75b4-431b-adb2-eb6b9e546014",
    name: "SCVC-09",
    email: "Delegatecall Injection",
    subject: "Smart Contract Vulnerability - 09",
    text: "Information about Delegatecall Injection vulnerabilities, where an attacker can manipulate the delegatecall to execute malicious code or exploit the contract.",
    date: "2022-11-30T19:15:00",
    read: true,
    labels: ["solidity", "delegatecall", "important"],
  },
  {
    id: "7dd90c63-00f6-40f3-bd87-5060a24e8ee7",
    name: "SCVC-10",
    email: "Unrestricted Access",
    subject: "Smart Contract Vulnerability - 10",
    text: "Details on Unrestricted Access vulnerabilities, where certain functions or state variables are accessible without proper access controls, allowing unauthorized users to interact with the contract.",
    date: "2022-11-05T20:30:00",
    read: false,
    labels: ["solidity", "access", "important"],
  },
  {
    id: "99a88f78-3eb4-4d87-87b7-7b15a49a0a05",
    name: "SCVC-11",
    email: "DoS with (Unexpected) Revert",
    subject: "Smart Contract Vulnerability - 11",
    text: "Information on DoS (Denial of Service) attacks caused by unexpected revert statements in smart contracts, which can prevent legitimate transactions from being processed.",
    date: "2022-10-22T09:30:00",
    read: false,
    labels: ["solidity", "dos", "important"],
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "SCVC-12",
    email: "Self-Destruct",
    subject: "Smart Contract Vulnerability - 12",
    text: "Details on Self-Destruct vulnerability, where a smart contract can be destroyed or rendered non-functional using the selfdestruct function, potentially leading to loss of contract data and functionality.",
    date: "2022-10-10T10:45:00",
    read: true,
    labels: ["solidity", "selfdestruct", "important"],
  },
  {
    id: "c1a0ecb4-2540-49c5-86f8-21e5ce79e4e6",
    name: "SCVC-13",
    email: "Front Running",
    subject: "Smart Contract Vulnerability - 13",
    text: "Information about Front Running attacks, where an attacker can exploit transaction ordering to gain an advantage, such as gaining priority on transaction execution.",
    date: "2022-09-20T12:00:00",
    read: false,
    labels: ["solidity", "front-running", "important"],
  },
  {
    id: "ba54eefd-4097-4949-99f2-2a9ae4d1a836",
    name: "SCVC-14",
    email: "Unvalidated Contract Interaction",
    subject: "Smart Contract Vulnerability - 14",
    text: "Details on Unvalidated Contract Interaction vulnerabilities, where interactions with other contracts are performed without proper validation, leading to potential exploits or unexpected behavior.",
    date: "2022-09-10T13:15:00",
    read: true,
    labels: ["solidity", "interaction", "important"],
  },
  {
    id: "df09b6ed-28bd-4e0c-85a9-9320ec5179aa",
    name: "SCVC-15",
    email: "Gas Limit and Loops",
    subject: "Smart Contract Vulnerability - 15",
    text: "Information about Gas Limit and Loops issues, where excessive gas consumption in loops can lead to failures in contract execution or unintended behavior.",
    date: "2022-08-25T15:30:00",
    read: false,
    labels: ["solidity", "gas", "important"],
  },
  {
    id: "c3deee4d-085a-4fa8-8477-cf9238c70d94",
    name: "SCVC-16",
    email: "Contract Inheritance",
    subject: "Smart Contract Vulnerability - 16",
    text: "Details on Contract Inheritance vulnerabilities, where issues in contract inheritance can lead to unexpected behavior or security risks due to improper usage of inherited functions and state.",
    date: "2022-08-10T16:00:00",
    read: true,
    labels: ["solidity", "inheritance", "important"],
  },
  {
    id: "8dc53d68-6d36-45a2-8c51-5db4c4e76e8d",
    name: "SCVC-17",
    email: "Integer Underflow",
    subject: "Smart Contract Vulnerability - 17",
    text: "Information about Integer Underflow vulnerabilities, where arithmetic operations result in a value below the minimum value that can be represented, potentially leading to unexpected contract behavior.",
    date: "2022-07-30T17:45:00",
    read: false,
    labels: ["solidity", "underflow", "important"],
  },
];

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
        <path d="M21 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM7 3h14v18H7V3zm2 2h10v2H9V5zm0 4h10v2H9V9zm0 4h10v2H9v-2zm0 4h10v2H9v-2z" fill="currentColor" />
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
