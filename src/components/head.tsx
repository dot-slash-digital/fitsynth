import { FC } from "react";
import NextHead from "next/head";

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
    </NextHead>
  );
};
