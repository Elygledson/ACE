export function isMobile(): boolean {
  const mediaQuery = window.matchMedia('(max-width: 600px)');
  return mediaQuery.matches;
}
