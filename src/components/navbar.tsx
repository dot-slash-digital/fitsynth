import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button, SectionContainer } from "@/components";
import content from "@/content";
import {
  Page,
  Section,
  getSectionFullPath,
  getPageFromSection,
} from "@/pageInfo";

import styles from "@/styles/components/navbar.module.scss";
import { Logo } from "./icons";

const LinkItem: FC<{ link: string | Section; text: string }> = ({
  link,
  text,
}) => {
  const router = useRouter();

  const isSection = link in Section;
  const section = link as Section;
  const page = getPageFromSection(section) as Page;

  return (
    <div className={styles.link}>
      <Link
        href={
          isSection && page ? getSectionFullPath(router, page, section) : link
        }
        scroll={!isSection}
      >
        {text}
      </Link>
    </div>
  );
};

export const Navbar = () => {
  const { logo, linkList, buttonLink } = content.global.navbar;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "initial";
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        className={`${styles.component} ${
          isMobileMenuOpen ? styles["mobile-menu-open"] : ""
        }`}
      >
        <SectionContainer>
          <div className={styles.contents}>
            <div className={styles["head"]}>
              <Link href={logo.link}>
                <Logo size={40} />
              </Link>
              <div
                className={`${styles["mobile-menu-button"]} ${
                  isMobileMenuOpen ? styles.open : ""
                }`}
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
              </div>
            </div>
            <div className={styles["links-wrapper"]}>
              {linkList.map((linkItem, index) => (
                <LinkItem {...linkItem} key={index} />
              ))}
              <Button {...buttonLink} />
            </div>
          </div>
        </SectionContainer>
      </div>
      <div className={styles["mobile-navbar-spacer"]} />
    </>
  );
};
