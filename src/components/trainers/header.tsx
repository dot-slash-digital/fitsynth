import { FC } from "react";
import Image from "next/image";

import { SectionContainer, StarRating } from "@/components";

import styles from "@/styles/components/trainers/header.module.scss";

export const Header: FC<{
  hourlyRate: number;
  location: string;
  name: string;
  profileImage: string;
  pronouns: string;
  rating: number;
  reviewCount: number;
}> = ({
  hourlyRate,
  location,
  name,
  profileImage,
  pronouns,
  rating,
  reviewCount,
}) => {
  return (
    <div className={styles["component"]}>
      <SectionContainer>
        <div className={styles["contents"]}>
          <Image
            alt="Profile image"
            className={styles["profile-image"]}
            height={200}
            src={profileImage}
            width={200}
          />
          <div className={styles["main-info"]}>
            <div className={styles["top"]}>
              <div className={styles["name"]}>{name}</div>
              <div className={styles["pronouns"]}>({pronouns})</div>
            </div>
            <div className={styles["bottom"]}>
              <div className={styles["bottom-row"]}>{location}</div>
              <div className={styles["bottom-row"]}>
                Starts at $
                {new Intl.NumberFormat("en-US").format(Math.round(hourlyRate))}
                /hour
              </div>
              <div className={styles["bottom-row"]}>
                <StarRating {...{ rating }} />
                <span>
                  {reviewCount} review{reviewCount === 1 ? "" : "s"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
