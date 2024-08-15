import { FC } from "react";

import { SectionContainer } from "@/components";

import styles from "@/styles/components/trainers/about.module.scss";
import sharedStyles from "@/styles/components/trainers/shared.module.scss";

export const About: FC<{ content: string }> = ({ content }) => {
  return (
    <div className={styles["component"]}>
      <SectionContainer>
        <div className={styles["contents"]}>
          <div className={sharedStyles["title"]}>About Me</div>
          <div className={styles["content"]}>{content}</div>
        </div>
      </SectionContainer>
    </div>
  );
};
