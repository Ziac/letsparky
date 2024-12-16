import React from 'react';

export default function FuturisticBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 animate-slow-drift" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
    </div>
  );
}