export function useOverflow() {
  const stopScroll = () => {
    document.body.style.overflowY = 'hidden';
  };
  const resumeScroll = () => {
    document.body.style.overflowY = 'scroll';
  };

  return {
    stopScroll,
    resumeScroll,
  };
}
