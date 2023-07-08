import { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Fernando Herrera" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre el ${title}`}
        />
        <meta
          property="og:image"
          content={`https://${origin}/img/banner.jgp`}
        />
      </Head>

      <Navbar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
