import { FC, createElement, useState } from "react";

import { SectionContainer } from "@/components";
import content from "@/content";
import { routes, Page, Section } from "@/pageInfo";

import styles from "@/styles/components/home/features.module.scss";

const Feature: FC<{
  active: boolean;
  description: string;
  icon: FC<{ size: number }>;
  onClick: () => void;
  title: string;
}> = ({ active, description, icon, onClick, title }) => {
  return (
    <div
      {...{ onClick }}
      className={`${styles.feature} ${active ? styles.active : ""}`}
    >
      <div className={styles.icon}>{createElement(icon)}</div>
      <div className={styles["feature-info"]}>
        <div className={styles["feature-title"]}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export const Features: FC = () => {
  const { title, featureList, deviceMockup } = content[Page.HOME].features;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const features = featureList;
  const leftCol = features.filter(
    (_, index) => index < Math.floor(features.length / 2)
  );
  const rightCol = features.filter(
    (_, index) => index >= Math.floor(features.length / 2)
  );

  return (
    <div
      id={
        routes[Page.HOME].sections
          ? routes[Page.HOME].sections[Section.FEATURES]
          : undefined
      }
      className={styles.component}
    >
      <SectionContainer>
        <div className={styles.title}>{title}</div>
        <div className={styles.contents}>
          <div className={styles["edge-col"]}>
            {leftCol.map((feature, index) => (
              <Feature
                {...feature}
                active={currentIndex === index}
                key={`left-${index}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <div className={styles.device}>
            <img
              className={styles["device-mockup-wrapper"]}
              src={deviceMockup}
            />
            <img
              alt={features[currentIndex].title}
              className={styles["device-mockup"]}
              src={features[currentIndex].image || ""}
            />
          </div>
          <div className={styles["edge-col"]}>
            {rightCol.map((feature, index) => (
              <Feature
                {...feature}
                active={currentIndex === index + leftCol.length}
                key={`right-${index}`}
                onClick={() => setCurrentIndex(index + leftCol.length)}
              />
            ))}
          </div>
          <div className={styles["mobile-features"]}>
            {features.map((feature, index) => (
              <Feature
                {...feature}
                active={currentIndex === index}
                key={index}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
