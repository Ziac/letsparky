import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-4', className)}>
      {children}
    </div>
  );
}