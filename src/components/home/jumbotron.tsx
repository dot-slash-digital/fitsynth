import { FC, useEffect, useMemo, useRef, useState } from "react";

import { Button, SectionContainer } from "@/components";
import content from "@/content";
import { Page } from "@/pageInfo";
import { useWindowSize } from "@/utils";

import styles from "@/styles/components/home/jumbotron.module.scss";

const JumbotronImage: FC<{
  src: string;
  updateBounds: (newBounds: DOMRect) => void;
}> = ({ src, updateBounds }) => {
  const [height, setHeight] = useState<number | undefined>();
  const [width, setWidth] = useState<number | undefined>();
  const deviceMockupRef = useRef<HTMLImageElement>(null);
  const { breakpoint } = useWindowSize();

  // calculate image size/bounds
  useEffect(() => {
    if (!deviceMockupRef.current) {
      return;
    }

    const mockupStyles = getComputedStyle(deviceMockupRef.current);
    const boundingBox = deviceMockupRef.current.getBoundingClientRect();

    setHeight(parseFloat(mockupStyles.height));
    setWidth(parseFloat(mockupStyles.width));
    updateBounds(boundingBox);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint, deviceMockupRef.current, updateBounds]);

  return (
    <div
      className={styles["jumbotron-image"]}
      style={width && height ? { aspectRatio: width / height } : undefined}
    >
      <img {...{ src }} alt="App preview" className={styles["app-preview"]} />
      <img
        alt="Device mockup"
        className={styles["device-mockup"]}
        ref={deviceMockupRef}
        src="/device-mockup.png"
      />
    </div>
  );
};

export const Jumbotron: FC = () => {
  const { title, description, button } = content[Page.HOME].jumbotron;

  const [leftImageBounds, setLeftImageBounds] = useState<DOMRect>();
  const [rightImageBounds, setRightImageBounds] = useState<DOMRect>();

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.contents}>
          <div className={styles["left-col"]}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles["button-wrapper"]}>
              <Button {...button} large />
            </div>
          </div>
          <div
            className={styles["right-col"]}
            style={
              leftImageBounds &&
              rightImageBounds && {
                width:
                  leftImageBounds.width +
                  rightImageBounds.width -
                  (leftImageBounds.right - rightImageBounds.left),
              }
            }
          >
            <JumbotronImage
              src="/mockup-recipe.jpg"
              updateBounds={setLeftImageBounds}
            />
            <JumbotronImage
              src="/mockup-workout.jpg"
              updateBounds={setRightImageBounds}
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
