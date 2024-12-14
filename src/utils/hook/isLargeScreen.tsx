import { useState, useEffect } from "react";

/**
 * Custom hook to check if the screen width is larger than a given breakpoint.
 *
 * @param breakpoint - The width in pixels to define a "large" screen. Defaults to 480px.
 * @returns `true` if the screen width is >= breakpoint, otherwise `false`.
 */

export function useIsLargeScreen(breakpoint: number = 480): boolean {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= breakpoint
  );
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= breakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isLargeScreen;
}
