import React from 'react';
import { cn } from '@/utils/cn';

interface NeonTextProps {
  className?: string;
  children: React.ReactNode;
  color?: string;
}

export default function NeonText({ className, children, color = 'orange' }: NeonTextProps) {
  return (
    <span
      className={cn(
        'relative inline-block transition-all duration-300',
        `text-${color}-500`,
        'hover:animate-pulse',
        className
      )}
    >
      <span className="relative z-10">
        {children}
      </span>
      <span className={`absolute inset-0 blur-[2px] text-${color}-400 animate-glow`}>
        {children}
      </span>
    </span>
  );
}