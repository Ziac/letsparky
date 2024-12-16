import React from 'react';

export default function HolographicEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 animate-pulse" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
}