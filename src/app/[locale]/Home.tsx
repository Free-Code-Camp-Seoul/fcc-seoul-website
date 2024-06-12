"use client";

//import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Home.module.scss";
import { NextSeo } from "next-seo";

import { useLottie } from "lottie-react";

import animationData from "@/assets/animations/coding.json";

import { MEETUP_LINK } from "@/const";

interface HomeProps {
  eventList: string[];
}

function Home({ eventList }: HomeProps) {
  const t = useTranslations("home");
  const { View } = useLottie(ANIMATION_OPTIONS);

  const nextEvent = new Date(eventList?.[0]).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>freeCodeCamp Seoul 🇰🇷</h1>
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
