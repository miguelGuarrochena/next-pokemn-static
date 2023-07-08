import "@/styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { dartkTheme } from "../themes";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={dartkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
