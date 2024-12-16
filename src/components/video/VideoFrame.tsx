import React, { useEffect, useRef } from 'react';
import { useVideoSize } from '@/hooks/useVideoSize';
import { loadYouTubeAPI, YOUTUBE_VIDEO_ID } from '@/utils/youtube';
import VideoLoader from './VideoLoader';

export default function VideoFrame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const { width, height } = useVideoSize(containerRef);

  useEffect(() => {
    let mounted = true;

    const initPlayer = async () => {
      try {
        await loadYouTubeAPI();

        if (!mounted || !window.YT) return;

        playerRef.current = new window.YT.Player('youtube-player', {
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            loop: 1,
            modestbranding: 1,
            mute: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            start: 0
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            }
          }
        });
      } catch (error) {
        console.error('Error initializing YouTube player:', error);
      }
    };

    initPlayer();

    return () => {
      mounted = false;
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div id="youtube-player" className="absolute" style={{
        width: `${width}px`,
        height: `${height}px`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }} />
      <VideoLoader />
    </div>
  );
}