import React from 'react';

export default function GlowingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
    </div>
  );
}