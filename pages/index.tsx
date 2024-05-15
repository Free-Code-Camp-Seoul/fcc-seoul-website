import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

import Home from "src/pages/Home";

import { getMeetupInfo } from "src/services/meetup";

import { DEFAULT_LOCALE } from "@/const";

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const events = await getMeetupInfo();
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, [
        "home",
        "common",
      ])),
      eventList: events || [],
    },
  };
};
