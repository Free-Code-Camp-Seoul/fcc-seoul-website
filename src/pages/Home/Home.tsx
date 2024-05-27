import { useLottie } from "lottie-react";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";

import animationData from "../../../public/assets/animations/coding.json";

import { MEETUP_LINK } from "@/const";

import styles from "./Home.module.scss";

interface HomeProps {
  eventList: string[];
}

function Home({ eventList }: HomeProps) {
  const { t } = useTranslation("home");
  const { View } = useLottie(ANIMATION_OPTIONS);

  const nextEvent = new Date(eventList?.[0]).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>FreeCodeCamp Seoul 🇰🇷</h1>
      <div className={styles.NextMeetupContainer}>
        <h1 className={styles.NextMeetupTitle}>{t("next-meetup")}</h1>
        <p className={styles.NextMeetupDate}>{nextEvent}</p>
        <a
          href={MEETUP_LINK}
          target="_blank"
          rel="noreferrer"
          className={styles.MeetupLink}
        >
          {t("more-info")}
        </a>
      </div>
      <>{View}</>
      <NextSeo title="Welcome" />
    </div>
  );
}

export default Home;

const ANIMATION_OPTIONS = {
  animationData: animationData,
  loop: true,
  className: styles.AnimationContainer,
};
