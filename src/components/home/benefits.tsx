import { FC } from "react";

import { SectionContainer } from "@/components";
import content from "@/content";
import { Page } from "@/pageInfo";

import styles from "@/styles/components/home/benefits.module.scss";

const Benefit: FC<{ description: string; image: string; title: string }> = ({
  description,
  image,
  title,
}) => {
  return (
    <div className={styles.benefit}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles["benefit-title"]}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export const Benefits: FC = () => {
  const { title, benefitList } = content[Page.HOME].benefits;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.title}>{title}</div>
        <div className={styles.contents}>
          {benefitList.map((benefit, index) => (
            <Benefit {...benefit} key={index} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};
