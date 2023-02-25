import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "./globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default appWithTranslation(MyApp);
