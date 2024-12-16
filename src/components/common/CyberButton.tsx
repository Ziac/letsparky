import React from 'react';
import { cn } from '@/utils/cn';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  glowColor?: string;
}

export default function CyberButton({ 
  children, 
  className, 
  variant = 'primary',
  glowColor = 'from-orange-500 to-orange-400',
  ...props 
}: CyberButtonProps) {
  return (
    <button
      className={cn(
        'relative group overflow-hidden rounded-lg transition-all duration-300',
        'before:absolute before:inset-0 before:bg-gradient-to-r',
        'before:transition-all before:duration-300',
        variant === 'primary' 
          ? `before:${glowColor} hover:before:opacity-90` 
          : 'before:from-white/10 before:to-white/5 hover:before:opacity-20',
        'hover:scale-105 active:scale-95',
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center px-8 py-3">
        <div className="absolute inset-0 flex">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-[2px] w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent
                         animate-[glow_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"
              style={{
                animationDelay: `${i * 0.2}s`,
                transform: `rotate(${i * 90}deg)`,
                transformOrigin: 'center',
              }}
            />
          ))}
        </div>
        {children}
      </span>
    </button>
  );
}