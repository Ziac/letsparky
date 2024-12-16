import { useState, useEffect, useCallback } from 'react';
import { calculateVideoSize } from '@/utils/youtube';

export function useVideoSize(containerRef: React.RefObject<HTMLDivElement>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions(calculateVideoSize(width, height));
    }
  }, []);

  useEffect(() => {
    // Initial calculation
    updateDimensions();

    // Debounced resize handler
    let timeoutId: number;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(updateDimensions, 100);
    };

    // Use ResizeObserver if available
    if (window.ResizeObserver) {
      const observer = new ResizeObserver(debouncedResize);
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      return () => observer.disconnect();
    }

    // Fallback to window resize event
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [updateDimensions]);

  return dimensions;
}