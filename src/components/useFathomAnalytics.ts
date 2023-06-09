import { useEffect } from "react";
import * as Fathom from "fathom-client";
import { useRouter } from "next/router";

export const useFathomAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("ABJCZKTW", { includedDomains: ["fitsynth.com"] });

    const onRouteChangeComplete = () => {
      Fathom.trackPageview();
    };

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
