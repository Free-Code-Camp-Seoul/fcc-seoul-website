import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import meetupImage from "public/assets/images/fcc-location.jpg";
import kakaoMapsLogo from "public/assets/images/kakao-maps.png";
import naverMapsLogo from "public/assets/images/naver-maps.png";

import styles from "./Events.module.scss";

const NAVER_MAPS_URL = "https://naver.me/xaC9isrW";
const KAKAO_MAPS_URL = "http://kko.to/fkhQtFpFz";

interface EventsProps {}

const Events = ({}: EventsProps) => {
  const { t } = useTranslation("events");
  return (
    <div className={styles.Events}>
      <p className={styles.Times}>{t("schedule")}</p>
      <Image alt="meetup location" className={styles.Image} src={meetupImage} />
      <p className={styles.Location}>{t("address")}</p>
      <div className={styles.MapLinks}>
        <a
          className={styles.MapLink}
          target="_blank"
          rel="noreferrer"
          href={KAKAO_MAPS_URL}
        >
          <Image className={styles.Logo} alt="kakao maps" src={kakaoMapsLogo} />
        </a>
        <a
          className={styles.MapLink}
          target="_blank"
          rel="noreferrer"
          href={NAVER_MAPS_URL}
        >
          <Image className={styles.Logo} alt="naver maps" src={naverMapsLogo} />
        </a>
      </div>
      <p className={styles.Description}>{t("description")}</p>
    </div>
  );
};

export default Events;
