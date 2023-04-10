import { FC } from "react";

import { Form, SectionContainer } from "@/components";
import content from "@/content";
import { Page } from "@/pageInfo";

import styles from "@/styles/components/waitlist/signup-form.module.scss";

export const SignupForm: FC = () => {
  const { title, description, formFieldList, formButton } =
    content[Page.WAITLIST].signupForm;

  const handleSubmit = () => console.log("submitting");

  return (
    <div className={styles.component}>
      <div className={styles.contents}>
        <div className={styles.left} />
        <div className={styles.right}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <Form
            buttonLabel={formButton}
            fields={formFieldList}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
