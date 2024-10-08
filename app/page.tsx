import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div>
      {/* Section for larger screens */}
      <section className="relative hidden sm:flex items-center justify-center py-2 md:py-2 lg:py-2">
        <div className="bg-body-grid rounded-xl bg-primary/80 p-60 pb-[28rem] shadow-lg max-w-[88rem] w-full relative">
          <div className="space-y-4 text-center pt-6"></div>
          <div className="absolute top-[31rem] left-4 transform -translate-y-3/4">
            <p className="text-sm font-extrabold text-white">By BLOCKDEF</p>
          </div>
          <div className="absolute top-[39.5rem] left-4 transform -translate-y-1/2 max-w-96">
            <p className="text-3xl font-medium text-white">
              The Smart Contract Vulnerability Classification
            </p>
          </div>
          <div className="absolute top-[36rem] right-4 transform -translate-y-1/2 max-w-72">
            <p className="text-sm font-normal text-white">
              The Smart Contract Vulnerability Classification is a comprehensive
              framework designed to identify, categorize, and assess
              vulnerabilities in smart contracts.
            </p>
          </div>
          <div className="absolute top-[40.5rem] right-[4.7rem] transform -translate-y-1/2 max-w-72">
            <Link
              href={`${process.env.NEXT_PUBLIC_DOCUMENTATION}/contributions`}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Button
                variant="outline"
                className="w-full bg-white/90 border-transparent hover:bg-gray-200 text-black hover:text-black md:w-auto mr-[0.5rem] shadow-xl shadow-black"
              >
                Contribute
              </Button>
            </Link>
            <Link href="/scvc-dashboard">
              <Button
                variant="outline"
                className="w-full border-transparent text-white bg-black/70 hover:bg-gray-800 hover:text-white md:w-auto mx-[0.1rem] shadow-md shadow-slate-200"
              >
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section for xs devices or mobile devices */}
      <section className="flex sm:hidden flex-col items-center justify-center h-screen bg-body-grid rounded-xl bg-primary/80">
        <h2 className="text-white text-md mb-4 font-bold">
          For the full experience, view on desktop
        </h2>
        <Link href="/scvc-dashboard">
          <Button
            variant="outline"
            className="text-md border-transparent text-white bg-black/70 hover:bg-gray-800 hover:text-white shadow-md shadow-slate-200"
          >
            Launch SCVC Dashboard
          </Button>
        </Link>
      </section>
    </div>
  )
}
