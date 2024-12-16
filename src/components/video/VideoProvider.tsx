import React, { createContext, useContext, useState } from 'react';

interface VideoContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const VideoContext = createContext<VideoContextType | null>(null);

export function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
}

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <VideoContext.Provider value={{
      isLoading,
      setIsLoading,
      isPlaying,
      setIsPlaying,
      error,
      setError
    }}>
      {children}
    </VideoContext.Provider>
  );
}