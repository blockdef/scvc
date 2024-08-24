import { cookies } from "next/headers"
import Image from "next/image"
import { applications, scvcs } from "@/data/scvcs"

import { Vulnerability } from "@/components/dashboard/vulnerabilities/vulnerabilities"

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Vulnerabiltity"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Vulnerabiltity"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <Vulnerability
          applications={applications}
          scvcs={scvcs}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
