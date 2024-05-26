import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";

import Members from "@/pages/Members";
import { getMemberInfo } from "src/services/members";

import { DEFAULT_LOCALE } from "@/const";

export default Members;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const members = await getMemberInfo();
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, [
        "members",
        "common",
      ])),
      memberList: members || [],
    },
  };
};
