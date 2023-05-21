import { FC, Fragment } from "react";

import { SectionContainer } from "@/components";
import content, { RichText } from "@/content";

import styles from "@/styles/components/blog/content.module.scss";

const RichTextContent: FC<{ content: any[] }> = ({ content }) => {
  return (
    <>
      {content.map((element, index) => (
        <Fragment key={index}>
          {element.type === RichText.PARAGRAPH && <p>{element.text}</p>}
          {element.type === RichText.ORDERED_LIST && (
            <ol>
              {element.items.map((listItem: string, liIndex: number) => (
                <li key={liIndex}>{listItem}</li>
              ))}
            </ol>
          )}
        </Fragment>
      ))}
    </>
  );
};

export const Content: FC<{ content: any[] }> = ({ content }) => {
  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.contents}>
          <RichTextContent {...{ content }} />
        </div>
      </SectionContainer>
    </div>
  );
};
