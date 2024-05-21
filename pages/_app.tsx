import "./globals.scss";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { inter, interTight } from "./fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${interTight.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default appWithTranslation(MyApp);
