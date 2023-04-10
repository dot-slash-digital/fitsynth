import { useEffect, useState } from "react";

import bp from "@/styles/breakpoints-for-typescript.module.scss";

export enum Breakpoint {
  MOBILE_PORTRAIT = "MOBILE_PORTRAIT",
  MOBILE_LANDSCAPE = "MOBILE_LANDSCAPE",
  TABLET = "TABLET",
  SMALL_DESKTOP = "SMALL_DESKTOP",
  DESKTOP = "DESKTOP",
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<
    | {
        width: number;
        height: number;
      }
    | undefined
  >();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let breakpoint;
  if (!windowSize) {
    breakpoint = null;
  } else if (windowSize.width <= parseInt(bp.mobilePortrait)) {
    breakpoint = Breakpoint.MOBILE_PORTRAIT;
  } else if (windowSize.width <= parseInt(bp.mobileLandscape)) {
    breakpoint = Breakpoint.MOBILE_LANDSCAPE;
  } else if (windowSize.width <= parseInt(bp.tablet)) {
    breakpoint = Breakpoint.TABLET;
  } else if (windowSize.width <= parseInt(bp.smallDesktop)) {
    breakpoint = Breakpoint.SMALL_DESKTOP;
  } else {
    breakpoint = Breakpoint.DESKTOP;
  }

  return { breakpoint, windowSize };
};
