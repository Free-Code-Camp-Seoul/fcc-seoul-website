import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Events from "@/pages/Events";

import { DEFAULT_LOCALE } from "@/const";

export default Events;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, [
        "events",
        "common",
      ])),
    },
  };
};
