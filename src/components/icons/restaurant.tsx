import { FC } from "react";

export const Restaurant: FC<{ size: number }> = ({ size }) => (
  <svg height={size} viewBox="0 96 960 960" xmlns="http://www.w3.org/2000/svg">
    <path d="M285 976V608q-52-11-88.5-52.5T160 456V176h60v280h65V176h60v280h65V176h60v280q0 58-36.5 99.5T345 608v368h-60Zm415 0V656H585V351q0-79 48-127t127-48v800h-60Z" />
  </svg>
);
