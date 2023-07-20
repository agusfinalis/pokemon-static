import Head from "next/head";
import React from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const origin = typeof window === undefined ? "" : window.location.origin;

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Agustin Ramis" />
        <meta name="description" content={`Informacion sobre el ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pkedex`} />

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
