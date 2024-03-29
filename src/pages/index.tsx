import { FC } from "react";

import { CTABanner, Footer, Head, Navbar } from "@/components";
import { Benefits, Features, Jumbotron, UserTypes } from "@/components/home";
import content from "@/content";
import { Page } from "@/pageInfo";

const Home: FC = () => {
  const { ctaBanner } = content[Page.HOME];

  return (
    <>
      <Head />
      <Navbar />
      <Jumbotron />
      <Features />
      <Benefits />
      <CTABanner title={ctaBanner} />
      <UserTypes />
      <Footer />
    </>
  );
};

export default Home;
