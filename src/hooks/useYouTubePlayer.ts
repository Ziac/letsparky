import { useEffect, useRef, useCallback } from 'react';
import { loadYouTubeAPI } from '@/utils/youtube';
import { useVideo } from '@/components/video/VideoProvider';

export function useYouTubePlayer(videoId: string, elementId: string) {
  const playerRef = useRef<YT.Player | null>(null);
  const { setIsLoading, setIsPlaying, setError } = useVideo();

  const initPlayer = useCallback(async () => {
    try {
      await loadYouTubeAPI();

      if (!window.YT) {
        throw new Error('YouTube API failed to load');
      }

      playerRef.current = new window.YT.Player(elementId, {
        videoId,
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
            setIsLoading(false);
            setIsPlaying(true);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
          onError: () => {
            setError('Failed to load video');
            setIsLoading(false);
          }
        }
      });
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to initialize player');
      setIsLoading(false);
    }
  }, [videoId, elementId, setIsLoading, setIsPlaying, setError]);

  useEffect(() => {
    initPlayer();

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [initPlayer]);

  return playerRef;
}