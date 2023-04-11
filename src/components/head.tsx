import { FC } from "react";
import NextHead from "next/head";
import Script from "next/script";

const GoogleAnalytics: FC = () => {
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
            gtag('config', 'G-CD4B7KQ96Y', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export const Head: FC<{ description?: string; title?: string }> = ({
  description,
  title,
}) => {
  return (
    <NextHead>
      <title>{title ? `${title} | FitSynth` : "FitSynth"}</title>
      <meta name="description" content={description || ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#35363a" />
      <GoogleAnalytics />
    </NextHead>
  );
};
