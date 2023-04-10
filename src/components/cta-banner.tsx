import { FC, createElement } from "react";

import { Button, SectionContainer } from "@/components";
import content from "@/content";

import styles from "@/styles/components/cta-banner.module.scss";

export const CTABanner: FC<{ title: string }> = ({ title }) => {
  const { arrowIcon, button, caption } = content.global.ctaBanner;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.title}>{title}</div>
        <div className={styles["button-row"]}>
          <div className={styles["button-wrapper"]}>
            <Button {...button} large />
            <div className={styles.caption}>
              <div className={styles.arrow}>
                {createElement(arrowIcon, { size: 52 })}
              </div>
              <div className={styles.text}>{caption}</div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
