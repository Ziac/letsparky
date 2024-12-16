declare namespace YT {
  interface Player {
    playVideo(): void;
    destroy(): void;
  }

  interface PlayerEvent {
    target: Player;
    data: number;
  }

  const PlayerState: {
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
}

interface Window {
  onYouTubeIframeAPIReady?: () => void;
  YT?: {
    Player: new (
      elementId: string,
      config: {
        videoId: string;
        playerVars?: Record<string, any>;
        events?: {
          onReady?: (event: YT.PlayerEvent) => void;
          onStateChange?: (event: YT.PlayerEvent) => void;
        };
      }
    ) => YT.Player;
  };
}