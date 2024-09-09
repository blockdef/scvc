import React from 'react';

interface BadgeEffectProps {
  text: string;
}

export default function BadgeEffect({ text }: BadgeEffectProps) {
  return (
    <div className="flex items-center mt-2">
      <span className="relative flex h-3 w-3 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
        {text}
      </span>
    </div>
  );
}
