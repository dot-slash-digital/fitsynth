import { FC, Fragment } from "react";
import { useRouter } from "next/router";

import { CTABanner, Footer, Head, Navbar } from "@/components";
import { Content, Header } from "@/components/blog";
import content from "@/content";
import { Page } from "@/pageInfo";

const Blog: FC = () => {
  const router = useRouter();
  const { ctaBanner } = content[Page.BLOG];

  const querySlug = router.query.slug;
  const slug = Array.isArray(querySlug) || !querySlug ? "" : querySlug;

  const currentBlog = content.blogs.find((blog) => blog.slug === slug);

  if (!currentBlog) {
    return <Fragment />;
  }

  const { date, image, tags, title, content: blogContent } = currentBlog;

  return (
    <>
      <Head {...{ title }} hide description={blogContent[0].text} />
      <Navbar />
      <Header {...{ date, image, tags, title }} />
      <Content content={blogContent} />
      <CTABanner title={ctaBanner} />
      <Footer />
    </>
  );
};

export default Blog;
