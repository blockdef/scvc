"use client";

import { Separator } from "@/components/ui/separator";
import Sidebar from "@/components/dashboard/sidebar-nav";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-20">
        <div className="py-8 space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="space-y-2">
              <Link
                href="/"
                className="md:hidden flex items-center text-xs hover:underline text-muted-foreground mb-4"
              >
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h2 className="text-2xl font-bold leading-tight">Settings</h2>
              <p className="text-muted-foreground text-sm">
                Manage your account settings and set e-mail preferences.
              </p>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="space-y-8 lg:space-y-0">
            <aside className="w-full lg:w-1/4">
              <Sidebar />
            </aside>
            <div className="flex-1 max-w-3xl">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
