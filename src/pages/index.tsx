import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import styles from "@/styles/home.module.scss";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>FitSynth</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
    </>
  );
};

export default Home;
