import { FC } from "react";
import Link from "next/link";

import { SectionContainer } from "@/components";
import content from "@/content";

import styles from "@/styles/components/footer.module.scss";

export const Footer: FC = () => {
  const { copyright, emailAddress, pageList, socialMediaList } =
    content.global.footer;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.contents}>
          <div className={styles.col}>
            <div className={styles.copyright}>{copyright}</div>
            {pageList.length > 0 && (
              <div className={styles.links}>
                {pageList.map((pageItem, index) => (
                  <Link
                    className={styles.link}
                    key={index}
                    href={pageItem.link}
                  >
                    {pageItem.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className={styles.col}>
            <a className={styles.link} href={`mailto:${emailAddress}`}>
              {emailAddress}
            </a>
            {socialMediaList.length > 0 && (
              <div className={styles["social-media-links"]}>
                {socialMediaList.map((socialMedia, index) => (
                  <a
                    className={styles["social-media-link"]}
                    href={socialMedia.link}
                    key={index}
                    target="_blank"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
