import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-semibold transition-all',
        {
          'bg-orange-500 hover:bg-orange-600 text-white': variant === 'primary',
          'bg-white/5 hover:bg-white/10 text-white': variant === 'secondary',
          'border border-orange-500/20 text-orange-500 hover:bg-orange-500/10': variant === 'outline',
          'px-4 py-2 text-sm rounded-lg': size === 'sm',
          'px-6 py-3 rounded-xl': size === 'md',
          'px-8 py-4 rounded-xl': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}