import React from 'react';
import { cn } from '@/utils/cn';

interface GlowingBorderProps {
  className?: string;
  children: React.ReactNode;
}

export default function GlowingBorder({ className, children }: GlowingBorderProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
      <div className={cn("relative bg-black rounded-lg", className)}>
        {children}
      </div>
    </div>
  );
}