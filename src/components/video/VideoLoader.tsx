import React from 'react';

export default function VideoLoader() {
  return (
    <div className="absolute inset-0 z-10">
      <div className="absolute inset-0 bg-black animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
      </div>
    </div>
  );
}