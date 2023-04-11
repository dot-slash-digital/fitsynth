import { FC } from "react";
import Script from "next/script";

export const GoogleAnalytics: FC = () => {
  // disable for local development
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CD4B7KQ96Y"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CD4B7KQ96Y');
          `,
        }}
      />
    </>
  );
};
