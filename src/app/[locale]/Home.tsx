"use client";

import { useTranslations } from "next-intl";
import styles from "./Home.module.scss";

import { useLottie } from "lottie-react";

import animationData from "@/assets/animations/coding.json";

import { MEETUP_LINK } from "@/const";

interface HomeProps {
  eventList: string[];
}

function Home({ eventList }: HomeProps) {
  const t = useTranslations("home");
  const { View } = useLottie(ANIMATION_OPTIONS);

  const hasNoEvents = eventList.length === 0;

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
        <p className={styles.NextMeetupDate}>
          {hasNoEvents ? "TBD" : nextEvent}
        </p>
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
    </div>
  );
}

export default Home;

const ANIMATION_OPTIONS = {
  animationData: animationData,
  loop: true,
  className: styles.AnimationContainer,
};
