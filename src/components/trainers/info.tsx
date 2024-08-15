import { createElement, FC, useEffect, useMemo, useRef, useState } from "react";

import { SectionContainer } from "@/components";
import { Breakpoint, classes, useWindowSize } from "@/utils";

import styles from "@/styles/components/trainers/info.module.scss";
import sharedStyles from "@/styles/components/trainers/shared.module.scss";

type SocialMediaIcon = FC<{ size: number }>;

interface Pill {
  icon?: SocialMediaIcon;
  label: string;
  link?: string;
}

interface SocialMediaLink extends Pill {
  icon: SocialMediaIcon;
  link: string;
}

const Pill: FC<Pill> = ({ icon, label, link }) => {
  const PillContents = () => (
    <>
      {!!icon && createElement(icon, { size: 18 })}
      <div className={styles["label"]}>{label}</div>
    </>
  );

  return !!link ? (
    <a {...classes(styles, ["pill", "link"])} href={link} target="_blank">
      <PillContents />
    </a>
  ) : (
    <div className={styles["pill"]}>
      <PillContents />
    </div>
  );
};

const getDefault = (items: any[]) => items.map((_, index) => index);

const Column: FC<{ items: Pill[]; title: string }> = ({ items, title }) => {
  const { breakpoint } = useWindowSize();
  const [isReady, setReady] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [renderedIndexes, setRenderedIndexes] = useState<number[]>(
    getDefault(items)
  );
  const listRef = useRef<HTMLDivElement>(null);

  const listHeight = useMemo(
    () =>
      breakpoint &&
      [Breakpoint.MOBILE_LANDSCAPE, Breakpoint.MOBILE_PORTRAIT].includes(
        breakpoint
      )
        ? 100
        : 200,
    [breakpoint]
  );

  useEffect(() => {
    setReady(false);
    setRenderedIndexes(getDefault(items));
    // reset only when breakpoint changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint]);

  useEffect(() => {
    if (!listRef.current || isReady) {
      return;
    }

    if (listRef.current.clientHeight > listHeight) {
      setRenderedIndexes((indexes) => indexes.slice(0, -1));
      setShowAll(false);
    } else {
      setReady(true);
    }
  }, [isReady, items, listHeight, renderedIndexes.length, showAll]);

  useEffect(() => {
    if (showAll) {
      setRenderedIndexes(getDefault(items));
    }
    // only render when `showAll` changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAll]);

  return (
    <div
      className={styles["column"]}
      style={{ visibility: isReady ? "visible" : "hidden" }}
    >
      <div className={sharedStyles["title"]}>{title}</div>
      <div className={styles["list"]} ref={listRef}>
        {renderedIndexes.map((index) => (
          <Pill {...items[index]} key={index} />
        ))}
      </div>
      {!showAll && (
        <div className={styles["view-all"]} onClick={() => setShowAll(true)}>
          View All
        </div>
      )}
    </div>
  );
};

export const Info: FC<{
  accreditations: string[];
  services: string[];
  socialMediaLinks: SocialMediaLink[];
}> = ({ accreditations, services, socialMediaLinks }) => {
  return (
    <div className={styles["component"]}>
      <SectionContainer>
        <div className={styles["columns"]}>
          <Column items={socialMediaLinks} title="Social Media" />
          <Column
            items={accreditations.map((label) => ({ label }))}
            title={`${accreditations.length} Accreditation${
              accreditations.length === 1 ? "" : "s"
            }`}
          />
          <Column
            items={services.map((label) => ({ label }))}
            title={`${services.length} Service${
              services.length === 1 ? "" : "s"
            }`}
          />
        </div>
      </SectionContainer>
    </div>
  );
};
