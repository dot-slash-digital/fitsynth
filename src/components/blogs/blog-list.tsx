import { FC } from "react";
import Link from "next/link";

import { SectionContainer } from "@/components";
import content from "@/content";
import { Page, routes } from "@/pageInfo";

import styles from "@/styles/components/blogs/blog-list.module.scss";

const Blog: FC<{
  slug: string;
  image: string;
  title: string;
  date: Date;
}> = ({ slug, image, title, date }) => {
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link className={styles.blog} href={`${routes[Page.BLOGS].page}/${slug}`}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{formattedDate}</div>
    </Link>
  );
};

export const BlogList: FC = () => {
  const { blogs } = content;

  return (
    <div className={styles.component}>
      <SectionContainer>
        <div className={styles.contents}>
          {blogs.map((blog, index) => (
            <Blog {...blog} key={index} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};
