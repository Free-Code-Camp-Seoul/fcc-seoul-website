import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import Members from "@/pages/Members";
import { getMemberInfo } from "src/services/members";

import { DEFAULT_LOCALE } from "@/const";

export default Members as InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
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
