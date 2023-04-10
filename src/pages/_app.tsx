import type { AppProps } from "next/app";
import { Kanit, Mulish } from "next/font/google";

import "@/styles/global.scss";

const kanit = Kanit({ weight: ["500", "700"], subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-kanit: ${kanit.style.fontFamily};
          --font-mulish: ${mulish.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;
