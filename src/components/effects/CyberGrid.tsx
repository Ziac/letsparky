import React from 'react';

export default function CyberGrid() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 animate-slow-drift" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
    </div>
  );
}