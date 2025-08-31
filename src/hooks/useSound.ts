export const useSound = () => {
  const playClickSound = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {
      // Ignore errors - some browsers block autoplay
    });
  };

  return { playClickSound };
};
