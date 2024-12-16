export const YOUTUBE_VIDEO_ID = '0h9JKqxEwH0';

export function loadYouTubeAPI(): Promise<void> {
  return new Promise((resolve) => {
    if (window.YT) {
      resolve();
      return;
    }

    // Create script tag
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Setup callback
    window.onYouTubeIframeAPIReady = () => {
      resolve();
    };
  });
}

export function calculateVideoSize(containerWidth: number, containerHeight: number) {
  const aspectRatio = 16 / 9;
  let width = containerWidth;
  let height = containerWidth / aspectRatio;

  if (height < containerHeight) {
    height = containerHeight;
    width = height * aspectRatio;
  }

  return { width, height };
}