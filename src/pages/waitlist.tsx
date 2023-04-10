import { FC } from "react";

import { Footer, Head, Navbar } from "@/components";
import { SignupForm } from "@/components/waitlist";

const Waitlist: FC = () => {
  return (
    <>
      <Head title="Waitlist Signup" />
      <Navbar />
      <SignupForm />
      <Footer />
    </>
  );
};

export default Waitlist;
