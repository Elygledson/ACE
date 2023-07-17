export function isMobile(): boolean {
  const mediaQuery = window.matchMedia('(max-width: 758px)');
  return mediaQuery.matches;
}
