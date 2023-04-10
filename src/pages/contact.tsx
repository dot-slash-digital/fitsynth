import { FC } from "react";

import { CTABanner, Footer, Head, Navbar } from "@/components";
import { ContactForm } from "@/components/contact";
import content from "@/content";
import { Page } from "@/pageInfo";

const Contact: FC = () => {
  const { ctaBanner } = content[Page.CONTACT];

  return (
    <>
      <Head title="Contact" />
      <Navbar />
      <ContactForm />
      <CTABanner title={ctaBanner} />
      <Footer />
    </>
  );
};

export default Contact;
