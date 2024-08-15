import { FC, useMemo } from "react";

import { SectionContainer } from "@/components";
import {
  breakpointToContainerPaddingMap,
  breakpointToMaxWidthMap,
  useWindowSize,
} from "@/utils";

import styles from "@/styles/components/trainers/specials-and-deals.module.scss";
import sharedStyles from "@/styles/components/trainers/shared.module.scss";

interface Card {
  description: string;
  title: string;
}

export const SpecialsAndDeals: FC<{ cards: Card[] }> = ({ cards }) => {
  const { breakpoint, windowSize } = useWindowSize();

  const scrollableContainerPaddingWidth = useMemo(() => {
    const vw = windowSize?.width || 0;

    return (
      (vw -
        (breakpoint
          ? (breakpointToMaxWidthMap[breakpoint] || vw) -
            breakpointToContainerPaddingMap[breakpoint] * 2
          : 0)) /
      2
    );
  }, [breakpoint, windowSize?.width]);

  return (
    <div className={styles["component"]}>
      <div className={styles["contents"]}>
        <SectionContainer>
          <div className={sharedStyles["title"]}>Specials / Deals</div>
        </SectionContainer>
        <div className={styles["scrollable-cards-container"]}>
          <div
            className={styles["cards"]}
            style={{
              paddingLeft: scrollableContainerPaddingWidth,
              paddingRight: scrollableContainerPaddingWidth,
            }}
          >
            {cards.map(({ description, title }, index) => (
              <div className={styles["card"]} key={index}>
                <div className={styles["card-title"]}>{title}</div>
                <div className={styles["card-description"]}>{description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
