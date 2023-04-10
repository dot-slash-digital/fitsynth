import { FC } from "react";

export const CheckmarkIcon: FC<{ size: number }> = ({ size }) => (
  <svg
    viewBox="0 0 512 512"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="64"
      d="M416 128L192 384l-96-96"
    />
  </svg>
);
