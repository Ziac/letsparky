import React from 'react';
import { YOUTUBE_VIDEO_ID } from '@/utils/youtube';
import VideoFrame from '../video/VideoFrame';
import VideoOverlay from '../video/VideoOverlay';

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <VideoFrame videoId={YOUTUBE_VIDEO_ID} />
      <VideoOverlay />
    </div>
  );
}