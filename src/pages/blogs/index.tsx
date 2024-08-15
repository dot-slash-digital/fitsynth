import { FC } from "react";

import { CTABanner, Footer, Head, Navbar } from "@/components";
import { BlogList, Jumbotron } from "@/components/blogs";
import content from "@/content";
import { Page } from "@/pageInfo";

const Blogs: FC = () => {
  const { ctaBanner } = content[Page.BLOGS];

  return (
    <>
      <Head hide />
      <Navbar />
      <Jumbotron />
      <BlogList />
      <CTABanner title={ctaBanner} />
      <Footer />
    </>
  );
};

export default Blogs;
