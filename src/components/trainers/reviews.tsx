import { FC, useMemo } from "react";

import { SectionContainer, StarRating } from "@/components";
import { Breakpoint, useWindowSize } from "@/utils";

import styles from "@/styles/components/trainers/reviews.module.scss";
import sharedStyles from "@/styles/components/trainers/shared.module.scss";

interface Card {
  author: string;
  quote: string;
  rating: number;
}

const Card: FC<Card> = ({ author, quote, rating }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-header"]}>
        <div className={styles["author"]}>{author}</div>
        <StarRating {...{ rating }} />
      </div>
      <div className={styles["quote"]}>{quote}</div>
    </div>
  );
};

export const Reviews: FC<{ cards: Card[] }> = ({ cards }) => {
  const { breakpoint } = useWindowSize();

  const numColumns = useMemo(() => {
    if (breakpoint === Breakpoint.MOBILE_PORTRAIT) {
      return 1;
    }

    if (breakpoint === Breakpoint.MOBILE_LANDSCAPE) {
      return 2;
    }

    return 3;
  }, [breakpoint]);

  const columns = useMemo(
    () =>
      Array.apply(null, Array(numColumns)).map((_, columnIndex) =>
        cards.filter((_, cardIndex) => cardIndex % numColumns === columnIndex)
      ),
    [cards, numColumns]
  );

  return (
    <div className={styles["component"]}>
      <SectionContainer>
        <div className={styles["contents"]}>
          <div className={sharedStyles["title"]}>Reviews</div>
          <div
            className={styles["cards"]}
            style={{
              gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
            }}
          >
            {columns.map((column, columnIndex) => (
              <div className={styles["column"]} key={columnIndex}>
                {column.map((card, cardIndex) => (
                  <Card {...card} key={`${columnIndex}-${cardIndex}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
