import { FC } from "react";

export const StarIcon: FC<{
  size: number;
  type: "empty" | "half-filled" | "filled";
}> = ({ size, type }) => (
  <svg height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    {type === "empty" && (
      <path d="M16.15 37.75L24 33.05L31.85 37.8L29.75 28.9L36.65 22.9L27.55 22.1L24 13.7L20.45 22.05L11.35 22.85L18.25 28.85L16.15 37.75ZM11.65 44L14.9 29.95L4 20.5L18.4 19.25L24 6L29.6 19.25L44 20.5L33.1 29.95L36.35 44L24 36.55L11.65 44Z" />
    )}
    {type === "half-filled" && (
      <path d="M24 33.05L31.85 37.8L29.75 28.9L36.65 22.9L27.55 22.1L24 13.7V33.05ZM11.65 44L14.9 29.95L4 20.5L18.4 19.25L24 6L29.6 19.25L44 20.5L33.1 29.95L36.35 44L24 36.55L11.65 44Z" />
    )}
    {type === "filled" && (
      <path d="M11.65 44L14.9 29.95L4 20.5L18.4 19.25L24 6L29.6 19.25L44 20.5L33.1 29.95L36.35 44L24 36.55L11.65 44Z" />
    )}
  </svg>
);
