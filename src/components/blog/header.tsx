import { FC, Fragment } from "react";

import { SectionContainer } from "@/components";

import styles from "@/styles/components/blog/header.module.scss";

export const Header: FC<{
  date: Date;
  image: string;
  tags: string[];
  title: string;
}> = ({ date, image, tags, title }) => {
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.contents}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className={styles.right}>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>{formattedDate}</div>
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <div className={styles.tag} key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
