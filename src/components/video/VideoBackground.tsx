import React from 'react';
import VideoFrame from './VideoFrame';
import VideoOverlay from './VideoOverlay';

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <VideoFrame />
      <VideoOverlay />
    </div>
  );
}