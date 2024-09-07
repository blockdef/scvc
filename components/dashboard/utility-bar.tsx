

import React, {useState} from 'react'
import { Button } from '@/components/ui/button'
import { Download, PlusCircle, CheckIcon, UsersIcon, Share2 } from 'lucide-react'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import Link from 'next/link'
import { copyToClipboard } from '@/lib/copy'

export default function UtilityBar() {
  const [shareIcon, setShareIcon] = useState<'share' | 'check'>('share');

  const handleShare = () => {
    copyToClipboard(window.location.href);
    setShareIcon('check');
    const timer = setTimeout(() => setShareIcon('share'), 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="border-b shadow-lg z-50 px-4 py-2 md:px-6 flex items-center justify-between rounded-lg border bg-card text-card-foreground">
      <div className="flex items-center gap-4">
        <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(process.env.NEXT_PUBLIC_BLOCKDEF_SITE ?? '#', '_blank')}
            >
              <Download className="size-4" />
              <span className="sr-only">Open Blockdef</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Clone</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={handleShare} variant="ghost" size="icon">
              {shareIcon === 'share' ? <Share2 className="size-4" /> : <CheckIcon className="size-4" />}
              <span className="sr-only">Share</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(process.env.NEXT_PUBLIC_BLOCKDEF_SITE ?? '#', '_blank')}
            >
              <UsersIcon className="size-4" />
              <span className="sr-only">Contribute</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Contribute</TooltipContent>
        </Tooltip>
        </TooltipProvider>
      </div>
      <Link href={process.env.NEXT_PUBLIC_SCVC_GITHUB_REPO as string || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2">
        <PlusCircle className="size-4" />
        <span className="hidden md:block">Add Vulnerability</span>
      </Link>
    </div>
  )
}



