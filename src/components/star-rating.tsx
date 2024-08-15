import { FC } from "react";

import { StarIcon } from "@/components/icons";

import styles from "@/styles/components/star-rating.module.scss";

export const StarRating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className={styles["component"]}>
      {[1, 2, 3, 4, 5].map((num) => {
        let type: "empty" | "half-filled" | "filled" = "filled";
        if (rating < num - 0.66) {
          type = "empty";
        } else if (rating < num - 0.33) {
          type = "half-filled";
        }

        return <StarIcon {...{ type }} key={num} size={24} />;
      })}
    </div>
  );
};
