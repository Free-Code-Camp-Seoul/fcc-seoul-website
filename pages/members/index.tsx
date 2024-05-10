import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";

import Members from "@/pages/Members";

import { DEFAULT_LOCALE } from "@/const";

export default Members;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, [
        "members",
        "common",
      ])),
    },
  };
};
