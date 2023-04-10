import { FC, ReactNode } from "react";

import styles from "@/styles/components/section-container.module.scss";

export const SectionContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
