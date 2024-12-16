import React from 'react';
import { cn } from '@/utils/cn';

interface HolographicCardProps {
  className?: string;
  children: React.ReactNode;
}

export default function HolographicCard({ className, children }: HolographicCardProps) {
  return (
    <div className="group perspective">
      <div
        className={cn(
          'relative transform-gpu transition-all duration-500 group-hover:scale-[1.02]',
          'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br',
          'before:from-orange-500/20 before:to-purple-500/20 before:opacity-0',
          'before:transition-opacity before:duration-500 group-hover:before:opacity-100',
          'after:absolute after:inset-0 after:rounded-xl after:backdrop-blur-[2px]',
          'bg-gradient-to-br from-gray-900/90 to-black/90',
          'border border-white/10 rounded-xl p-6',
          className
        )}
      >
        <div className="relative z-10">{children}</div>
        
        {/* Holographic effect */}
        <div className="absolute inset-0 bg-cyber-grid opacity-20 rounded-xl" />
        
        {/* Glow effects */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}