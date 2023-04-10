import { FC } from "react";

export const CloudSync: FC<{ size: number }> = ({ size }) => (
  <svg height={size} viewBox="0 96 960 960" xmlns="http://www.w3.org/2000/svg">
    <path d="M167 896v-60h130q-64-48-100.5-108.5T160 579q0-100 59-186.5T387 272v62q-71 26-119 93t-48 152q0 64 27.5 117.5T337 790V666h60v230H167Zm433 0q-50 0-85-35t-35-85q0-48 33-83t81-37q17-36 50.5-58t75.5-22q53 0 91.5 34.5T858 696h2q42 0 71 30t29 69q0 42-29 71.5T860 896H600Zm136-360q-11-51-38-93.5T626 362v124h-60V256h230v60H665q49 41 86.5 100.5T797 536h-61ZM600 836h260q17 0 28.5-11.5T900 796q0-17-11.5-28.5T860 756h-50v-30q0-38-26-64t-64-26q-38 0-64 24.5T630 716h-30q-25 0-42.5 17.5T540 776q0 25 17.5 42.5T600 836Zm120-100Z" />
  </svg>
);