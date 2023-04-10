import { FC } from "react";

import { Form, SectionContainer } from "@/components";
import content from "@/content";
import { Page } from "@/pageInfo";

import styles from "@/styles/components/contact/contact-form.module.scss";

export const ContactForm: FC = () => {
  const { title, descriptionParagraphs, formFieldList, formButton } =
    content[Page.CONTACT].contactForm;

  const handleSubmit = () => console.log("submitting");

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.contents}>
          <div className={styles["left-col"]}>
            <div className={styles.title}>{title}</div>
            {descriptionParagraphs.map((paragraph, index) => (
              <div className={styles["description-paragraph"]} key={index}>
                {paragraph}
              </div>
            ))}
          </div>
          <div className={styles["right-col"]}>
            <Form
              buttonLabel={formButton}
              fields={formFieldList}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
