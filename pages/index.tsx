import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import Home from "src/pages/Home";

import { DEFAULT_LOCALE } from "@/const";

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, [
        "home",
        "common",
      ])),
    },
  };
};
