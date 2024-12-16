import React from 'react';

export default function VideoOverlay() {
  return (
    <div className="absolute inset-0 z-10">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Gradients */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black via-black/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 animate-slow-drift" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient" />
    </div>
  );
}