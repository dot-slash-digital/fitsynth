import { FC } from "react";

import { SectionContainer } from "@/components";
import content from "@/content";
import { Page } from "@/pageInfo";

import styles from "@/styles/components/blogs/jumbotron.module.scss";

export const Jumbotron: FC = () => {
  const { title } = content[Page.BLOGS];

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.contents}>
          <div className={styles.title}>{title}</div>
        </div>
      </SectionContainer>
    </div>
  );
};
