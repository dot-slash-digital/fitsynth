import {
  ChangeEvent,
  FC,
  createElement,
  useEffect,
  useRef,
  useState,
} from "react";

import { Button, SectionContainer } from "@/components";
import { ChevronDownIcon } from "@/components/icons";
import content from "@/content";
import { routes, Page, Section } from "@/pageInfo";
import { useWindowSize } from "@/utils";

import styles from "@/styles/components/home/user-types.module.scss";

const sidenavGap = 16;

export const UserTypes: FC = () => {
  const { title, userTypeList, button } = content[Page.HOME].userTypes;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sidenavItemHeight, setSidenavItemHeight] = useState<number>(0);
  const sidenavRef = useRef<HTMLDivElement>(null);
  const { breakpoint } = useWindowSize();

  useEffect(() => {
    if (!sidenavRef.current) {
      return;
    }

    const sidenavItems = sidenavRef.current.children;
    setSidenavItemHeight(
      sidenavItems.length ? sidenavItems[0].clientHeight : 0
    );
  }, [breakpoint]);

  return (
    <div
      id={
        routes[Page.HOME].sections
          ? routes[Page.HOME].sections[Section.USERS]
          : undefined
      }
      className={styles.component}
    >
      <SectionContainer>
        <div className={styles.title}>{title}</div>
        <div className={styles.contents}>
          <div className={styles.sidenav}>
            <div
              className={styles["active-border"]}
              style={{
                height: sidenavItemHeight,
                marginTop:
                  currentIndex * sidenavItemHeight + currentIndex * sidenavGap,
              }}
            ></div>
            <div
              className={styles["user-type-titles"]}
              ref={sidenavRef}
              style={{ gap: sidenavGap }}
            >
              {userTypeList.map(({ title }, index) => (
                <div
                  className={`${styles["user-type-title"]} ${
                    currentIndex === index ? styles.active : ""
                  }`}
                  key={title}
                  onClick={() => setCurrentIndex(index)}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
          <div className={styles["mobile-dropdown"]}>
            <select
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setCurrentIndex(parseInt(e.target.value))
              }
              value={currentIndex}
            >
              {userTypeList.map(({ title }, index) => (
                <option key={index} value={index}>
                  {title}
                </option>
              ))}
            </select>
            <div className={styles["svg-wrapper"]}>
              <ChevronDownIcon size={20} />
            </div>
          </div>
          <div className={styles["current-type-info"]}>
            <div className={styles["info-title"]}>
              {userTypeList[currentIndex].title}
            </div>
            <div className={styles.features}>
              {userTypeList[currentIndex].featureList.map((feature, index) => (
                <div className={styles.feature} key={index}>
                  {feature.icon && (
                    <div className={styles["feature-icon"]}>
                      {createElement(feature.icon)}
                    </div>
                  )}
                  <div className={styles["feature-info"]}>
                    <div className={styles["feature-title"]}>
                      {feature.title}
                    </div>
                    <div className={styles["feature-description"]}>
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles["button-wrapper"]}>
              <Button {...button} large />
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
