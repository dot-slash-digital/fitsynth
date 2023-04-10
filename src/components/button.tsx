import { FC } from "react";
import Link from "next/link";

import styles from "@/styles/components/button.module.scss";

export const Button: FC<{
  isSubmit?: boolean;
  large?: boolean;
  link?: string;
  title: string;
}> = ({ isSubmit, large, link, title }) => {
  const isExternal =
    link && (link.startsWith("https://") || link.startsWith("http://"));
  const props = {
    className: `${styles.component} ${large ? styles.large : ""} ${
      isSubmit ? styles.submit : ""
    }`,
    href: link || "",
  };

  return (
    <>
      {isSubmit && !isExternal && (
        <button className={props.className} type="submit">
          {title}
        </button>
      )}
      {!isSubmit && isExternal && (
        <a {...props} target="_blank">
          {title}
        </a>
      )}
      {!isSubmit && !isExternal && <Link {...props}>{title}</Link>}
    </>
  );
};
