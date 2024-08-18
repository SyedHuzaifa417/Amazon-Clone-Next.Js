import React, { ReactElement } from "react";
import Header from "./header/Header";
import HeaderBottom from "./header/HeaderBottom";
import Footer from "./Footer";
import Head from "next/head";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Amazon.com. Spend less. Smile more.</title>
        <meta name="syed huzaifa" content="project..." />
      </Head>
      <Header />
      <HeaderBottom />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
